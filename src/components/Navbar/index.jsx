import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import { Footer } from "../Footer";
import { Button } from "../Generic/Button";
import { Container, Link, Logo, Main, Menu, Section, Wrapper } from "./style";
import { Dropdown } from "antd";

export const Navbar = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const onClick = () => {
    navigate("/register");
  };

  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate("/home");
    } else {
      navigate(`${name}`);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item data-name="myprofile" onClick={onClickProfile}>
        My profile
      </Menu.Item>
      <Menu.Item data-name="favourite" onClick={onClickProfile}>
        Favourites
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section logo onClick={() => navigate("/home")}>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link key={index} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {token ? (
              <Dropdown
                overlay={menu}
                placement="topRight"
                arrow={{
                  pointAtCenter: true,
                }}
                trigger="click"
              >
                <Button type="dark">
                  <div>Profile</div>
                </Button>
              </Dropdown>
            ) : (
              <Button onClick={onClick} type="dark">
                Sign In
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};
export default Navbar;

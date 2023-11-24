import React, { useContext } from "react";
import { Container, Content, Details, Icons, Img } from "./style";

import noimg from "../../assets/img/noimg.png";
import { message } from "antd";
import { PropertiesContext } from "../../context/properties";

export const HouseCard = ({ data = {}, gap, onClick }) => {
  const [{ refetch }] = useContext(PropertiesContext);
  const {
    attachments,
    houseDetails,
    address,
    city,
    country,
    description,
    price,
    salePrice,
    category,
    favorite,
    id,
  } = data;

  const save = (e) => {
    e?.stopPropagation();
    fetch(
      `http://ec2-3-140-188-131.us-east-2.compute.amazonaws.com:8081/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "put",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (favorite) res?.success && message.warning("Successfully dislaked");
        else res?.success && message.info("Successfully liked");
        refetch && refetch();
      });
  };

  return (
    <Container gap={gap} onClick={onClick}>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Content>
        <div className="subTitle inline">
          {city}, {country}, {description}
        </div>
        <div className="info inline">
          {address || "Quincy St, Brooklyn, NY, USA"},{" "}
          {category?.name || "Category"}, {houseDetails?.room || 0}-rooms
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler {houseDetails?.area || 0}kv</div>
          </Details.Item>
        </Details>
      </Content>
      {/* <Devider /> */}
      <Content footer>
        <Details.Item footer>
          <div className="info">${price}/mo</div>
          <div className="subTitle">${salePrice}/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love onClick={save} favorite={favorite} />
        </Details.Item>
      </Content>
    </Container>
  );
};

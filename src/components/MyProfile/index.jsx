import React from "react";
import { AntTable, Container, Icons, User, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Generic/Button";
import NoImg from "../../assets/img/noimg.png";
import useRequest from "../../hooks/useRequest";
import { useQuery } from "react-query";
import { message } from "antd";
// const { REACT_APP_BASE_URL: url } = process.env;

export const MyProfile = () => {
  // const [data, setData] = useState([]);
  const { search } = useLocation();

  const navigate = useNavigate();
  const request = useRequest();

  // useEffect(() => {
  //   // fetch(`${url}/houses/me`)
  //   //   .then((res) => res.json())
  //   //   .then((res) => {
  //   //     setData(res?.data || []);
  //   //   });

  //   request({ url: `/houses/me`, token: true }).then((res) => {
  //     console.log(res, "me");
  //     setData(res?.data || []);
  //   });
  // }, [search]);

  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/houses/me`, token: true });
  });

  const onDelete = (id) => {
    request({ url: `/houses/${id}`, token: true, method: "DELETE" }).then(
      (res) => {
        if (res?.success) {
          message.info("Successfully Deleted");
          refetch();
        }
      }
    );
  };

  const columns = [
    {
      title: "Listing Title",
      key: "name",
      render: (data) => (
        <User>
          <User.Img
            src={(data?.attachments && data?.attachments[0]?.imgPath) || NoImg}
          />
          <User flex>
            <div className="subTitle">
              {data?.country}, {data?.address}
            </div>
            <div className="info">
              {data?.city} {data.region}
            </div>
            <div>
              <div className="info">$ {data?.salePrice}</div>
            </div>
          </User>
          <div style={{ marginLeft: "auto" }}>
            <Button>For Sale</Button>
          </div>
        </User>
      ),
    },
    {
      title: "Year Built",
      render: (data) => <span>{data.houseDetails.yearBuilt}</span>,
      key: "houseDetails.yearBuilt",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => <span>{data.user.email}</span>,
      key: "email",
    },
    {
      title: "Price",
      render: (data) => <span>$ {data.price}</span>,
      key: "price",
      width: 150,
    },
    {
      title: "Action",
      key: "email",
      width: 100,
      render: (data) => {
        return (
          <User>
            <Icons.Edit
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.Del
              onClick={(e) => {
                e.stopPropagation();
                onDelete(data?.id);
              }}
            />
          </User>
        );
      },
    },
  ];

  return (
    <Wrapper>
      <User>
        <div style={{ textAlign: "left" }} className="title">
          My Profile
        </div>
        <Button
          onClick={() => navigate("/myprofile/newhouse")}
          style={{ marginLeft: "auto" }}
          className="title"
        >
          Add House
        </Button>
      </User>
      <Container>
        <AntTable
          onRow={(record) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`);
              },
            };
          }}
          dataSource={data?.data}
          columns={columns}
        />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;

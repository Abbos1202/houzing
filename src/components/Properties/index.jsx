import React, { useEffect } from "react";
import { Container } from "./style";
import { HouseCard } from "../HouseCard";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";
const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  const navigate = useNavigate();
  // const request = useRequest()

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });

    // request({url: `/houses/list${search}`})
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <>
      <div className="title">Properties</div>
      <div className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Container>
        {data.map((v) => {
          return (
            <HouseCard onClick={() => onSelect(v.id)} key={v.id} data={v} />
          );
        })}
      </Container>
    </>
  );
};

export default Properties;

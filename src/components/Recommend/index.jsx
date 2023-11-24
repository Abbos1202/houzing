import React, { useState, useEffect } from "react";
import { Container, Contents } from "./style";
import { HouseCard } from "../HouseCard";

import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 3,
  speed: 500,
  dots: true,
  appendDots: (dots) => <h1>{dots}</h1>,
};

export const Recommend = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`${url}/categories/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
      <Contents>
        <h1 className="title">Recommended</h1>
        <h1 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h1>
      </Contents>
      <Slider {...settings}>
        {data.map((v) => {
          return (
            <HouseCard
              gap={20}
              key={v?.id}
              onClick={() => navigate(`/properties/${v?.id}`)}
              data={v}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

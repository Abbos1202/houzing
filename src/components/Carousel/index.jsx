import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";

import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

export const GenCarousel = () => {
  const slider = useRef();

  //=====
  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };
  // <Carousel ref={slider} afterChange={onChange}>
  //=====

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider}>
        <Img src={img1}>
          <Blur />
          <Content>
            <Content.Title>Skyper Pool Partment</Content.Title>
            <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
            <Content.Price>$5,250/mo</Content.Price>
          </Content>
        </Img>
        <Img src={img2}>
          <Blur />
          <Content>
            <Content.Title>Luxury Large House</Content.Title>
            <Content.Desc>
              08 Los Angeles Grove Street, New York, LC
            </Content.Desc>
            <Content.Price>$7,250/mo</Content.Price>
          </Content>
        </Img>
      </Carousel>

      <Arrow onClick={onMove} data-name="left" left="true" />
      <Arrow onClick={onMove} data-name="right" />
    </Container>
  );
};

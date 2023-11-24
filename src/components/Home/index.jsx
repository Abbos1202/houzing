import React from "react";
import { Banner } from "../Banner";
import { GenCarousel } from "../Carousel";
import { Category } from "../Category";
import { Recent } from "../Recent";
import { Recommend } from "../Recommend";
import { Why } from "../Why";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Recommend/>
      <Why/>
      <Category/>
      <Banner/>
      <Recent/>
    </Container>
  );
};
export default Home;

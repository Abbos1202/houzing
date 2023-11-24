import React from "react";
import { Blur, Container, Content, Img } from "./style";

import noimg from "../../assets/img/noimg.png";
import categoryimg from "../../assets/img/category.png";

export const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={categoryimg || noimg} />
      <Blur />
      <Content>{name || "Category name"}</Content>
    </Container>
  );
};

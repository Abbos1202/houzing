import React from "react";
import { Container } from "./style";

export const Button = ({ type, children, onClick, ...res }) => {
  return (
    <Container type={type} onClick={onClick} {...res}>
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;

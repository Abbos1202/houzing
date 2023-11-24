import styled from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  height: fit-content;
  position: relative;
`;

const Arrow = styled(arrow)`
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  left: ${({ left }) => (left ? "20px" : null)};
  right: ${({ left }) => (left ? null : "20px")};
  transform: ${({ left }) => (left ? "rotate(90deg)" : "rotate(-90deg)")};
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.div`
  width: 100%;
  height: 571px;
  background-image: url("${({ src }) => src}");
  background-position: center center;
  background-size: cover;
  position: relative;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

Content.Title = styled.h1`
  color: inherit;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
`;

Content.Desc = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`;

Content.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
`;

export { Container, Arrow, Img, Blur, Content };

import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  position: relative;
`;

const Img = styled.div`
  width: 100%;
  height: 571px;
  background-image: url("${({ src }) => src}");
  background-position: center center;
  background-size: cover;
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  max-width: 555px;
  width: 100%;
  text-align: center;
  margin-bottom: 48px;
`;

export { Container, Img, Blur, Content };

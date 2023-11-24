import styled from "styled-components";

import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as like } from "../../assets/icons/love.svg";

import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";

import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}px`};
  ~ .user {
    background: #ffffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;

    gap: 24px;
  }
`;

const Wrapper = styled.div`
  padding: var(--padding);
  max-width: var(--width);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  display: flex;
  padding-top: 24px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Icons = styled.div``;

Icons.Share = styled(share)`
  display: flex;
  padding: 8px;
  background-color: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

Icons.Like = styled(like)`
  display: flex;
  padding: 8px;
  background-color: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

Icons.Resize = styled(resize)``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;

Icons.Text = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px 0;
`;

Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

const Description = styled.div`
  margin-top: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin-bottom: 48px;
`;

const User = styled.div``;

User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: var(--padding);
  margin-top: 24px;
  margin-bottom: 24px;
`;

const MiniImgsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
`;

ImgContainer.Main = styled.img`
  width: 100%;
  max-width: 580px;
  max-height: 400px;
`;

ImgContainer.SubImg = styled.img`
  width: 100%;
  max-width: 280px;
  max-height: 190px;
  position: relative;
`;

const Blur = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

Blur.Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;

export {
  Container,
  Section,
  Content,
  Icons,
  Details,
  Description,
  Wrapper,
  User,
  ImgContainer,
  MiniImgsContainer,
  Blur,
};

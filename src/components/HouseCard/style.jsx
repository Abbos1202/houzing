import styled from "styled-components";

import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  height: 450px;
  background-color: #fff;
  padding: ${({ gap }) => gap && `${gap}px`};
  &:hover div {
    background-color: #e9f5d0;
    border-right-color: #e9f5d0;
    border-left-color: #e9f5d0;
  }
  cursor: pointer;
`;

const Img = styled.div`
  width: 100%;
  max-height: 220px;
  min-height: 200px;
  height: 100%;
  background-image: url("${({ src }) => src}");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* object-fit: cover; */
`;

const Content = styled.div`
  padding-top: 24px;
  padding: 16px 20px;
  border-left: 1px solid #e6e9ec;
  border-right: 1px solid #e6e9ec;
  border-bottom: 1px solid #e6e9ec;
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Love = styled(love)`
  width: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 50%;
  background: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")};
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }

  & path {
    stroke: ${({ favorite }) => (favorite ? "#fff" : null)};
    fill: ${({ favorite }) => (favorite ? "#fff" : null)};
  }
`;
Icons.Resize = styled(resize)``;

export { Container, Img, Content, Details, Icons };

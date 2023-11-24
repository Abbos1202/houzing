import styled from "styled-components";

import { ReactComponent as email } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";

const Container = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  margin-top: 96px;
  background: #f5f7fc;
  padding: 48px 0;
`;

const Contents = styled.div`
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
  padding-top: 40px;
`;

const Icon = styled.div``;

Icon.Email = styled(email)`
  margin-bottom: 24px;
  path {
    fill: #0061df;
  }
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;

export { Container, Contents, Wrapper, Content, Icon };

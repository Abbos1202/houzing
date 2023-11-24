import styled from "styled-components";

import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as map } from "../../assets/icons/map.svg";

const Container = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-around;
  margin-top: 96px;
  padding: 48px 0;
  height: 417px;
  background: #0d263b;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
  text-align: center;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Icon = styled.div``;

Icon.Email = styled(email)`
  margin-right: 21px;
  path {
    fill: #fff;
  }
`;
Icon.Phone = styled(phone)`
  margin-right: 21px;
  path {
    fill: #fff;
  }
`;
Icon.Map = styled(map)`
  margin-right: 21px;
  width: 60px;
  path {
    fill: #fff;
  }
`;

export { Container, Content, Icon };

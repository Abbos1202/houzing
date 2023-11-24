import styled from "styled-components";

import { Tabs } from "antd";

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AntdTabs = styled(Tabs)`
  max-width: 580px;
  width: 100%;
  margin: 64px;
`;

export { Container, AntdTabs };

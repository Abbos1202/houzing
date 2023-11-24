// import { Table } from "antd";
import styled from "styled-components";
import { Select } from "antd";
// import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as del } from "../../assets/icons/delete.svg";

const Wrapper = styled.div`
  padding: 0 130px;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;

  margin-top: 50px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background-color: #fff;
  border: 1px solid #e6e9ec;
`;

const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
`;

const SelectAnt = styled(Select)`
  width: 200px;
  height: 44px;
`;

const IconDel = styled(del)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: red;
    }
  }
`;

export { Wrapper, MenuWrapper, Section, SelectAnt, IconDel };

import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px; */

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

  gap: 20px;

  padding: 0 130px;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;

  margin-top: 50px;
`;

export { Container };

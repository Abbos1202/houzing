import styled, { css } from "styled-components";

const lightBlue = "#0061DF";

export const BackToTopButton = styled.button`
  display: inline-block;
  background-color: ${lightBlue};
  width: 45px;
  height: 45px;
  text-align: center;
  border-radius: 3px;
  border: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s,
    transform 0.3s, box-shadow 0.3s;
  z-index: 99;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;

  svg {
    width: 100%;
    transform: scale(1.5);

    path {
      fill: #fff;
    }
  }

  ${({ show }) => {
    return show
      ? css`
          visibility: visible;
          opacity: 0.8;
        `
      : null;
  }}

  &:hover {
    cursor: pointer;
    opacity: 1;
    background-color: #e9f5d0;
    /* transform: translateY(-5px); */
    svg path {
      fill: #0061df;
    }
  }
`;

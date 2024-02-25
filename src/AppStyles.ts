import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    box-sizing: border-box;
    padding: 20px 40px;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

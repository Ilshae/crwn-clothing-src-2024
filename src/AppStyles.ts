import styled, { createGlobalStyle } from "styled-components";
import { device } from "./theme.ts";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media ${device.desktop} {
    margin: ${({ theme }) => theme.margin.desktop};
  }
  @media ${device.laptopL} {
    margin: ${({ theme }) => theme.margin.laptopL};
  }
  @media ${device.laptop} {
    margin: ${({ theme }) => theme.margin.laptop};
  }
  @media ${device.tablet} {
    margin: ${({ theme }) => theme.margin.tablet};
  }
  @media ${device.mobileM} {
    margin: ${({ theme }) => theme.margin.mobileM};
  }
`;

import { FC, Suspense } from "react";
import Loading from "./common/Loading.tsx";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import Main from "./pages/main/Main.tsx";

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Main />
        </Wrapper>
      </ThemeProvider>
    </Suspense>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;

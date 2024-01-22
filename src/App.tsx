import { FC, Suspense } from "react";
import Loading from "./common/Loading.tsx";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import Main from "./routes/main/Main.tsx";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./common/ErrorBoundary.tsx";
import Shop from "./routes/shop/Shop.tsx";
import Navigation from "./routes/navigation/Navigation.tsx";

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Routes>
            <Route
              path={"/"}
              element={<Navigation />}
              errorElement={<ErrorBoundary />}
            >
              <Route
                index
                element={<Main />}
                errorElement={<ErrorBoundary />}
              />
              <Route
                path={"shop"}
                element={<Shop />}
                errorElement={<ErrorBoundary />}
              />
            </Route>
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Suspense>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;

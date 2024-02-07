import { FC, Suspense } from "react";
import Loading from "./components/loading/Loading.tsx";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import Main from "./routes/main/Main.tsx";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.tsx";
import Shop from "./routes/shop/Shop.tsx";
import Navigation from "./routes/navigation/Navigation.tsx";
import Auth from "./routes/authentication/Auth.tsx";
import Checkout from "./routes/checkout/Checkout.tsx";

const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
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
              <Route
                path={"auth"}
                element={<Auth />}
                errorElement={<ErrorBoundary />}
              />
              <Route
                path={"checkout"}
                element={<Checkout />}
                errorElement={<ErrorBoundary />}
              />
            </Route>
          </Routes>
        </Container>
      </ThemeProvider>
    </Suspense>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    box-sizing: border-box;
    padding: 20px 40px;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;

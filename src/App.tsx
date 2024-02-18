import { FC, Suspense, useEffect } from "react";
import Loading from "./components/loading/Loading.tsx";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import Directory from "./routes/main/Directory.tsx";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.tsx";
import Shop from "./routes/shop/Shop.tsx";
import Navigation from "./routes/navigation/Navigation.tsx";
import Auth from "./routes/authentication/Auth.tsx";
import Checkout from "./routes/checkout/Checkout.tsx";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/utils.ts";
import { setCurrentUser } from "./store/user/actions.ts";
import { useDispatch } from "react-redux";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  });

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
                element={<Directory />}
                errorElement={<ErrorBoundary />}
              />
              <Route
                path={"shop/*"}
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

import { FC, Suspense, useEffect } from "react";
import Loading from "./components/loading/Loading.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import Directory from "./routes/main/directory/Directory.tsx";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.tsx";
import Shop from "./routes/shop/Shop.tsx";
import Navigation from "./routes/navigation/Navigation.tsx";
import Auth from "./routes/authentication/auth/Auth.tsx";
import Checkout from "./routes/checkout/Checkout.tsx";
import { useDispatch } from "react-redux";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase.ts";
import { setCurrentUser } from "./store/user/userSlice.ts";
import { Container, GlobalStyle } from "./AppStyles.ts";

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

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

export default App;

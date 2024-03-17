import "./commands";
import { mount } from "cypress/react18";
import { theme } from "../../src/theme";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MountOptions, MountReturn } from "cypress/react";
import { store } from "../../src/store/store";
import { Provider } from "react-redux";
import { stripePromise } from "../../src/utils/stripe";
import { Elements } from "@stripe/react-stripe-js";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      routeWrappedMount(
        component: React.ReactNode,
        route: string,
        path: string,
        options?: MountOptions,
      ): Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add("mount", (component: ReactNode) => {
  return mount(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Elements stripe={stripePromise}>{component}</Elements>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
});

const routeWrappedMount = (
  WrappedComponent: React.ReactNode,
  route: string,
  path: string,
  options = {},
): Cypress.Chainable<MountReturn> => {
  window.history.pushState({}, "", route);
  const wrapped = (
    <Routes>
      <Route element={WrappedComponent} path={path} />
    </Routes>
  );
  return cy.mount(wrapped, options);
};
Cypress.Commands.add("routeWrappedMount", routeWrappedMount);

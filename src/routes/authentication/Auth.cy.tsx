import Auth from "./auth/Auth.tsx";

describe("<Auth />", () => {
  it("renders", () => {
    cy.mount(<Auth />);

    cy.contains("Already have an account?");
    cy.contains("Sign in");
    cy.contains("Don't have an account?");
    cy.contains("Sign up");
  });
});

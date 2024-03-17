import Navigation from "./Navigation.tsx";

describe("<Navigation />", () => {
  it("renders", () => {
    cy.mount(<Navigation />);

    cy.contains("SHOP");
    cy.contains("SIGN IN");
  });
});

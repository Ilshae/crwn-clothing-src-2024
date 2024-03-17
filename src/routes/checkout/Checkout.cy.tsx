import Checkout from "./Checkout.tsx";

describe("<Checkout />", () => {
  it("renders", () => {
    cy.mount(<Checkout />);

    cy.contains("Product");
    cy.contains("Credit Card Payment");
    cy.contains("Pay now");
  });
});

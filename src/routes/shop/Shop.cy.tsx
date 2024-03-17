import Shop from "./Shop.tsx";

describe("<Shop />", () => {
  it("renders", () => {
    const url = "hats";
    const route = `/${url}`;
    const path = "/:url";
    cy.routeWrappedMount(<Shop />, route, path);

    cy.contains("HATS");
    cy.contains("Add to cart");
    cy.contains("Brown Brim");
  });
});

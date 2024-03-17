import Directory from "./directory/Directory.tsx";

describe("<Main />", () => {
  it("renders", () => {
    cy.mount(<Directory />);

    cy.contains("hats");
    cy.contains("jackets");
    cy.contains("sneakers");
    cy.contains("womens");
    cy.contains("mens");
  });
});

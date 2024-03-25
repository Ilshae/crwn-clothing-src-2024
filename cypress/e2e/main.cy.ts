it("Add product to cart and see it in checkout", () => {
  cy.visit("http://localhost:5173/");
  cy.get("h2").contains("hats").click();
  cy.get("button").contains("Add to cart").click();

  cy.get('[data-cy="cart-toggler"').click();
  cy.get("button").contains("Go to checkout").click();

  cy.contains("Brown Brim");
});

it("Sign in and out", () => {
  cy.visit("http://localhost:5173/");

  cy.get("a").contains("SIGN IN").click();

  cy.get('[data-cy="sign-up-email"').type("test111@o2.pl");
  cy.get('[data-cy="sign-up-password"').type("test111");
  cy.get("button").contains("Sign In").click();

  cy.url().should("be.equals", "http://localhost:5173/");
  cy.scrollTo("top");
  cy.get("span").contains("SIGN OUT").click();

  cy.url().should("be.equals", "http://localhost:5173/");
  cy.get("a").contains("SIGN IN");
});

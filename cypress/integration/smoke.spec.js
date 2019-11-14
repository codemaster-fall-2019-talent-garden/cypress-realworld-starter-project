/// <reference types="Cypress" />

context("Smoke test", () => {
  it("The front-end project should work", () => {
    cy.visit("/");
  });
});

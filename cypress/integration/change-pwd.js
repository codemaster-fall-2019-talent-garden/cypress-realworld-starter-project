/// <reference types="Cypress" />

context("Es 3: Change pwd", () => {
  it("The front-end should allow the user to change his pwd", () => {
    cy.authenticateAndVisitIntegration("/settings");
    // write here your test
    cy.log("The user is logged");
  });
});

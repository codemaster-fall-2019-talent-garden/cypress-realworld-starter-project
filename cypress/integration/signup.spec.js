/// <reference types="Cypress" />

context("Es 1: Signup test", () => {
  it("The front-end should allow the user to signup", () => {
    cy.server();
    cy.visit("/");
    cy.findByText("Sign up").click();
    cy.findByPlaceholderText("Username").type("gigino");
    cy.findByPlaceholderText("Email").type("ste@ste.it");
    cy.findByPlaceholderText("Password").type("adminadmin");

    cy.route("POST", "**/api/users", {
      user: {
        id: 75286,
        email: "ste@ste.itasdsadasdasdas",
        createdAt: "2019-11-14T10:15:48.884Z",
        updatedAt: "2019-11-14T10:15:48.892Z",
        username: "giginoasdasdsadasd",
        bio: null,
        image: null,
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzUyODYsInVzZXJuYW1lIjoiZ2lnaW5vYXNkYXNkc2FkYXNkIiwiZXhwIjoxNTc4OTEwNTQ4fQ.RY-xeK4Wj8sqA78GXD_qtBTLAlZT8rCL1zPqD954A_E"
      }
    }).as("registerAJAXCall");

    cy.get("form")
      .within(() => cy.findByText("Sign up"))
      .click();

    cy.wait("@registerAJAXCall");

    cy.findByText("No articles are here... yet.").should("visible");
  });
});

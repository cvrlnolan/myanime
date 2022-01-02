describe("Anime display & click test", () => {
  it("Click the 'Gintama' anime & change theme color", () => {
    // cy.visit('https://example.cypress.io')
    cy.visit("http://localhost:3000");

    cy.contains("Gintama").click();

    cy.url().should("include", "/anime");

    cy.get("#theme-button").click({ multiple: false });

    cy.get(".dark");
  });
});

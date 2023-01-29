/// <reference types="cypress" />

describe("Trabalhando com elementos básicos HTML ", () => {

    it("text", () => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html");

        cy.get("body").should('contain', 'Cuidado');

        cy.get('.facilAchar')
            .should('contain', 'Cuidado');

        cy.get('.facilAchar')
            .should("have.text", "Cuidado onde clica, muitas armadilhas...");

    })
})
/// <reference types="cypress" />

describe("Cypress básico, visitando uma página", () => {

    it("Visitar uma página e validar o título", () => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html");

        cy.title()
            .should('be.equal', 'Campo de Treinamento' )
            .and("contain", "Treinamento")
    })

    it("Interagindo com os elementos", () => {
        cy.pause()

        cy.visit("https://www.wcaquino.me/cypress/componentes.html");

        cy.get('#buttonSimple').click()

        cy.get('#buttonSimple').should("have.value", "Obrigado!");
    })

    it("nova suite", () => {})
})
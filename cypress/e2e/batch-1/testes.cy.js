/// <reference types="cypress" />


describe("Teste inicial", () => {
    it("Validando a conexação e o Title do html estático", () => {
        
        
        cy.visit("https://wcaquino.me/cypress/componentes.html");
        cy.title().should('be.equal', 'Campo de Treinamento')

    })



})
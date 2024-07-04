/// <reference types="cypress"/>

describe('Website test', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it ('Delete Every Contact', () => {
        cy.get('.delete').click({ multiple: true })
        cy.wait(2000)
    })
    it ('Add First Contact', () => {
        cy.get('.sc-gLDzan input:nth-child(1)').type('Cypress First')
        cy.get('.sc-gLDzan input:nth-child(2)').type('cypress@cypress.com')
        cy.get('.sc-gLDzan input:nth-child(3)').type('1234-567')
        cy.get('.sc-gLDzan button').click()
    })
    it ('Add Second Contact', () => {
        cy.get('.sc-gLDzan input:nth-child(1)').type('Cypress Two')
        cy.get('.sc-gLDzan input:nth-child(2)').type('cypress@cypress.com')
        cy.get('.sc-gLDzan input:nth-child(3)').type('1234-567')
        cy.get('.sc-gLDzan button').click()
    })
    it ('Edit Second Contact', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('.sc-gLDzan input:nth-child(1)').clear().type('Cypress Edited')
        cy.get('.sc-gLDzan input:nth-child(2)').clear().type('cypress@Edited.com')
        cy.get('.sc-gLDzan input:nth-child(3)').clear().type('111-111')
        cy.get('.alterar').click()
    })
})
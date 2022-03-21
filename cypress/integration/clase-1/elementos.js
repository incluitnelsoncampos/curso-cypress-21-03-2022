/// <reference types="cypress" />

describe('TestSuite para Utilizar elementos', () => {
    it('Dropdown', () => {
        //cy.visit('url') --> Para visitar la pagina indica en 'url'
        cy.visit('http://the-internet.herokuapp.com/dropdown')

        //select('valor') --> Para seleccionar el valor de una lista
        cy.get('#dropdown').select('2')

        //cy.wait(tiempo_miliseg) --> para frentar la ejecucion en miliseg
        cy.wait(10000)

        cy.get('#dropdown').select('Option 1')

    })


    it('Textbox and Button and Label', () => {
        cy.visit('http://the-internet.herokuapp.com/login')

        //type('texto') --> Para escribir en un caja de texto
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')

        //click() --> Para realizar un click sobre el boton
        cy.get('.radius').click()

        //should() --> Para realizar validaciones
        cy.get('#flash').should('be.visible').should('contain.text', 'You logged into a secure area!')

        cy.get('.subheader').should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.')

        cy.get('.button').should('be.visible').click()

        cy.get('.radius').should('be.visible')

        cy.get('#flash > a').click({force:true})
    })

})
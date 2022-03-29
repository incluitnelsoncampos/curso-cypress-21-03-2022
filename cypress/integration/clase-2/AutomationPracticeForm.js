/// <reference types="cypress" />


describe('TestSuite para Automation Practice Form', () => {

    it('Registro de Estudiante correcto', () => {
        cy.visit('https://demoqa.com/automation-practice-form');

        //Escondemos la publicidad
        cy.get('#close-fixedban').click()

        cy.get('#firstName').type('Nelson')
        cy.get('#lastName').type('Campos')
        cy.get('#userEmail').type('nelsoncampos@ggmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('3518103809')

        //Para este caso particular, el elemento al parecer no es una lista
        //por lo que debemos hacerle click,
        //verificar con contains si esta el valor que queremos
        //y por ultimo, realizar otro click
        cy.get('#state').click().contains('NCR').click()
        cy.get('#city').click().contains('Noida').click()

        cy.get('#submit').click({force: true})

        cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks')
        //cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks')

        cy.wait(5000)

        cy.get('#closeLargeModal').click({force: true})
    })
})
/// <reference types="cypress" />
require('cypress-xpath')

describe('TestSuite de Facebook', () => {
    it('Registrar usuario nuevo', () => {
        cy.visit('www.facebook.com')

        cy.get('[data-testid="open-registration-form-button"]').click()

        //cy.wait(5000)

        //No sirven, ya que los ID (#) son dinamicos
        //por lo tanto, cada vez al abrir el formulario, cambian
        //cy.get('#u_2_b_uL').type('Nelson')
        //cy.get('#u_a_d_Yd').type('Campos')

        cy.xpath('//input[@name="firstname"]').wait(3000).type('Nelson')

        cy.xpath('//input[@name="reg_email_confirmation__"]').should('not.be.visible')

        cy.xpath('//input[@name="lastname"]').type('Campos')
        cy.xpath('//input[@name="reg_email__"]').type('nelson.campos@ggmail.com')
        cy.xpath('//input[@id="password_step_input"]').type('ParaRayos5000')

        cy.xpath('//input[@name="reg_email_confirmation__"]').should('be.visible')

        cy.get('#day').select('11')
        cy.get('#month').select('ago')
        cy.get('#year').select('1992')
        cy.get(':nth-child(2) > ._58mt').click()


        cy.xpath('//button[@name="websubmit"]').should('be.enabled')

        cy.xpath('//button[@name="websubmit"]').click()
    })
})
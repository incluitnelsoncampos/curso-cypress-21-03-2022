/// <reference types="cypress" />

import loginPage from '../../../support/pageobject/orangeHRM/loginPage'
import dashboardPage from '../../../support/pageobject/orangeHRM/dashboardPage'

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"


Given("en la pagina principal de Orange HRM", () => {
    loginPage.go()
})

When('ingreso las credenciales validas y presiono el boton Login', () => {
    loginPage.type_username('Admin')
    loginPage.type_password('admin123')

    loginPage.click_login()
})

Then('visualizo el nombre correcto', () => {
    cy.get('#welcome').should('contain.text', 'Welcome Paul')
})
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

When('ingreso el nombre de usuario {string}', (user_name) => {
    loginPage.type_username(user_name)
})

When('ingreso el password del usuario {string}', (user_password) => {
    loginPage.type_password(user_password)
})

When('hago click en el boton Login', () => {
    loginPage.click_login()
})

Then('visualizo el mensaje de bienvenida {string}', (user) => {
    cy.get('#welcome').should('contain.text', user)
})


When ('ingreso el password del usuario desde una variable de entorno', () => {
    var user_password = Cypress.env('PASSWORD');

    loginPage.type_password(user_password)
})
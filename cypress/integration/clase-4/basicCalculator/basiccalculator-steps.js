/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import basicCalculator from '../../../support/pageobject/basicCalculator/mainPage'


Given('en la pagina principal Basic Calculator', () => {
    basicCalculator.go()
})

When('se ingresa los numeros {string} y {string}', (number_one, number_two) => {
    basicCalculator.type_number_one(number_one)
    basicCalculator.type_number_two(number_two)
})

When('se selecciona la operacion {string}', (operation) => {
    basicCalculator.select_operation(operation)
})

When('presiono en calcular', () => {
    basicCalculator.click_calculate()
})

Then('el resultado es {string}', (res) => {
    cy.wait(3000)
    basicCalculator.elementos.txt_number_answer().should('have.value', res)
})
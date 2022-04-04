/// <reference types="cypress" />

const lista = require('../../fixtures/basicCalculator.json')
import mainPage from '../../support/pageobject/basicCalculator/mainPage'

describe('TestSuite para Basic Calculator con Lista', function() {

    lista.forEach(operacion => {
        it('Operacion ' + operacion.operation, () => {
            mainPage.go()

            mainPage.type_number_one(operacion.number_one)
            mainPage.type_number_two(operacion.number_two)
            mainPage.select_operation(operacion.operation)
            mainPage.click_calculate()

            mainPage.elementos.txt_number_answer().should('contain.value', operacion.result)

        })
    })
})
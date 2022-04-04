/// <reference types="cypress" />
import mainPage from '../../support/pageobject/basicCalculator/mainPage'

describe('TestSuite para Basic Calculator', () => {

    beforeEach(() => {
        mainPage.go()
    })

    it('Realizar la suma entre dos numeros', () => {
        //mainPage.go()
        mainPage.type_number_one('1')
        mainPage.type_number_two('1')
        mainPage.select_operation('Add')
        
        mainPage.click_calculate()

        mainPage.elementos.txt_number_answer().should('contain.value', '2')
    })

    it('Realizar la resta entre dos numeros', () => {
        //mainPage.go()
        mainPage.type_number_one('1')
        mainPage.type_number_two('1')
        mainPage.select_operation('1')
        
        mainPage.click_calculate()

        mainPage.elementos.txt_number_answer().should('contain.value', '0')
    })

    it('Realizar la multiplicacion entre dos numeros', () => {
        //mainPage.go()
        mainPage.type_number_one('1')
        mainPage.type_number_two('1')
        mainPage.select_operation('Multiply')
        
        mainPage.click_calculate()

        mainPage.elementos.txt_number_answer().should('contain.value', '1')
    })

    it('Realizar la division entre dos numeros', () => {
        //mainPage.go()
        mainPage.type_number_one('1')
        mainPage.type_number_two('1')
        mainPage.select_operation('3')
        
        mainPage.click_calculate()

        mainPage.elementos.txt_number_answer().should('contain.value', '1')

    })
    it('Realizar la concatenacion entre dos numeros', () => {
        
        //mainPage.go()
        mainPage.type_number_one('1')
        mainPage.type_number_two('1')
        mainPage.select_operation('Concatenate')
        
        mainPage.click_calculate()

        mainPage.elementos.txt_number_answer().should('contain.value', '1')
    })

})



/// <reference types="cypress" />


describe('TestSuite para Basic Calculator', () => {

    it('Visitar la pagina Basic Calculator', () => {
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html')

        cy.title().should('eq', 'Basic Calculator')
    })

    it('Realizar la suma entre dos numeros', () => {
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html')

        //cy.get() --> Para obtener el elemento
        //type() --> Para escribir un valor
        cy.get('#number1Field').type('1')
        cy.get('#number2Field').type('1')

        //select() --> Para seleccionar un valor de la lista
        cy.get('#selectOperationDropdown').select("Add")

        //click() --> Para presionar un boton
        cy.get('#calculateButton').click()

        //should() --> Para validar sobre el elemento
        //'contain.value' --> Si contiene cierto valor
        cy.get('#numberAnswerField').should('contain.value', '2')
    })

    it('Realizar la resta entre dos numeros', () => {
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html')

        //cy.get() --> Para obtener el elemento
        //type() --> Para escribir un valor
        cy.get('#number1Field').type('1')
        cy.get('#number2Field').type('1')

        //select() --> Para seleccionar un valor de la lista
        cy.get('#selectOperationDropdown').select("1")

        //click() --> Para presionar un boton
        cy.get('#calculateButton').click()

        //should() --> Para validar sobre el elemento
        //'contain.value' --> Si contiene cierto valor
        cy.get('#numberAnswerField').should('contain.value', '0')
    })

    it('Realizar la multiplicacion entre dos numeros', () => {
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html')

        //cy.get() --> Para obtener el elemento
        //type() --> Para escribir un valor
        cy.get('#number1Field').type('1')
        cy.get('#number2Field').type('1')

        //select() --> Para seleccionar un valor de la lista
        cy.get('#selectOperationDropdown').select("Multiply")

        //click() --> Para presionar un boton
        cy.get('#calculateButton').click()

        //should() --> Para validar sobre el elemento
        //'contain.value' --> Si contiene cierto valor
        cy.get('#numberAnswerField').should('contain.value', '1')
    })

    it('Realizar la division entre dos numeros', () => {
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html')

        //cy.get() --> Para obtener el elemento
        //type() --> Para escribir un valor
        cy.get('#number1Field').type('1')
        cy.get('#number2Field').type('1')

        //select() --> Para seleccionar un valor de la lista
        cy.get('#selectOperationDropdown').select("3")

        //click() --> Para presionar un boton
        cy.get('#calculateButton').click()

        //should() --> Para validar sobre el elemento
        //'contain.value' --> Si contiene cierto valor
        cy.get('#numberAnswerField').should('contain.value', '1')
    })
    it('Realizar la concatenacion entre dos numeros', () => {
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html')

        //cy.get() --> Para obtener el elemento
        //type() --> Para escribir un valor
        cy.get('#number1Field').type('1')
        cy.get('#number2Field').type('1')

        //select() --> Para seleccionar un valor de la lista
        cy.get('#selectOperationDropdown').select("Concatenate")

        //click() --> Para presionar un boton
        cy.get('#calculateButton').click()

        //should() --> Para validar sobre el elemento
        //'contain.value' --> Si contiene cierto valor
        cy.get('#numberAnswerField').should('contain.value', '11')
    })

})



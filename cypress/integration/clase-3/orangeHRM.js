/// <reference types="cypress" />

import loginPage from '../../support/pageobject/loginPage'
import dashboardPage from '../../support/pageobject/dashboardPage'

describe('SuiteTest para Orange HRM', function() {
    
    it('Inicio de sesion correcto', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

        cy.get('#welcome').should('contain.text', 'Welcome Paul')
    })

    it('Inicio de sesion correcto - Page Object', () => {
        loginPage.go()

        loginPage.type_username('Admin')
        loginPage.type_password('admin123')
        loginPage.click_login()

        dashboardPage.elementos.lbl_welcome().should('contain.text', 'Welcome Paul')
    })

    it('Inicio de sesion correcto - Fixture', () => {
        loginPage.go()

        // fixture -> buscar el archivo indicado en la carpeta fixtures
        //credencial --> variable para manejar el contenido del archivo
        cy.fixture("credencialesHRM/credenciales").then(credencial => {
            //cy.log(credencial)
            
            //para acceder a valor del archivo lo indicamos como "variable.atributo"
            loginPage.type_username(credencial.user_name)
            loginPage.type_password(credencial.user_password)
        })

        loginPage.click_login()
        dashboardPage.elementos.lbl_welcome().should('contain.text', 'Welcome Paul')
    })

    it.only('Lista de datos', () => {
        lista = require('../../fixtures/listData.json')

        lista.forEach(objecto => {
            cy.log(objecto)
        });
    })
})
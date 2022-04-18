/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

let request_registro = require('../../../support/contratos/registro_body.json');
let response_registro;

let response;

Given ("el registro del usuario {string} {string} {string}", (user_name, user_email, user_password) => {
    cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/authaccount/registration",
        body: 
        {
            "name": user_name,
            "email": user_email,
            "password": user_password
        }
        //,failOnStatusCode: false 
    }).then((res) => {
        cy.log(JSON.stringify(res.body))

        response = res
    })
})

Then ("el status code es {string}", (status_code) => {
    expect(response.status).to.be.eq(parseInt(status_code))

    //expect(response.body.code).to.be.eq(1)
})

Given ('el nuevo registro {string} {string} {string}', (user_name, user_email, user_password) => {
    request_registro.name = user_name;
    request_registro.email = user_email;
    request_registro.password = user_password;
})

When ('realizo el llamado al registo de un nuevo usuario', () => {
    cy.registro(request_registro).then((response_completo) => {
        response_registro = response_completo
    })
})

Then ('el campo code es {string}', (code) => {
    //cy.log(JSON.stringify(response_registro))
    
    expect(response_registro.body.code).to.be.eq(parseInt(code))
})
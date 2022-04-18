/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

let request_registro = require('../../../support/contratos/registro_body.json');
let response_registro;

let request_login = require('../../../support/contratos/login_body.json');
let response_login;
let token;
let response_consulta;

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





Given ('el usuario {string} {string}', (user_mail, user_password) => {
    request_login.email = user_mail
    request_login.password = user_password
})


When ('nos logueamos en el sistema', () => {
    cy.login(request_login).then((response_x) => {
        response_login = response_x
    })
})
Then ('obtengo el token', () => {
    cy.log(JSON.stringify(response_login.body))

    token = response_login.body.data.Token
})

When ('consulto por todos los usuarios', () => {
    cy.consulta(token).then((respuesta) => {
        cy.log(JSON.stringify(respuesta.body))

        response_consulta = respuesta
    })
})
Then ('obtengo un listado de usuarios', () => {
    expect(response_consulta.body.data).lengthOf(10)
})
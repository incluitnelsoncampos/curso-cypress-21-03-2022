// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('registro', (request_body) => {
    
    cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/authaccount/registration",
        body: request_body
        //,failOnStatusCode: false 
    }).then((res) => {
        //cy.log(JSON.stringify(res.body))

        cy.wrap(res)
    })
})

Cypress.Commands.add('login', (request_body) => {
    
    cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/authaccount/login",
        body: request_body
        //,failOnStatusCode: false 
    }).then((res) => {
        //cy.log(JSON.stringify(res.body))

        cy.wrap(res)
    })
})

Cypress.Commands.add('consulta', (token) => {
    
    cy.request({
        method: "GET",
        headers:
        {
            "Authorization": 'Bearer ' + token,
        },
        url: "http://restapi.adequateshop.com/api/users?page=1",
        //,failOnStatusCode: false 
    }).then((res) => {
        //cy.log(JSON.stringify(res.body))

        cy.wrap(res)
    })
})
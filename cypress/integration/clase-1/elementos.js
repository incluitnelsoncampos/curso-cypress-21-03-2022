/// <reference types="cypress" />

describe("Suite TC para elementos", function () {
  it("Nuestra primera navegacion", () => {
    //cy.visit('url') --> Nos permite navegar hasta la pagina 'url'
    cy.visit("http://the-internet.herokuapp.com/dropdown");
  });

  it("Seleccionando de la lista el texto Option 1", () => {
    //1- Ingresar a la pagina
    cy.visit("http://the-internet.herokuapp.com/dropdown");

    //2- Obtener elemento y seleccionar el valor Option 1
    //cy.get('selector') --> Obtener el elemento de la pagina
    //select('valor') --> Permite seleccionar un valor de la lista
    cy.get("#dropdown").select("Option 1");
  });

  it("Seleccionando de la lista el valor 2", () => {
    //1- Ingresar a la pagina
    cy.visit("http://the-internet.herokuapp.com/dropdown");

    //2- Obtener elemento y seleccionar el valor 2
    //cy.get('selector') --> Obtener el elemento de la pagina
    //select('valor') --> Permite seleccionar un valor de la lista
    cy.get("#dropdown").select("2");
  });


  it.only("Escribiendo en un textbox y click en botones", () => {
    //1- Ingresar a la pagina
    cy.visit("http://the-internet.herokuapp.com/login");

    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')

    cy.get('.radius').click()

    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
  });
});

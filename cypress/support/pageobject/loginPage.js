class LoginPage {
    //Mapeo de elementos de la pagina para Login
    elementos = {
        txt_userName: () => cy.get('#txtUsername'),
        txt_password: () => cy.get('#txtPassword'),
        btn_login: () => cy.get('#btnLogin')
    }

    //Acciones sobre la pagina de login
    type_username(name){
        this.elementos.txt_userName().type(name)
    }

    type_password(password){
        this.elementos.txt_password().type(password)
    }

    click_login(){
        this.elementos.btn_login().click()
    }

    go(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
}

module.exports = new LoginPage();
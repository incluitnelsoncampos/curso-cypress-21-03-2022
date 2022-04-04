class DashboardPage {

    elementos = {
        lbl_welcome: () => cy.get('#welcome')
    }


}

module.exports = new DashboardPage()
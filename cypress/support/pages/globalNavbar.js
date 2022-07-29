export class GlobalNavBar{

    getCreateBtn(){
        return cy.contains('.rin-navlink-description', 'Create')
    }

    getSelectTournamentBtn(){
        return cy.contains('.rin-modal-create-entry .rin-modal-create-card-header', 'Tournament')
    }

    getConfirmCreateEventBtn(){
        return cy.get('.createEventBtn ')
    }


    //METHODS

    GoToCreateTnPage(){
        this.getCreateBtn().click()
        this.getSelectTournamentBtn().click()
        cy.wait(500)
        this.getConfirmCreateEventBtn().click()
        
    }
}

export default new GlobalNavBar()
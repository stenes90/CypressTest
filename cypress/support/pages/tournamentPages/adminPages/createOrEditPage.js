export class CreateOrEditTournamentPage{

    getNameInput(){
        return cy.get('input[placeholder="Tournament Name"]')
    }

    getSelectRankingBtn(){
        return cy.contains('.rin-btn-type-primary', 'Select ranking')
    }

    getConfirmCreategBtn(){
        return cy.get('.rin-tournament-bottom-controls-wrapper .rin-btn-type-success')
    }

    getConfirmCreateTnInPublishModalBtn(){
        return cy.get('.rin-modal-footer .rin-btn-type-primary')
    }

    getRankingInput(){
        return cy.get('input[placeholder="Type a ranking name"]')
    }


    //METHODS

    GoTo(){
        cy.contains('.tournament-menu a', '1. Edit').click()
        cy.waitUntilElExist('input[placeholder="Tournament Name"]')
    }

    SaveChanges(){
        this.getConfirmCreategBtn().click()
    }

    SetTnName(name){
        this.getNameInput().clear()
        this.getNameInput().type(name)

    }

    SelectRanking(){
        this.getSelectRankingBtn().click()
    }

    ConfirmCreateTournament(){
        this.getConfirmCreategBtn().click()
        this.getConfirmCreateTnInPublishModalBtn().click()
    }

    AddRanking(name){
        this.getSelectRankingBtn().click()
        cy.wait(1000)
        this.getRankingInput().type(name)
        cy.waitUntilElExist('#rankings-search-result .list-group-item-heading', name)
        cy.contains('#rankings-search-result .list-group-item-heading', name).click()
        this.SaveChanges();

    }


}

export default new CreateOrEditTournamentPage()
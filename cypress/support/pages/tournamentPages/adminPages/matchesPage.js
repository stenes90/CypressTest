
export class MatchesPage{


    //METHODS

    GoTo(){
        cy.contains('.tournament-menu a', '8. Matches & Video').click()
        cy.waitUntilElExist('.rin-matches-settings-buttons-wrapper')
    }

}

export default new MatchesPage()
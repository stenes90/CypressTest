
export class StartFinishPage{


    //METHODS

    GoTo(){
        cy.contains('.tournament-menu a', '9. Start/Stop').click()
        cy.waitUntilElExist('.edit-tournament-point-controls')
    }

}

export default new StartFinishPage()
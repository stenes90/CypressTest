
export class TimesPage{


    //METHODS

    GoTo(){
        cy.contains('.tournament-menu a', '7. Times').click()
        cy.waitUntilElExist('.dates-wrapper')
    }

}

export default new TimesPage()
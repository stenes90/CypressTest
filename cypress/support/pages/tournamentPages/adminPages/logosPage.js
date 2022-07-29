export class ClassesPage{




//METHODS

GoTo(){
    cy.contains('.tournament-menu a', '2. Logos').click()
    cy.waitUntilElExist('.rin-logo-images-container')
}

}

export default new ClassesPage()
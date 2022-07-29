export class CloseSignInPage {
  getLevelsDropdown() {
    return cy.get('.rin-close-signin-table-wrapper .rin-dropdown-toggle');
  }

  getLevelsInDropdown() {
    return cy.get(
      '.rin-closesignin-levels-selecting .rin-dropdown-container li'
    );
  }

  //METHODS

  GoTo() {
    cy.contains('.tournament-menu a', '5. Close signing in').click();
    cy.waitUntilElExist('.rin-closesignin-levels-selecting');
  }

  SelectLevel() {
    this.getLevelsDropdown().click();
    cy.get(
      '.rin-close-signin-table-wrapper .rin-dropdown-toggle-icon-open'
    ).should('exist');
    this.getLevelsInDropdown()
      .eq(0)
      .invoke('text')
      .then((firstLevelName) => {
        this.getLevelsInDropdown().eq(0).click();
        cy.waitUntilElDissapear(
          '.rin-closesignin-levels-selecting .rin-spinner-m'
        );
        cy.get('.rin-closesignin-levels-selecting .rin-dropdown-toggle')
          .invoke('text')
          .then((selectedLevelText) => {
            expect(firstLevelName.trim()).to.equal(selectedLevelText.trim());
          });
      });
  }
}

export default new CloseSignInPage();

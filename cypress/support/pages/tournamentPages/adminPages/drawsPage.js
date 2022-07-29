export class DrawsPage {
  getRRCheckbox() {
    return cy.get('.rin-base-checkbox').eq(0);
  }

  getMonradCheckbox() {
    return cy.get('.rin-base-checkbox').eq(1);
  }

  getRRPlayoffCheckbox() {
    return cy.get('.rin-base-checkbox').eq(2);
  }

  getElimCheckbox() {
    return cy.get('.rin-base-checkbox').eq(3);
  }

  getQualCheckbox() {
    return cy.get('.rin-base-checkbox').eq(4);
  }

  getDrawCreatorCheckbox() {
    return cy.get('.rin-base-checkbox').eq(5);
  }

  getGenerateDrawsBtn() {
    return cy.get('.rin-generate-buttons-wrapper .rin-btn-type-success');
  }

  getConfirmGenerateDrawsBtn() {
    return cy.get('#regenerateMatches');
  }

  getClassesDropdownBtn() {
    return cy.get(
      '.draws-settings .class-dropdown-wrapper .rin-btn-type-tertiary'
    );
  }

  getListOfClassesInDropdownMenu() {
    return cy.get('.draws-settings .class-dropdown-wrapper li');
  }

  //METHODS

  GoTo() {
    cy.contains('.tournament-menu a', '6. Draws').click();
    cy.waitUntilElExist('.preview-draws-wrapper');
  }

  SelectClass(index) {
    this.getClassesDropdownBtn().click();
    cy.wait(200);
    this.getListOfClassesInDropdownMenu().eq(index).click();
    cy.waitUntilElDissapear('.rin-dropdown-container .rin-spinner-s');
  }

  CheckElim() {
    this.getElimCheckbox().click();
  }

  CheckRR() {
    this.getRRCheckbox().click();
  }

  GenerateDraw() {
    this.getGenerateDrawsBtn().click();
    cy.wait(500);
    this.getConfirmGenerateDrawsBtn().click();
    cy.waitUntilElExist('.preview-draws-wrapper .rin-btn-type-primary');
  }
}

export default new DrawsPage();

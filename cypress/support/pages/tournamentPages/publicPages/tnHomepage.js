export class TnHomepage {
  getGoToEventHomepageBtn() {
    return cy.get('#event-manager');
  }

  getAdminRibbonBtn() {
    return cy.get('.adminRibbon');
  }

  getGoToAdminPanelBtn() {
    return cy.contains('.adminPanel a', 'Admin Panel >>');
  }

  //METHODS

  GoTo() {
    this.getGoToEventHomepageBtn().click();
    cy.waitUntilElExist('.eventBanner');
  }

  GoToAdminPanel() {
    this.getGoToAdminPanelBtn().click({ force: true });
    cy.waitUntilElExist('#event-manager');
  }
}

export default new TnHomepage();

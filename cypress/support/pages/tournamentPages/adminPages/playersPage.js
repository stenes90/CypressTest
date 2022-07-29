import pages from '../../pages';

export class PlayersPage {
  getClassesDropdown() {
    return cy.get('.classes-dropdown-wrapper');
  }

  getClassesListInDropdown() {
    return cy.get('.classes-dropdown-wrapper li');
  }

  getAddPlayersBtn() {
    return cy.get('a[data-target="#addingPlayersModal"]');
  }

  getAddPlayersModalBtns() {
    return cy.get('#addingPlayersModal a');
  }

  getSeedingDropdown() {
    return cy
      .get('.rin-player-step-row .rin-player-step-col')
      .eq(1)
      .find('.rin-dropdown-toggle');
  }

  getSeedingTemplatesFromDropdown() {
    return cy.get('.rin-player-step-row .rin-player-step-col').eq(1).find('li');
  }

  getSaveSeedingBtn() {
    return cy.get('.rin-admin-button-wrapper .rin-btn-type-success');
  }

  //METHODS

  GoTo() {
    cy.contains('.tournament-menu a', '4. Players').click();
    cy.waitUntilElExist('.rin-player-step-row');
  }

  SelectClass(index) {
    this.getClassesDropdown().click();
    this.getClassesListInDropdown().eq(index).click();
    cy.waitUntilElNotDisplayed('.rin-spinner-m');
  }

  SelectSeedingTemplate(index) {
    this.getSeedingDropdown().click();
    cy.wait(300);
    this.getSeedingTemplatesFromDropdown().eq(index).click();
    this.getSaveSeedingBtn().click();
    cy.waitUntilElNotDisplayed(
      '.rin-tournament-players-add-table .rin-spinner-m'
    );
  }

  AddPlayers(classIndex, numberOfPlayers) {
    this.SelectClass(classIndex);
    this.getAddPlayersBtn().click();
    this.getAddPlayersModalBtns().eq(1).click();
    pages.tournament.adminPages.addPlayersPage.AddPlayers(numberOfPlayers);
  }

  ScrapePlayerSeeds(alias) {
    let seeds = [];
    cy.get('.seedInputs').then((seedingsList) => {
      for (let i = 0; i < seedingsList.length; i++) {
        cy.wrap(seedingsList)
          .eq(i)
          .invoke('prop', 'value')
          .then((seedValue) => {
            seeds.push(seedValue);
            if (i == seedingsList.length - 1) {
              cy.wrap(seeds).as(alias);
            }
          });
      }
    });
  }

  ScrapePlayerNames(alias) {
    let names = [];
    cy.get('.names-data a').then((namesList) => {
      for (let i = 0; i < namesList.length; i++) {
        cy.wrap(namesList)
          .eq(i)
          .invoke('text')
          .then((nameValue) => {
            names.push(nameValue.trim());
            if (i == namesList.length - 1) {
              cy.wrap(names).as(alias);
            }
          });
      }
    });

    return names;
  }
}

export default new PlayersPage();

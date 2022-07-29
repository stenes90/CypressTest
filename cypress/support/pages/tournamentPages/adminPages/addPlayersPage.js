import { noop } from 'lodash';

export class AddPlayersPage {
  getSearchForRealPlayersBtn = () => {
    return cy.contains('small', 'Search for real players');
  };

  getPlayerNameInput = () => {
    return cy.get('input[placeholder="Player name"]');
  };

  //METHODS

  AddPlayers(noOfPlayers) {
    this.getSearchForRealPlayersBtn().click();
    this.getPlayerNameInput().type('Sele Acc');
    cy.waitUntilElDissapear('.rin-spinner-s');
    cy.wait(1500);

    for (let i = 0; i < noOfPlayers; i++) {
      cy.get('.list-group-item .rin-btn-type-tertiary').eq(0).click();
      cy.wait(300);
    }
    cy.contains('.rin-btn-type-success', 'Confirm').click();
    cy.waitUntilElExist('players-step-container');
  }
}

export default new AddPlayersPage();

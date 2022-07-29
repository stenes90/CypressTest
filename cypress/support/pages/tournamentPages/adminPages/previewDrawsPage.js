export class PreviewDrawsPage {
  //METHODS

  ScrapePlayerNamesElim(alias) {
    let names = [];
    cy.get('.first-round-el-participant a').then((nameElements) => {
      for (let i = 0; i < nameElements.length; i++) {
        cy.wrap(nameElements)
          .eq(i)
          .invoke('text')
          .then((name) => {
            //name = name.trim();
            // name = name.slice(2);
            // name = name.slice(0, name.length - 4);
            // name = name.trim();
            names.push(name.trim());
            if (i == nameElements.length - 1) {
              cy.wrap(names).as(alias);
            }
          });
      }
    });
  }

  ScrapeSeedsElim(alias) {
    let seeds = [];
    cy.get('.first-round-el-participant')
      .parents('.scores-draw-entry-box')
      .then((matches) => {
        for (let i = matches.length - 1; i >= 0; i--) {
          const match = matches[i];
          cy.wrap(match)
            .find('tr td span')
            .then((seedElements) => {
              for (let j = 0; j < seedElements.length; j++) {
                const playerSeed = seedElements[j];
                cy.wrap(playerSeed)
                  .invoke('text')
                  .then((text) => {
                    let seed = text.trim();
                    seed = seed.slice(1);
                    seed = seed.slice(0, seed.length - 1);
                    seeds.push(seed);
                  });
                if (j == seedElements.length - 1 && i == 0) {
                  cy.wrap(seeds).as(alias);
                }
              }
            });
        }
      });
  }

  CheckIfSeedingIsCorrect(namesInPlayersPage, seedsInPlayersPage, namesInDraw, seedsInDraw) {
    debugger;
    // arguments data is correct, assertions need to be added here
  }
}

export default new PreviewDrawsPage();

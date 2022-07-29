
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
    createSimpleTournament(): Chainable<any>
    waitUntilElDissapear(selector): Chainable<any>
    logInAdmin(): Chainable<any>
    logIn(email, pass): Chainable<any>
    waitUntilElExist(selector): Chainable<any>
    waitUntilElExist(selector, contains?): Chainable<any>
    waitUntilElNotDisplayed(selector): Chainable<any>
    waitUntilElDisplayed(selector): Chainable<any>
    getUrl(alias): Chainable<any>
    getBtnUrl(selector, alias): Chainable<any>
    //waitUntilElExist(selector, contains): Chainable<any>

      
    }
  }
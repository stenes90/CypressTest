/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';
//import 'cypress-wait-until';
import globalNav from '../support/pages/globalNavbar';
import landingPage from '../support/pages/landingPage';
import pages from './pages/pages';

Cypress.Commands.add('createSimpleTournament', () => {
  globalNav.GoToCreateTnPage();
  pages.tournament.adminPages.createPage.SetTnName('Sele TN: ' + faker.random.words());
  pages.tournament.adminPages.createPage.ConfirmCreateTournament();
});

Cypress.Commands.add('logIn', (email, pass) => {
  landingPage.getLogInBtn().click();
  landingPage.getEmailInput().type(email);
  landingPage.getPassInput().type(pass);
  landingPage.getConfirmLogInBtn().click();
});

Cypress.Commands.add('logInAdmin', () => {
  cy.logIn('seleadmin@sele.com', 'terminator');
});

Cypress.Commands.add('getUrl', (alias) => {
  cy.url().then((url) => {
    cy.wrap(url).as(alias);
  });
});

Cypress.Commands.add('getBtnUrl', (selector, alias) => {
  cy.get(selector).then((btn) => {
    cy.wrap(btn)
      .invoke('attr', 'href')
      .then((url) => {
        console.log('url in then');
        console.log(url);
        cy.wrap(url).as(alias);
      });
  });
});

//WAITERS

Cypress.Commands.add('waitUntilElDissapear', (selector) => {
  cy.get(selector).should('not.exist');
});

Cypress.Commands.add('waitUntilElExist', (selector) => {
  if (arguments.length == 1) {
    cy.get(selector).should('exist');
  } else if (arguments.length == 1) {
    cy.get(selector).should('exist').and('contain', contains);
  }
});

Cypress.Commands.add('waitUntilElNotDisplayed', (selector) => {
  cy.get(selector).should('not.be.visible');
});

Cypress.Commands.add('waitUntilElDisplayed', (selector) => {
  cy.get(selector).should('be.visible');
});

/// <reference types="cypress" />

import landingPage from '../../support/pages/landingPage';
import pages from '../../support/pages/pages';

describe('Tournament Tests', () => {
  it('Select Levels', () => {
    cy.visit('/');
    landingPage.LogIn();
    cy.createSimpleTournament();
    pages.tournament.adminPages.createPage.GoTo();
    pages.tournament.adminPages.createPage.AddRanking('Ckembe-Open');
    pages.tournament.adminPages.classesPage.GoTo();
    const className = 'Class 1';
    pages.tournament.adminPages.classesPage.AddClass(className);
    pages.tournament.adminPages.closeSignInPage.GoTo();
    cy.contains('.rin-close-signin-table-wrapper .rin-row div', className);
    cy.contains('.rin-close-signin-table-wrapper .rin-row div', 'Select level');
    pages.tournament.adminPages.closeSignInPage.SelectLevel();
  });

  it('SeedingVsPlayersSectionVsSeedingInfoInDraws', () => {
    cy.visit('/');
    landingPage.LogIn();
    cy.createSimpleTournament();
    pages.tournament.adminPages.classesPage.GoTo();
    pages.tournament.adminPages.classesPage.AddClass('Class Elim');
    pages.tournament.adminPages.classesPage.AddClass('Class RR');
    pages.tournament.publicPages.tnHomepage.GoTo();
    cy.getUrl('eventUrl');
    pages.tournament.publicPages.tnHomepage.GoToAdminPanel();
    pages.tournament.adminPages.playersPage.GoTo();
    pages.tournament.adminPages.playersPage.AddPlayers(0, 8);
    pages.tournament.adminPages.playersPage.AddPlayers(1, 4);
    pages.tournament.adminPages.playersPage.SelectClass(0);
    pages.tournament.adminPages.playersPage.SelectSeedingTemplate(2);
    pages.tournament.adminPages.playersPage.SelectClass(1);
    pages.tournament.adminPages.playersPage.SelectSeedingTemplate(3);
    pages.tournament.adminPages.playersPage.SelectClass(0);
    pages.tournament.adminPages.playersPage.ScrapePlayerSeeds('seedInPlayersPageElim');
    pages.tournament.adminPages.playersPage.ScrapePlayerNames('namesInPlayersPageElim');
    pages.tournament.adminPages.playersPage.SelectClass(1);
    pages.tournament.adminPages.playersPage.ScrapePlayerSeeds('seedInPlayersPageRR');
    pages.tournament.adminPages.playersPage.ScrapePlayerNames('namesInPlayersPageRR');
    pages.tournament.adminPages.drawsPage.GoTo();
    pages.tournament.adminPages.drawsPage.CheckElim();
    pages.tournament.adminPages.drawsPage.GenerateDraw();
    cy.getBtnUrl('.preview-draws-wrapper .rin-btn-type-primary', 'previewDrawURLElim');
    cy.get('@previewDrawURLElim').then((url) => {});
    pages.tournament.adminPages.drawsPage.SelectClass(1);
    pages.tournament.adminPages.drawsPage.CheckRR();
    pages.tournament.adminPages.drawsPage.GenerateDraw();
    cy.getBtnUrl('.preview-draws-wrapper .rin-btn-type-primary', 'previewDrawURLRR');
    cy.get('@previewDrawURLElim').then((url) => {
      cy.visit(url);
      cy.waitUntilElExist('.first-round-el-participant');
    });

    pages.tournament.adminPages.previewDrawsPage.ScrapePlayerNamesElim('namesPreviewDrawElim');
    pages.tournament.adminPages.previewDrawsPage.ScrapeSeedsElim('seedsPreviewDrawElim');

    let namesInPlayersPage = null;
    let seedsInPlayersPage = null;
    let namesInDraw = null;
    let seedsInDraw = null;
    cy.get('@namesInPlayersPageElim').then((namesInList) => {
      namesInPlayersPage = namesInList;
      cy.get('@seedInPlayersPageElim').then((seedsInList) => {
        seedsInPlayersPage = seedsInList;
        cy.get('@namesPreviewDrawElim').then((names) => {
          namesInDraw = names;
          cy.get('@seedsPreviewDrawElim').then((seeds) => {
            seedsInDraw = seeds;
            pages.tournament.adminPages.previewDrawsPage.CheckIfSeedingIsCorrect(namesInPlayersPage, seedsInPlayersPage, namesInDraw, seedsInDraw);
          });
        });
      });
    });
  });
});

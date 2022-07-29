export class LandingPage {
  getLogInBtn() {
    return cy.get('.rin-nav-login-or-create-wrap .rin-btn-type-success');
  }

  getEmailInput() {
    return cy.get('input[placeholder="Email address"]');
  }

  getPassInput() {
    return cy.get('input[placeholder="Password"]');
  }

  getConfirmLogInBtn() {
    return cy.get('.btnLogin');
  }

  LogIn() {
    this.getLogInBtn().click();
    this.getEmailInput().type('stefan@rankedin.com');
    this.getPassInput().type('kralimarko');
    this.getConfirmLogInBtn().click();
  }
}

export default new LandingPage();

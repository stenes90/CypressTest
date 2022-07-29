import faker from '@faker-js/faker';

export class ClassesPage {
  getClassNameInput() {
    return cy.get('input[placeholder="Class name"]');
  }

  getClassDateBtns() {
    return cy.get('.play-dates');
  }

  getAddClassBtn() {
    return cy.get('.class-save-btns .rin-btn-type-success');
  }

  //METHODS

  GoTo() {
    cy.contains('.tournament-menu a', '3. Classes').click();
    cy.waitUntilElExist('input[placeholder="Class name"]');
  }

  AddClass(name) {
    this.getClassNameInput().type(name);
    this.getClassDateBtns().eq(0).click();
    this.getClassDateBtns().eq(1).click();
    this.getAddClassBtn().click();
    cy.contains('.rin-add-classes-table .bold', name);
  }
}

export default new ClassesPage();

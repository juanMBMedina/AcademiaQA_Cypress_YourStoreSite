import BasePageWithMenu from "../base/BasePageWithMenu";
import AccountPage from "../account/AccountPage";
import { writeText } from "../../support/utils";
import { URLS } from "../../support/constants";
import { PAGE_MSSGS } from "../../support/constants";

class LoginPage extends BasePageWithMenu {
  constructor() {
    super(URLS.LOGIN);
    this.elements = this.defaultElements;
  }

  get defaultElements() {
    return {
      ...super.defaultElements,
      inputEmail: () => cy.get("#input-email"),
      inputPassword: () => cy.get("#input-password"),
      submitButton: () => cy.get("[type='submit']"),
    };
  }

  fillLoginForm(user) {
    writeText(user.email, this.elements.inputEmail());
    writeText(user.password, this.elements.inputPassword());
    this.elements.submitButton().click();

    return new AccountPage();
  }

  validateFormIsVisible() {
    this.validateNavBar();
    this.validateRigthBar();
    this.elements.inputEmail().should("be.visible");
    this.elements.inputPassword().should("be.visible");
    this.elements.submitButton().should("be.visible");
  }

  validateFailureLogin() {
    this.elements
      .msgAlert()
      .invoke("text")
      .then((text) => {
        if (text === PAGE_MSSGS.LOGIN_PAGE.LOGIN_FAILURE) {
          cy.contains(PAGE_MSSGS.LOGIN_PAGE.LOGIN_FAILURE).should("be.visible");
        } else if (text === PAGE_MSSGS.LOGIN_PAGE.MAX_LOGIN_FAILURE) {
          cy.contains(PAGE_MSSGS.LOGIN_PAGE.MAX_LOGIN_FAILURE).should(
            "be.visible"
          );
        } else {
          cy.fail(`El mensaje: {$text} fue inesperado`);
        }
      });
  }
}

export default LoginPage;

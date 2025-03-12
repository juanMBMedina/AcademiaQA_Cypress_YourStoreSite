import BasePageWithMenu from "../base/BasePageWithMenu";
import AccountPage from "../account/AccountPage";
import {writeText} from '../../support/utils';
import { URLS } from "../../support/constants"; 

class LoginPage extends BasePageWithMenu{

  constructor(){
    super(URLS.LOGIN);
    this.elements = this.defaultElements;
  }

  barItems = [
    "Login",
    "Register",
    "Password",
    "Forgotten Password",
    "My Account",
    "Address Book",
    "Wish List",
    "Order History",
    "Downloads",
    "Recurring payments",
    "Reward Points",
    "Returns",
    "Transactions",
    "Newsletter"
  ];

  get defaultElements() {
    return {
      ...super.defaultElements,
      inputEmail: () => cy.get("#input-email"),
      inputPassword: () => cy.get("#input-password"),
      submitButton: () => cy.get("[type='submit']")    
    };
  }

  fillLoginForm(user) {
    writeText(user.email, this.elements.inputEmail());
    writeText(user.password, this.elements.inputPassword());
    this.elements.submitButton().click();
    cy.url().should("contain", URLS.ACCOUNT);
    return new AccountPage();
  }

  validateFormIsVisible(){
    this.validateMenuBar(this.barItems);
    this.elements.inputEmail().should("be.visible");
    this.elements.inputPassword().should("be.visible");
    this.elements.submitButton().should("be.visible");
  }
}

export default LoginPage;

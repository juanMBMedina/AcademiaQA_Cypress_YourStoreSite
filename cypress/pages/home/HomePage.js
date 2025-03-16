import BasePage from "../base/BasePage";
import LoginPage from "../login/LoginPage";
import RegisterPage from "../register/RegisterPage";
import { URLS } from "../../support/constants";

class HomePage extends BasePage {
  constructor() {
    super(URLS.HOME);
  }

  navigateToPage() {
    cy.visit(this.endpoint);
    this.validateURL();
  }

  //Check file ´./itemsPage.json´ to use or create the next methods:
  
  clickOnRegister() {
    this.headerMenu.clickOnOption("My Account", "Register");
  }

  clickOnLogin() {
    this.headerMenu.clickOnOption("My Account", "Login");
  }

  goToRegisterPage() {
    this.clickAccOptions();
    this.clickOnRegister();
    cy.url().should("contain", URLS.REGISTER);
    return new RegisterPage();
  }

  goToLoginPage() {
    this.clickAccOptions();
    this.clickOnLogin();
    cy.url().should("contain", URLS.LOGIN);
    return new LoginPage();
  }

}

export default HomePage;

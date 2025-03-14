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

  goToRegisterPage() {
    this.clickAccOptions();
    this.getHeaderItem("My Account", "Register").click();
    cy.url().should("contain", URLS.REGISTER);
    return new RegisterPage();
  }

  goToLoginPage() {
    this.clickAccOptions();
    this.getHeaderItem("My Account", "Login").click();
    cy.url().should("contain", URLS.LOGIN);
    return new LoginPage();
  }

}

export default HomePage;

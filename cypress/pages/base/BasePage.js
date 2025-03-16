import defaultData from "./itemsPage.json";
import HeaderMenu from "./elements/HeaderMenu";
import { ERROR_MSSGS } from "../../support/constants";

class BasePage {
  constructor(endpoint, dataPage = defaultData) {
    if (new.target === BasePage) {
      throw new Error(ERROR_MSSGS.INST_ERROR(BasePage.name));
    }
    this._endpoint = endpoint;
    this._headerMenu = new HeaderMenu(dataPage);
    this.elements = this.defaultElements;
  }

  // 🔹 Getter to get default elements
  get defaultElements() {
    return {
      mssgInPage: (text) => cy.contains(text),
      msgAlert: () => cy.get(".alert"),
    };
  }

  // 🔹 Getter y Setter for `elements`
  get elements() {
    return this._elements;
  }

  set elements(value) {
    if (typeof value !== "object" || value === null) {
      throw new Error("❌ elements debe ser un objeto.");
    }
    this._elements = value;
  }

  // Getter `endpoint`
  get endpoint() {
    return this._endpoint;
  }

  // Getter `headerMenu`
  get headerMenu() {
    return this._headerMenu;
  }

  validateURLWith(endpoint) {
    cy.url().should("contain", endpoint);
  }

  validateURL() {
    this.validateURLWith(this.endpoint);
  }

  validateMssg(text) {
    this.elements.mssgInPage(text).should("be.visible");
  }

  validateNavBar() {
    this.validateURL();
    this.headerMenu.validateNavBar();
  }

  //Check file ´./itemsPage.json´ to use or create the next methods:

  clickAccOptions() {
    this.headerMenu.clickOnOption("My Account");
  }
}

export default BasePage;

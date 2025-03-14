import BasePageWithMenu from "../base/BasePageWithMenu";
import LogoutPage from "../login/LogoutPage";
import data from "./itemsPage.json";
import { URLS } from "../../support/constants";

class AccountPage extends BasePageWithMenu {
  constructor() {
    super(URLS.ACCOUNT);
    this.navBarSectionItems = data.sectionNavItems;
    this.elements = this.defaultElements;
    this.columnRightItems = data.columnRightItems;
    this.sectionsPage = data.sectionsPage;
  }

  // 🔹 Getter y Setter para `sectionsPage`
  get sectionsPage() {
    return this._sectionsPage;
  }

  set sectionsPage(value) {
    if (typeof value !== "object" || value === null) {
      throw new Error("❌ elements debe ser un objeto.");
    }
    this._sectionsPage = value;
  }
  
  get defaultElements() {
    return {
      ...super.defaultElements,
      sectionsContent: () => cy.get("#content"),
      titleLabel: (text) => cy.get("#content").contains("h2", text),
      linkMenu: (text) => cy.get("#content").contains("a", text),
    };
  }

  validateSections() {
    this.elements.sectionsContent().should("be.visible");
    this.sectionsPage.forEach((section) => {
      this.elements.titleLabel(section.title).should("be.visible");
      section.links.forEach((text) => {
        this.elements.linkMenu(text).should("be.visible");
      });
    });
  }

  validateLoginSuccess() {
    this.validateNavBar();
    this.validateSections();
    this.validateRigthBar();
  }

  performLogout() {
      this.clickAccOptions();
      this.getHeaderItem("My Account", "Logout").click();
      return new LogoutPage();
    }
}

export default AccountPage;

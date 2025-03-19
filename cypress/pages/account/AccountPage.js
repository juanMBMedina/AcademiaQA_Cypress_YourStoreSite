import BasePageWithMenu from "../base/BasePageWithMenu";
import LogoutPage from "../login/LogoutPage";
import SectionAccount from "./elements/SectionAccount";
import dataPage from "./itemsPage.json";
import { URLS } from "../../support/constants";

class AccountPage extends BasePageWithMenu {
  constructor() {
    if (dataPage.sectionsPage === undefined) {
      throw new Error(ERROR_MSSGS.PARAM_ERROR("sectionsPage"));
    }
    super(URLS.ACCOUNT, dataPage);
    this.elements = this.defaultElements;
    this.sectionsPage = dataPage.sectionsPage.map(
      (item) => new SectionAccount(item)
    );
  }

  // 🔹 Getter y Setter para `sectionsPage`
  get sectionsPage() {
    return this._sectionsPage;
  }
  // Add check data to input data.
  set sectionsPage(value) {
    this._sectionsPage = value;
  }

  validateSections() {
    this.sectionsPage.forEach((section) => section.validateContent());
  }

  validateLoginSuccess() {
    this.validateNavBar();
    this.validateSections();
    this.validateRigthBar();
  }

  performLogout() {
    this.clickAccOptions();
    this.headerMenu.clickOnOption("My Account", "Logout");
    return new LogoutPage();
  }
}

export default AccountPage;

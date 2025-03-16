import BasePageWithMenu from "../base/BasePageWithMenu";
import { URLS } from "../../support/constants";
import { PAGE_MSSGS } from "../../support/constants";
import HomePage from "../home/HomePage";

class LoginPage extends BasePageWithMenu{

  constructor(){
    super(URLS.LOGOUT);
    this.elements = this.defaultElements;
  }

  get defaultElements() {
    return {
      ...super.defaultElements,
      continueButton: () => cy.get(".btn-primary")    
    };
  }

  finishLogout() {
    this.elements.continueButton().click();
    return new HomePage();
  }

  validateSuccesLogout(){
    this.validateURL();
    this.validateNavBar();
    this.validateRigthBar();
    this.elements.continueButton().should("be.visible");
    this.validateMssg(PAGE_MSSGS.LOGOUT_PAGE.SUCCES_LOGUT);
  }

}

export default LoginPage;

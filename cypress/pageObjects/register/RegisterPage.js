import { writeText } from "../../support/utils";
import BasePageWithMenu from "../base/BasePageWithMenu";
import { URLS } from "../../support/constants";

class RegisterPage extends BasePageWithMenu {
  constructor() {
    super(URLS.REGISTER);
    this.elements = this.defaultElements;
  }

  get defaultElements() {
    return {
      ...super.defaultElements,
      mssgLabel: (text) => cy.contains("div", text),
      inputName: () => cy.get("#input-firstname"),
      inputLastName: () => cy.get("#input-lastname"),
      inputEmail: () => cy.get("#input-email"),
      inputTelephone: () => cy.get("#input-telephone"),
      inputPassword: () => cy.get("#input-password"),
      inputConfirmPassword: () => cy.get("#input-confirm"),
      suscribeRadioButton: (option) =>
        cy.get(".radio-inline").find("input").eq(!option).click(),
      privacityCheckbox: () => cy.get("[type='checkbox']"),
      submitButton: () => cy.get("[type='submit']"),
      form: () => cy.get(".form-horizontal")
    };
  }

  fillRegisterForm(user) {
    writeText(user.name, this.elements.inputName());
    writeText(user.lastName, this.elements.inputLastName());
    writeText(user.email, this.elements.inputEmail());
    writeText(user.telephone, this.elements.inputTelephone());
    writeText(user.password, this.elements.inputPassword());
    writeText(user.password, this.elements.inputConfirmPassword());
    this.elements.suscribeRadioButton(user.suscribe);

    if(user.privacity) this.elements.privacityCheckbox().check();
    else this.elements.privacityCheckbox().uncheck();
    
    this.elements.submitButton().click();
  }

  validateFormIsVisible(){
    this.validateNavBar();
    this.validateRigthBar();
    this.elements.inputName().should("be.visible");
    this.elements.inputLastName().should("be.visible");
    this.elements.inputEmail().should("be.visible");
    this.elements.inputTelephone().should("be.visible");
    this.elements.inputPassword().should("be.visible");
    this.elements.inputConfirmPassword().should("be.visible");
    this.elements.suscribeRadioButton().should("be.visible");
    this.elements.privacityCheckbox().should("be.visible");
    this.elements.submitButton().should("be.visible");
  }

  validateMssg(text) {
    this.elements.mssgLabel(text).should("be.visible");
  }
}

export default RegisterPage;

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
      privacyChecbox: (option) => {
        if (option) cy.get("[type='checkbox']").click();
      },
      submitButton: () => cy.get("[type='submit']"),
    };
  }

  fillRegisterForm(user) {
    writeText(user.name, this.elements.inputName());
    writeText(user.name, this.elements.inputName());
    writeText(user.lastName, this.elements.inputLastName());
    writeText(user.email, this.elements.inputEmail());
    writeText(user.telephone, this.elements.inputTelephone());
    writeText(user.password, this.elements.inputPassword());
    writeText(user.password, this.elements.inputConfirmPassword());
    this.elements.suscribeRadioButton(user.suscribe);
    this.elements.privacyChecbox(user.privacy);
    this.elements.submitButton().click();
  }

  validateMssg(text) {
    this.elements.mssgLabel(text).should("be.visible");
  }
}

export default RegisterPage;

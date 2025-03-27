import { ERROR_MSSGS } from "../../../support/constants";

class SectionAccount {
  constructor(data) {
    if (data.title === undefined) {
      throw new Error(ERROR_MSSGS.PARAM_ERROR("title"));
    }

    if (data.links === undefined) {
      throw new Error(ERROR_MSSGS.PARAM_ERROR("links"));
    }
    this.elements = this.defaultElements;
    this._title = data.title;
    this._links = data.links;
  }

  // 🔹 Getter para obtener los elementos predeterminados
  get defaultElements() {
    return {
      sectionsContent: () => cy.get("#content"),
      titleLabel: (text) => cy.get("#content").contains("h2", text),
      linkMenu: (text) => cy.get("#content").contains("a", text),
    };
  }

  // 🔹 Getter y Setter para `title` y `links`
  get title() {
    return this._title;
  }

  get links() {
    return this._links;
  }

  validateContent() {
    this.elements.sectionsContent().should("be.visible");
    this.elements.titleLabel(this.title).should("be.visible");
    this.links.forEach((text) => {
      this.elements.linkMenu(text).should("be.visible");
    });
  }
}

export default SectionAccount;

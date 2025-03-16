import { ERROR_MSSGS } from "../../../support/constants";

class RightMenu {
  constructor(data) {
    if (data.columnRightItems === undefined) {
      throw new Error(ERROR_MSSGS.PARAM_ERROR("columnRightItems"));
    }

    this.columnRightItems = data.columnRightItems;
    this.elements = this.defaultElements;
  }

  get defaultElements() {
    return {
      menuBar: () => cy.get("#column-right"),
      itemMenuBar: (text) => cy.get("#column-right").contains("a", text),
    };
  }

  // 🔹 Getter y Setter para `columnRightItem`
  get columnRightItems() {
    return this._columnRightItems;
  }

  set columnRightItems(value) {
    if (!Array.isArray(value)) {
      throw new Error("❌ columnRightItem debe ser un array.");
    }
    this._columnRightItems = value;
  }

  validateRigthBar() {
    this.elements.menuBar().should("be.visible");
    this.columnRightItems.forEach((text) => {
      this.elements.itemMenuBar(text).should("be.visible");
    });
  }

}

export default RightMenu;

import BasePage from "./BasePage";
import data from "./itemsPage";

class BasePageWithMenu extends BasePage {
  constructor(endpoint) {
    super(endpoint);
    this.elements = this.defaultElements;
    this.columnRightItems = data.columnRightItems;    
  }

  // 🔹 Getter y Setter para `columnRightItem`
  get columnRightItems() {
    return this._columnRightItems;
  }

  set columnRightItems(value) {
    if (!Array.isArray(value)) {
      throw new Error("❌ navBarSectionItems debe ser un array.");
    }
    this._columnRightItems = value;
  }

  // Getter que amplía los elementos de `BasePage`
  get defaultElements() {
    return {
      ...super.defaultElements,
      menuBar: () => cy.get("#column-right"),
      itemMenuBar: (text) => cy.get("#column-right").contains("a", text),
    };
  }
  
  validateRigthBar() {
    this.elements.menuBar().should("be.visible");
    this.columnRightItems.forEach((text) => {
      this.elements.itemMenuBar(text).should("be.visible");
    });
  }
}

export default BasePageWithMenu;
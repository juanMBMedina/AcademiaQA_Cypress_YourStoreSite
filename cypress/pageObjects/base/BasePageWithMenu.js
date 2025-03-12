import BasePage from "./BasePage";

class BasePageWithMenu extends BasePage {
  constructor(endpoint) {
    super(endpoint);
    this.elements = this.defaultElements;
  }

  // Getter que amplía los elementos de `BasePage`
  get defaultElements() {
    return {
      ...super.defaultElements, // Hereda los elementos base
      menuBar: () => cy.get("#column-right"),
      itemMenuBar: (text) => cy.get("#column-right").contains("a", text),
    };
  }
  
  validateMenuBar(expectedItems) {
    this.elements.menuBar().should("be.visible");
    expectedItems.forEach((text) => {
      this.elements.itemMenuBar(text).should("be.visible");
    });
  }
}

export default BasePageWithMenu;
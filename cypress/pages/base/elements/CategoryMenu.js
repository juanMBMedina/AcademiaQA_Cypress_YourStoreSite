import { ERROR_MSSGS } from "../../../support/constants";
import ItemFound from "./ItemFound";

class CategoryMenu {
  constructor(data) {
    if (data.type === undefined) {
      throw new Error(
        ERROR_MSSGS.PARAM_ERROR(
          `class Item ${data} in the data input ${CategoryMenu.name}`
        )
      );
    }
    this.elements = this.defaultElements;
    this.data = data;
  }

  // 🔹 Getter para obtener los elementos predeterminados
  get defaultElements() {
    return {
      menuClasses: () => cy.get("#menu"),
      itemType: (type) => this.elements.menuClasses().contains("li", type),
      itemCategory: (type, category) =>
        this.elements.itemType(type).contains("li", category),
    };
  }

  goToItem() {
    this.elements.itemType(this.data.type).click();
    if (this.data.category === undefined) {
      return new ItemFound(this.data.title);
    }
    console.log(this.data);
    this.elements
      .itemCategory(this.data.type, this.data.category)
      .should("exist")
      .click();
    return new ItemFound(this.data.title);
  }
}

export default CategoryMenu;

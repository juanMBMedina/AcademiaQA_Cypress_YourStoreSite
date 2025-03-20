import { URLS, PAGE_MSSGS } from "../../support/constants";
import BasePage from "../base/BasePage";

class ShoppingCart extends BasePage {
  constructor() {
    super(URLS.SHOPPING_CART);
    this.elements = this.defaultElements;
  }

  get defaultElements() {
    return {
      ...super.defaultElements,
      tableItems: () => cy.get(".table-responsive").get("tbody"),
      rowItem: (text) => this.elements.tableItems().contains("tr", text),
      productName: (text) => this.elements.rowItem(text).contains("a", text),
      productPrice: (text, price) =>
        this.elements.rowItem(text).contains(price),
      inputText: (text) => this.elements.rowItem(text).get("[type='text']"),
      refreshValue: (text) =>
        this.elements.rowItem(text).get("[data-original-title='Update']"),
      deleteItemButton: (text) =>
        this.elements.rowItem(text).get("[data-original-title='Remove']"),
      finalValue: (text) =>
        this.elements.rowItem(text).get(".text-right").eq(2)
    };
  }

  // Getter and Setter.
  get itemFound() {
    return this._itemFound;
  }
  set itemFound(newItemFound) {
    this._itemFound = newItemFound;
  }

  validateItemWith(itemFound) {
    this.elements.tableItems().should("be.visible");
    this.elements.rowItem(itemFound.name).should("be.visible");
    this.elements.productName(itemFound.name).should("be.visible");
  }

  clickRemoveList(itemFound) {
    this.elements.deleteItemButton(itemFound.name).click();
  }

  validateVoidCart() {
    cy.xpath(`//*[contains(text(),'${PAGE_MSSGS.SHOPPING_CART.VOID_CART}')]`);
  }
}

export default ShoppingCart;

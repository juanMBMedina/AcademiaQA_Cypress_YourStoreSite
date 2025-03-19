import { URLS, PAGE_MSSGS } from "../../support/constants";
import BasePageWithMenu from "../base/BasePageWithMenu";
import data from "./itemsPage.json";

class WishListPage extends BasePageWithMenu {
  constructor() {
    super(URLS.WISH_LIST, data);
    this.elements = this.defaultElements;
  }

  get defaultElements() {
    return {
      ...super.defaultElements,
      tableItems: () => cy.get(".table-responsive").get("tbody"),
      rowItem: (text) => this.elements.tableItems().contains("tr", text),
      productName: (text) =>
        this.elements.rowItem(text).contains("a", text),
      productPrice: (text, price) => this.elements.rowItem(text).get(".price").contains(price),
      addToCartButton: (text) =>
        this.elements.rowItem(text).get("[data-original-title='Add to Cart']"),
      deleteItemButton: (text) =>
        this.elements.rowItem(text).get("[data-original-title='Remove']"),
    };
  }

  // Getter and Setter.
  get itemFound() {
    return this._itemFound;
  }
  set itemFound(newItemFound) {
    this._itemFound = newItemFound;
  }

  validateItemWith(itemFound){
    this.elements.tableItems().should("be.visible");
    this.elements.rowItem(itemFound.name).should("be.visible");
    this.elements.productName(itemFound.name).should("be.visible");
    this.elements.productPrice(itemFound.name, itemFound.price).should("be.visible");
  }

  clickAddToCart(itemFound){
    this.elements.addToCartButton(itemFound.name).click();
  }

  clickRemoveList(itemFound){
    this.elements.deleteItemButton(itemFound.name).click();
  }

  validateRemoveItem(itemFound){
    this.validateMssg(PAGE_MSSGS.HOME_PAGE.SUCCESS_CHANGE_WHISLIST);
  }
}

export default WishListPage;

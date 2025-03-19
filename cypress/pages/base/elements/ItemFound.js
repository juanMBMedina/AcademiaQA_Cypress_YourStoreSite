import { ERROR_MSSGS } from "../../../support/constants";
import { PAGE_MSSGS } from "../../../support/constants";

class ItemFound {
  constructor(itemName) {
    if (itemName === undefined) {
      throw new Error(
        ERROR_MSSGS.PARAM_ERROR(
          `class itemName ${data} in the data input ${CategoryMenu.name}`
        )
      );
    }
    this.elements = this.defaultElements;
    this._name = "";
    this._description = "";
    this._price = "";
  }

  // Getters
  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }

  // Setters
  set name(newName) {
    this._name = newName;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  // 🔹 Getter para obtener los elementos predeterminados
  get defaultElements() {
    return {
      itemBox: () => cy.get(".product-thumb"),
      itemName: () => this.elements.itemBox().get(".caption").get("h4"),
      itemDescription: () =>
        this.elements.itemBox().get(".caption").get("p").eq("1"),
      itemPrice: () => this.elements.itemBox().get(".caption").get("p").eq("2"),

      addToCartButton: () =>
        this.elements.itemBox().get(".button-group").contains("Add to Cart"),
      addWhisButton: () =>
        this.elements
          .itemBox()
          .get(".button-group")
          .get("[data-original-title='Add to Wish List']"),
      comparsionButton: () =>
        this.elements
          .itemBox()
          .get(".button-group")
          .get("[data-original-title='Compare this Product']"),
    };
  }

  validateItem() {
    this.elements.itemBox().should("be.visible");

    this.elements
      .itemName()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        this.name = text.trim();
      });

    this.elements
      .itemDescription()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        this.description = text.trim();
      });

    this.elements
      .itemPrice()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        this.price = text.split("\n")[0].trim(); // ✅ Validar para ReExp
      });
      
  }

  addToCart() {
    this.elements.addToCartButton().click();
  }

  addWishList() {
    this.elements.addWhisButton().click();
  }

  performComparation() {
    this.elements.comparsionButton().click();
  }

  validateCompMssg() {
    this.elements
      .itemName()
      .invoke("text")
      .then((text) => {
        const myText = text.trim();
        cy.contains(PAGE_MSSGS.HOME_PAGE.SUCCES_COMPARATION(myText)).should(
          "be.visible"
        );
      });
  }
}

export default ItemFound;

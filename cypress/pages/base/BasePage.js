import data from "./itemsPage.json";

class BasePage {
  constructor(endpoint) {
    if (new.target === BasePage) {
      throw new Error(
        "BasePage is an abstract class and cannot be instantiated directly."
      );
    }
    this._endpoint = endpoint;
    this.navBarSectionItems = data.sectionNavItems;
    this.navBarSingleItems = data.singleNavItems;
    this.elements = this.defaultElements;
  }

  // 🔹 Getter para obtener los elementos predeterminados
  get defaultElements() {
    return {
      headerNav: () => cy.get("#top"),
      itemHeaderNav: (text) => this.elements.headerNav().contains(text),
      subItemHeaderBar: (textParent, textChild) =>
        this.elements.headerNav().contains(textParent).parent().contains(textChild),
      mssgInPage: (text) => cy.contains(text),
      msgAlert: () => cy.get(".alert")
    };
  }

  // 🔹 Getter y Setter para `elements`
  get elements() {
    return this._elements;
  }

  set elements(value) {
    if (typeof value !== "object" || value === null) {
      throw new Error("❌ elements debe ser un objeto.");
    }
    this._elements = value;
  }

  // Getter y Setter para `endpoint`
  get endpoint() {
    return this._endpoint;
  }

  validateURLWith(endpoint) {
    cy.url().should("contain", endpoint);
  }

  validateURL() {
    this.validateURLWith(this.endpoint);
  }

  validateMssg(text){
    this.elements.mssgInPage(text).should("be.visible");
  }

  // Getter y Setter para `navBarSectionItems`
  get navBarSectionItems() {
    return this._navBarSectionItems;
  }

  set navBarSectionItems(value) {
    if (!Array.isArray(value)) {
      throw new Error("❌ navBarSectionItems debe ser un array.");
    }
    this._navBarSectionItems = value;
  }

  // Getter y Setter para `navBarSingleItems`
  get navBarSingleItems() {
    return this._navBarSingleItems;
  }

  set navBarSingleItems(value) {
    if (!Array.isArray(value)) {
      throw new Error("❌ navBarSingleItems debe ser un array.");
    }
    this._navBarSingleItems = value;
  }

  /**
   * get an object from `navBarSectionItems` o `navBarSingleItems`
   * @param {string} parentText
   * @param {string} childText
   * @returns {cy.object} cy.object
   * @throws {Error}
   */
  getHeaderItem(parentText, childText = null) {
    if (childText) {
      // Buscar en `navBarSectionItems`
      const section = this.navBarSectionItems.find(
        (item) => item.title === parentText
      );
      if (section && section.elements.includes(childText)) {
        return this.elements.subItemHeaderBar(parentText, childText);
      }
    } else {
      // Buscar en `navBarSectionItems` y `navBarSingleItems`
      const section = this.navBarSectionItems.find(
        (item) => item.title === parentText
      );
      if (section) {
        return this.elements.itemHeaderNav(parentText);
      }
      if (this.navBarSingleItems.includes(parentText)) {
        return this.elements.itemHeaderNav(parentText);
      }
    }

    throw new Error(
      `❌ Elemento no encontrado: ${
        childText ? `${parentText} > ${childText}` : parentText
      }`
    );
  }

  validateNavBarSingleItems(navBarSingleItems) {
    navBarSingleItems
      .map((item) => this.getHeaderItem(item))
      .forEach((element) => element.should("exist"));
  }

  validateNavBarSections(navBarSectionItems) {
    navBarSectionItems.forEach((section) => {
      this.getHeaderItem(section.title).should("exist");
      section.elements.forEach((subItem) => {
        this.getHeaderItem(section.title, subItem).should("exist");
      });
    });
  }

  validateNavBar(){
    this.validateURL();
    this.validateNavBarSingleItems(this.navBarSingleItems);
    this.validateNavBarSections(this.navBarSectionItems);
  }

  clickAccOptions() {
    this.getHeaderItem("My Account").click();
  }

}

export default BasePage;

import BasePage from "../base/BasePage";
import LoginPage from "../login/LoginPage";
import RegisterPage from "../register/RegisterPage";
import { URLS } from "../../support/constants";
import WishListPage from "../wish_list/WishListPage";
import ShoppingCart from "../shopping_cart/ShoppingCart";

class HomePage extends BasePage {
  constructor() {
    super(URLS.HOME);
  }

  navigateToPage() {
    cy.visit(this.endpoint);
    this.validateURL();
  }

  //Check file ´./itemsPage.json´ to use or create the next methods:

  clickOnRegister() {
    this.headerMenu.clickOnOption("My Account", "Register");
  }

  clickOnLogin() {
    this.headerMenu.clickOnOption("My Account", "Login");
  }

  goToRegisterPage() {
    this.clickAccOptions();
    this.clickOnRegister();
    this.validateURLWith(URLS.REGISTER);
    return new RegisterPage();
  }

  goToLoginPage() {
    this.clickAccOptions();
    this.clickOnLogin();
    this.validateURLWith(URLS.LOGIN);
    return new LoginPage();
  }

  goToWishList() {
    this.headerMenu.clickOnOption("Wish List");
    this.validateURLWith(URLS.WISH_LIST);
    return new WishListPage();
  }

  goToShoppingCart() {
    this.headerMenu.clickOnOption("Shopping Cart");
    this.validateURLWith(URLS.SHOPPING_CART);
    return new ShoppingCart();
  }

  performComparation(itemFound) {
    itemFound.performComparation();
  }

  addWishList(itemFound) {
    itemFound.addWishList();
  }

  addToCart(itemFound) {
    itemFound.addToCart();
  }

  validateItem(itemFound) {
    itemFound.validateItem();
  }

  validateCompMssg(itemFound) {
    itemFound.validateCompMssg();
  }
}

export default HomePage;

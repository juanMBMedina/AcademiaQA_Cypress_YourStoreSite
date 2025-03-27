import HomePage from "../pages/home/HomePage";
import succesUserLogin from "../fixtures/login/successLoginUser.json";
import itemText from "../fixtures/items/itemTest.json";
import { cleanCookies } from "../support/utils";

describe("Your Store Site: Login User Tests", () => {
  let homePage = new HomePage();
  let loginPage;
  let accPage;
  let itemFound;
  let wishPage;
  let shopCartPage;

  beforeEach(() => {
    cleanCookies();
    // Navigate to page and validate login.
    homePage.navigateToPage();
    homePage.validateNavBar();
    loginPage = homePage.goToLoginPage();
    loginPage.validateFormIsVisible();
    accPage = loginPage.fillLoginForm(succesUserLogin);
    accPage.validateLoginSuccess();
    homePage = accPage.goToHome();
    itemFound = homePage.clickItemOption(itemText);
    homePage.validateItem(itemFound);
  });

  it("YS-9 - Validate the correct display of the product comparison message", () => {
    homePage.performComparation(itemFound);
    homePage.validateCompMssg(itemFound);
    cy.task("reportTo", { testCaseId: "YS-9", status: "PASSED" });
  });

  it("YS-10 - Validate the selection of favorite product", () => {
    homePage.addWishList(itemFound);
    wishPage = homePage.goToWishList(itemFound);
    wishPage.validateItemWith(itemFound);
    cy.task("reportTo", { testCaseId: "YS-10", status: "PASSED" });
  });

  it("YS-11 - Validate the deletion of a favorite product", () => {
    homePage.addWishList(itemFound);
    wishPage = homePage.goToWishList(itemFound);
    wishPage.validateItemWith(itemFound);
    wishPage.clickRemoveList(itemFound);
    wishPage.validateRemoveItem(itemFound);
    cy.task("reportTo", { testCaseId: "YS-11", status: "PASSED" });
  });

  it("YS-12 - Validate the loading of a product into the shopping cart", () => {
    homePage.addToCart(itemFound);
    shopCartPage = homePage.goToShoppingCart(itemFound);
    cy.task("reportTo", { testCaseId: "YS-12", status: "PASSED" });
  });

  it("YS-13 - See the product was removed from the shopping cart.", () => {
    homePage.addToCart(itemFound);
    shopCartPage = homePage.goToShoppingCart(itemFound);
    shopCartPage.clickRemoveList(itemFound);
    shopCartPage.validateVoidCart();
    cy.task("reportTo", { testCaseId: "YS-13", status: "PASSED" });
  });
});

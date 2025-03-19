import HomePage from "../pages/home/HomePage";
import succesUserLogin from "../fixtures/login/successLoginUser.json";
import itemText from "../fixtures/items/itemTest.json";
import { cleanCookies } from "../support/utils";

describe("Your Store Site: Login User Tests", () => {
  var homePage = new HomePage();
  var loginPage;
  var accPage;
  var itemFound;
  var wishPage;

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
    wishPage.clickRemoveList(itemFound);
    wishPage.validateRemoveItem(itemFound);
    cy.task("reportTo", { testCaseId: "YS-10", status: "PASSED" });
  });

});

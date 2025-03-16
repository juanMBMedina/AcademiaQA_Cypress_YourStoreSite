import HomePage from "../pages/home/HomePage";
import succesUserLogin from "../fixtures/login/successLoginUser.json";
import failureUserLogin from "../fixtures/login/failureLoginUser.json";
import failureUsers from "../fixtures/login/failureLoginWithEmptyDataUser.json";
import {cleanCookies} from "../support/utils";

describe("Your Store Site: Login User Tests", () => {
  var homePage = new HomePage();
  var loginPage;
  var accPage;

  beforeEach(() => {
    cleanCookies();
    // Navigate to page and validate login.
    homePage.navigateToPage();
    homePage.validateNavBar();
    loginPage = homePage.goToLoginPage();
    loginPage.validateFormIsVisible();
    accPage = loginPage.fillLoginForm(succesUserLogin);
  });

  it("YS-9 - Validate the correct display of the product comparison message", () => {
    accPage.validateLoginSuccess();
    cy.task("reportTo", { testCaseId: "YS-9", status: "PASSED" });
  });

});

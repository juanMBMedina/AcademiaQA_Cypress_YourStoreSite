import HomePage from "../pages/home/HomePage";
import succesUserLogin from "../fixtures/login/successLoginUser.json";
import failureUserLogin from "../fixtures/login/failureLoginUser.json";
import failureUsers from "../fixtures/login/failureLoginWithEmptyDataUser.json";
import {cleanCookies} from "../support/utils";

describe("Your Store Site: Login User Tests", () => {
  var homePage = new HomePage();
  var loginPage;
  var accPage;
  var logoutPage;

  beforeEach(() => {
    cleanCookies();
    // Navigate to page and validate login.
    homePage.navigateToPage();
    homePage.validateNavBar();
    loginPage = homePage.goToLoginPage();
    loginPage.validateFormIsVisible();

  });

  it("YS-5 - Validate the correct functioning of the login for a user when their data is correct", () => {
    accPage = loginPage.fillLoginForm(succesUserLogin);
   
    accPage.validateLoginSuccess();
    cy.task("reportTo", { testCaseId: "YS-5", status: "PASSED" });
  });

  it("YS-6 - Validate the functionality of the login process when the user's credentials are incorrect.", () => {
    loginPage.fillLoginForm(failureUserLogin);
    loginPage.validateFailureLogin();
    cy.task("reportTo", { testCaseId: "YS-6", status: "PASSED" });
  });

  it("YS-7 - Validate the functionality of the login process when the user's credentials are void", () => {
    failureUsers.forEach((user) =>{
      loginPage.fillLoginForm(user);
      loginPage.validateFailureLogin();
    });
    cy.task("reportTo", { testCaseId: "YS-7", status: "PASSED" });
  });

  it("YS-8 - Validate the functionality of the logout process when the user's credentials are correct", () => {
    accPage = loginPage.fillLoginForm(succesUserLogin);
    accPage.validateLoginSuccess();
    logoutPage = accPage.performLogout();
    logoutPage.validateSuccesLogout();
    homePage = logoutPage. finishLogout();
    homePage.validateURL();
    cy.task("reportTo", { testCaseId: "YS-8", status: "PASSED" });
  });

});

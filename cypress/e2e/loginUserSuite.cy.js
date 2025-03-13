import HomePage from "../pageObjects/home/HomePage";
import loginUser from "../fixtures/login/loginUser.json";

describe("Your Store Site: Login User Tests", () => {
  var homePage = new HomePage();

  it("YS-5 - Validate the correct functioning of the login for a user when their data is correct", () => {
    homePage.navigateToPage();
    homePage.validateNavBar();
    var loginPage = homePage.goToLoginPage();
    loginPage.validateFormIsVisible();
    var accPage = loginPage.fillLoginForm(loginUser);
    accPage.validateNavBar();
    accPage.validateLoginSuccess();
    cy.task("reportTo", { testCaseId: "YS-5", status: "PASSED" });
  });

});

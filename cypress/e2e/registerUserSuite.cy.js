import HomePage from "../pages/home/HomePage";
import existUser from "../fixtures/register/existUser.json";
import userWithoutPolitics from "../fixtures/register/existUserWithoutPolitics.json";
import listUsersWitoutParams from "../fixtures/register/usersWithoutParam.json";
import {generateNewUser} from "../support/utils";

const filePath = "cypress/data/generatedUsers.json";

describe("Your Store Site: Register User Tests", () => {

  var principalPage = new HomePage();
  var registerPage;
  // Can you implement hooks -> before, after (All suite)
  //                            beforeEach, afterEach (each test case)

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });

    principalPage.navigateToPage();
    registerPage = principalPage.goToRegisterPage();
    registerPage.validateFormIsVisible();

  });
  

  it("YS-1 - Validate new user have been created succesfuly", () => {
    const newUser = generateNewUser();
    cy.log(newUser);
    registerPage.fillRegisterForm(newUser);
    // Fails te page isn't going to success create user change http protocol !
    registerPage.validateMssgNewUser();
  });

  it("YS-2 - Validate error mssg when try to register an exist user", () => {
    registerPage.fillRegisterForm(existUser);
    registerPage.validateMssgUserExist();
    cy.task("reportTo", { testCaseId: "YS-2", status: "PASSED" });
  });

  it("YS-3 - Validate error message when try to register a user with one empty param", () => {
    listUsersWitoutParams.forEach((user) => {
      registerPage.fillRegisterForm(user);
      registerPage.validateMssgWithoutParam(user);
      cy.task("reportTo", { testCaseId: "YS-3", status: "PASSED" });
    });
  });

  it("YS-4 - Validate error message when try to register a user without privacity politics", () => {
    principalPage.navigateToPage();
    const registerPage = principalPage.goToRegisterPage();
    registerPage.fillRegisterForm(userWithoutPolitics);
    registerPage.validateMssgWithoutPrivacity();
    cy.task("reportTo", { testCaseId: "YS-4", status: "PASSED" });
  });

});

import HomePage from "../pageObjects/home/HomePage";
import existUser from "../fixtures/register/existUser.json";
import userWithoutPolitics from "../fixtures/register/existUserWithoutPolitics.json";
import listUsersWitoutParams from "../fixtures/register/usersWithoutParam.json";
import {generateNewUser} from "../support/utils";

const filePath = "cypress/data/generatedUsers.json";

describe("Your Store Site: Register User Tests", () => {
  const principalPage = new HomePage();

  it("YS-1 - Validate new user have been created succesfuly", () => {
    principalPage.navigateToPage();
    const registerPage = principalPage.goToRegisterPage();
    const newUser = generateNewUser();
    cy.log(newUser);
    registerPage.fillRegisterForm(newUser);
    // Fails te page isn't going to success create user
    registerPage.validateMssg(newUser.expectedText);
  });


  it("YS-2 - Validate error mssg when try to register an exist user", () => {
    principalPage.navigateToPage();
    const registerPage = principalPage.goToRegisterPage();
    registerPage.fillRegisterForm(existUser);
    registerPage.validateMssg(existUser.expectedText);
    cy.task("reportTo", { testCaseId: "YS-2", status: "PASSED" });
  });

  it("YS-3 - Validate error message when try to register a user with one empty param", () => {
    listUsersWitoutParams.forEach((user) => {
      principalPage.navigateToPage();
      const registerPage = principalPage.goToRegisterPage();
      registerPage.fillRegisterForm(user);
      registerPage.validateMssg(user.expectedText);
      cy.task("reportTo", { testCaseId: "YS-3", status: "PASSED" });
    });
  });

  it("YS-4 - Validate error message when try to register a user without privacy politics", () => {
    principalPage.navigateToPage();
    const registerPage = principalPage.goToRegisterPage();
    registerPage.fillRegisterForm(userWithoutPolitics);
    registerPage.validateMssg(userWithoutPolitics.expectedText);
    cy.task("reportTo", { testCaseId: "YS-4", status: "PASSED" });
  });

});

import HomePage from "../pageObjects/HomePage";
import existUser from "../fixtures/register/existUser.json";
import userWithoutPolitics from "../fixtures/register/existUserWithoutPolitics.json";
import listUsersWitoutParams from "../fixtures/register/usersWithoutParam.json";
import {generateNewUser} from "../support/utils";

const filePath = "cypress/data/generatedUsers.json";

describe("Your Store Site: Register User Tests", () => {
  const principalPage = new HomePage();

  it("Validate new user have been created succesfuly", () => {
    principalPage.navigateToPage();
    const registerPage = principalPage.goToRegisterPage();
    const newUser = generateNewUser();
    cy.log(newUser);
    registerPage.fillRegisterForm(newUser);
    registerPage.validateMssg(newUser.expectedText);
  });

  it("Validate error mssg when try to register an exist user", () => {
    principalPage.navigateToPage();
    const registerPage = principalPage.goToRegisterPage();
    registerPage.fillRegisterForm(existUser);
    registerPage.validateMssg(existUser.expectedText);
  });

  it("Validate error message when try to register a user with one empty param", () => {
    listUsersWitoutParams.forEach((user) => {
      principalPage.navigateToPage();
      const registerPage = principalPage.goToRegisterPage();
      registerPage.fillRegisterForm(user);
      registerPage.validateMssg(user.expectedText);
    });
  });

  it("Validate error message when try to register a user without privacy politics", () => {
    principalPage.navigateToPage();
    const registerPage = principalPage.goToRegisterPage();
    registerPage.fillRegisterForm(userWithoutPolitics);
    registerPage.validateMssg(userWithoutPolitics.expectedText);
  });

});

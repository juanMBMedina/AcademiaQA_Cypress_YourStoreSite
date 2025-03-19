import { faker } from "@faker-js/faker";

export function writeText(text, inputText) {
  if (!text) {
    inputText.clear();
  } else {
    inputText.clear().type(text);
  }
}

export function generateNewUser() {
  var user = {
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    telephone: faker.string.numeric(10),
    password: faker.internet.password(),
    suscribe: true,
    privacity: true,
  };
  return user;
}

export function getEmptyFields(objeto) {
  return Object.keys(objeto)
    .filter((key) => typeof objeto[key] === "string" && objeto[key] === "")
    .map((key) => key.toUpperCase());
}

export function cleanCookies() {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
}

export async function getTextOf(cyElement) {
  return await cyElement.invoke("text").then((text) => text.trim());
}

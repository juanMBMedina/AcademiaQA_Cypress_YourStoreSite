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
    suscribe: faker.datatype.boolean(),
    privacy: true,
    expectedText:
      "Congratulations! Your new account has been successfully created!",
  };
  return user;
}


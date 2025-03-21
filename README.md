# Automated Testing Plan with Cypress

This repository contains the implementation of an automated testing plan developed using Cypress. The project was created as part of the automation course offered by Academia QA.

## Project Overview

The main objective of this project is to demonstrate the implementation of a comprehensive automated testing strategy for a sample web application. The repository includes:

- Test cases automated using Cypress.
- A detailed testing plan.
- Scripts and resources for running the tests.
- Test reports generated during the automation process.

## File Structure
```
AcademiaQA_Cypress_YourStoreSite/
├── LICENSE
├── README.md
├── cypress
│   ├── downloads
│   ├── e2e
│   │   ├── AddingToCartSuite.cy.js
│   │   ├── loginUserSuite.cy.js
│   │   └── registerUserSuite.cy.js
│   ├── fixtures
│   ├── pages
│   ├── reports
│   ├── support
│   └── videos
├── cypress.config.js
├── package-lock.json
├── package.json
└── test_plan
```

## Prerequisites

Before running the tests, ensure you have the following dependencies installed:

- Cypress: ^14.1.0
- Cypress XPath: ^2.0.1
- Faker.js: ^9.6.0
- mochawesome: ^7.1.3
- mochawesome-merge: ^5.0.0
- mochawesome-report-generator: ^6.2.0
- sonarqube-scanner: "^3.5.0"

### Installing Cypress

To install all dependencies, run:

```bash
npm install
```

If Cypress is not installed globally, you can install it with:

```bash
npm install cypress --save-dev
```

## Getting Started

Clone this repository:
```bash
# HTTPS
git clone https://github.com/juanMBMedina/AcademiaQA_Cypress_YourStoreSite.git

# SSH
git clone git@github.com:juanMBMedina/AcademiaQA_Cypress_YourStoreSite.git
```

Navigate to the project directory:

```bash
cd AcademiaQA_Cypress_YourStoreSite
```

Install the dependencies:

```bash
npm install
```

## Running Tests

To execute all test suites, run:

```bash
npx cypress run
```

To execute a specific test suite (e.g., `registerUserSuite.cy.js`), use:

```bash
npx cypress run --spec "cypress/e2e/registerUserSuite.cy.js" --browser edge
```

To open Cypress in interactive mode:

```bash
npx cypress open
```

## Available Scripts

This project includes the following scripts for ease of use:

| Script | Description |
|---------|-------------|
| `npm run clean-cache` | Clears Cypress cache without uninstalling Cypress |
| `npm run clean-file` | Removes old screenshots, videos, and reports |
| `npm run gui-testing` | Opens Cypress in GUI mode |
| `npm run run:suite` | Runs a specific test suite using environment variables `SUITE` and `BROWSER` |

To run a specific test suite, use:

```bash
SUITE=loginUserSuite BROWSER=chrome npm run run:suite
```

## Test Plan

The test plan provides detailed information about the testing strategy, scope, and objectives. You can view the plan by downloading the following file from the `test_plan` folder:

- **Test Plan.xlsx**

## Contributions

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request.

## License

This project is licensed under the GNU General Public License v3.0. See the LICENSE file for details.

## Contact

For questions or feedback, please contact:

- **Name:** Juan Miguel Blanco Medina
- **Email:** juanmblancom@gmail.com
- **GitHub:** [https://github.com/juanMBMedina](https://github.com/juanMBMedina)

---

Thank you for checking out this project!

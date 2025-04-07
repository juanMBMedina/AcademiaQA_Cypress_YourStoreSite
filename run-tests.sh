#!/bin/bash

SUITE=$1
BROWSER=$2

echo "🔧 Running Cypress tests for suite: $SUITE on browser: $BROWSER"
TIMESTAMP=$(date +%d%m%Y_%H%M%S)

if [ "$SUITE" = "all" ]; then
  REPORT_DIR="cypress/reports/allTests-$TIMESTAMP"
  mkdir -p "$REPORT_DIR"
  npx cypress run \
    --browser "$BROWSER" \
    --reporter mochawesome \
    --reporter-options "reportDir=$REPORT_DIR,overwrite=true,html=true,json=true"
else
  REPORT_DIR="cypress/reports/${SUITE}-$TIMESTAMP"
  mkdir -p "$REPORT_DIR"
  npx cypress run \
    --spec "cypress/e2e/${SUITE}.cy.js" \
    --browser "$BROWSER" \
    --reporter mochawesome \
    --reporter-options "reportDir=$REPORT_DIR,overwrite=true,html=true,json=true"
fi

echo "$REPORT_DIR" > last_report_dir.txt
echo "$TIMESTAMP" > last_run_timestamp.txt

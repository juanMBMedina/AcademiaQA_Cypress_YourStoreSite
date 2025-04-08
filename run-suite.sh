#!/bin/bash

SUITE=$1
BROWSER=$2

if [ -z "$SUITE" ] || [ -z "$BROWSER" ]; then
  echo "Uso: ./run-suite.sh <SUITE> <BROWSER>"
  exit 1
fi

TIMESTAMP=$(date +"%d%m%Y_%H%M%S")
SUITE_DIR="./cypress/reports/${SUITE}-${TIMESTAMP}"

mkdir -p "$SUITE_DIR"

npx cypress run \
  --spec "cypress/e2e/${SUITE}.cy.js" \
  --browser "$BROWSER" \
  --reporter mochawesome \
  --reporter-options "reportDir=$SUITE_DIR,overwrite=true,html=true,json=true"

echo "${SUITE}-${TIMESTAMP}" > lastReportFolder.txt

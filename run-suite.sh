#!/bin/bash

SUITE=$1
BROWSER=$2

if [ -z "$SUITE" ] || [ -z "$BROWSER" ]; then
  echo "Uso: ./run-suite.sh <SUITE> <BROWSER>"
  exit 1
fi

if [ "$SUITE" == "AllSuites" ]; then
  npx cypress run \
    --browser "$BROWSER"
else
  npx cypress run \
    --spec "cypress/e2e/${SUITE}.cy.js" \
    --browser "$BROWSER"
fi

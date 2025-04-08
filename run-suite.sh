#!/bin/bash

SUITE=$1
BROWSER=$2

if [ -z "$SUITE" ] || [ -z "$BROWSER" ]; then
  echo "Uso: ./run-suite.sh <SUITE> <BROWSER>"
  exit 1
fi

mkdir -p "$SUITE_DIR"

npx cypress run \
  --spec "cypress/e2e/${SUITE}.cy.js" \
  --browser "$BROWSER" \

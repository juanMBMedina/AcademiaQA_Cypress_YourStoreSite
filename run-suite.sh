#!/bin/bash

SUITE=$1
BROWSER=$2

if [ -z "$SUITE" ] || [ -z "$BROWSER" ]; then
  echo "Use: ./run-suite.sh <SUITE> <BROWSER>"
  exit 1
fi

SPECS=$(jq -r --arg suite "$SUITE" '.[$suite] | join(",")' suites.json)

if [ "$SPECS" == "null" ]; then
  echo "Suite '$SUITE' didn't found in suites.json"
  exit 1
fi

if [ -z "$SPECS" ]; then
  npx cypress run \
    --browser "$BROWSER"
else
  npx cypress run \
    --spec "$SPECS" \
    --browser "$BROWSER"
fi


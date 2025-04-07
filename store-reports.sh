#!/bin/bash

PROJECT_NAME=$1
REPORTS_BASE_PATH=$2  # Este viene del pipeline

REPORT_DIR=$(cat last_report_dir.txt)
TIMESTAMP=$(cat last_run_timestamp.txt)

FINAL_REPORTS_DIR="${REPORTS_BASE_PATH}/${PROJECT_NAME}/${TIMESTAMP}"

mkdir -p "$FINAL_REPORTS_DIR"
cp -r "$REPORT_DIR"/* "$FINAL_REPORTS_DIR"

echo "📁 Reports moved to $FINAL_REPORTS_DIR"

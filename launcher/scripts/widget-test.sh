#!/usr/bin/env bash

set -euo pipefail

WIDGET="${1:-}"

if [ -z "$WIDGET" ]; then
  echo "Usage:"
  echo "  mise run widget-test -- <widget>"
  exit 1
fi

ROOT="$(git rev-parse --show-toplevel)"

cd "$ROOT/widgets/$WIDGET"

npm run dev &
DEV_PID=$!

cleanup() {
  kill "$DEV_PID" 2>/dev/null || true
}

trap cleanup EXIT INT TERM

cd "$ROOT"

PWDEBUG=1 ./node_modules/.bin/playwright \
    test \
    --config=tests/playwright.dev.config.ts \
    "widgets/$WIDGET/tests"
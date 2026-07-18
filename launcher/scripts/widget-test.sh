#!/usr/bin/env bash

set -euo pipefail

WIDGET="${1:-}"

if [ -z "$WIDGET" ]; then
  echo "Usage:"
  echo "  mise run widget-test -- <widget> [debug]"
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


PWDEBUG=0

if [[ "${2:-}" == "debug" ]]; then
    PWDEBUG=1
fi

PWDEBUG=$PWDEBUG ./node_modules/.bin/playwright \
    test \
    --config=tests/playwright.dev.config.ts \
    "widgets/$WIDGET/tests"

#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

if [[ "${1:-}" == "debug" ]]; then
    export PWDEBUG=1
fi

export TARGET_SITEURL

echo "🚀 Building test orchestrator"

(
    cd "$ROOT/deployment-orchestrator"
    npm run test
)

echo "✅ Tests ran successfully"
#!/usr/bin/env bash

set -euo pipefail

WIDGET="${1:-}"

install_project() {
    local dir="$1"

    if [[ -f "$dir/package.json" ]]; then
        echo
        echo "📦 Installing $(basename "$dir")"

        (
            cd "$dir"
            npm install
        )
    fi
}

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

# Deployment Orchestrator platform
install_project "$ROOT/deployment-orchestrator"

# Root platform
install_project "$ROOT"

# Runtime Orchestrator
install_project "$ROOT/services/runtime/vite_project"

# Widgets
if [[ -n "$WIDGET" ]]; then
    WIDGET_DIR="$ROOT/widgets/$WIDGET"

    if [[ ! -d "$WIDGET_DIR" ]]; then
        echo "❌ Widget not found: $WIDGET" >&2
        echo "Available widgets:" >&2

        for dir in "$ROOT"/widgets/*; do
            [[ -d "$dir" ]] && echo "  - $(basename "$dir")" >&2
        done

        exit 1
    fi

    install_project "$WIDGET_DIR"
else
    for dir in "$ROOT"/widgets/*; do
        [[ -d "$dir" ]] && install_project "$dir"
    done
fi

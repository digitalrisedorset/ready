#!/usr/bin/env bash

set -euo pipefail

update_project() {
    local dir="$1"

    if [[ -f "$dir/package.json" ]]; then
        echo
        echo "📦 Updating $(basename "$dir")"

        (
            cd "$dir"
            npm update
        )
    fi
}

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

# Widgets
for dir in "$ROOT"/widgets/*; do
    [[ -d "$dir" ]] && update_project "$dir"
done

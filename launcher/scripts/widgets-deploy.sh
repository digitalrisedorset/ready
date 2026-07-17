#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

echo "🚀 Building deployment orchestrator"

(
    cd "$ROOT/deployment-orchestrator"
    npm run build
)

source .env

REACTEDGE_WORKSPACE="$(dirname "$TARGET_ROOT")/reactedge"

mkdir -p "$REACTEDGE_WORKSPACE"

rsync -av --delete \
    ./workspace/ \
    "$REACTEDGE_WORKSPACE/"

echo "files copied to $REACTEDGE_WORKSPACE"
echo "✅ Deployment orchestrator built successfully"

if [[ "${DOCKER_USED:-1}" == "1" ]]; then
    docker exec mageos_php \
        bin/magento config:set reactedge/google_maps/api_key "$GOOGLE_MAPS_API_KEY"

    docker exec mageos_php \
        bin/magento config:set reactedge/google_maps/place_id "$GOOGLE_PLACE_ID"

    docker exec mageos_php \
        bin/magento config:set reactedge/widgets_ssr/enabled 1

    ALL_WIDGETS=(
        banner
        usp
        productgallery
        storefinder
        megamenu
    )

    for widget in "${ALL_WIDGETS[@]}"; do
        docker exec mageos_php \
            bin/magento config:set "reactedge/${widget}/enabled" 1
    done

    docker exec mageos_php bin/magento cache:flush
fi
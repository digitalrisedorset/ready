import {Widget} from "../Widget.tsx";
import {loadContract} from "../lib/contract-resolver.ts";

async function main() {
    const config = await loadContract("default.json");
    const container = document.getElementById("root")!;

    const mode = __REACTEDGE_MODE__;

    if (mode === "hydrate") {
        console.debug("Hydrating existing HTML");
        console.debug(container.innerHTML);
    } else {
        console.debug("Rendering from scratch");
    }

    if (mode === "hydrate") {
        Widget({
            container,
            contract: config,
            hydrate: true
        });
    } else {
        Widget({
            container,
            contract: config,
            hydrate: false
        });
    }
}

main();
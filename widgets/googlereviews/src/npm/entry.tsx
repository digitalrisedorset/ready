import {Widget} from "../Widget.tsx";
import {loadContract} from "../lib/contract-resolver.ts";
import {loadRuntime} from "../lib/load-runtime.ts";

async function main() {
    const runtime = await loadRuntime();
    const contract = await loadContract<unknown>("default.json");
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
            contract,
            runtime,
            hydrate: true
        });
    } else {
        Widget({
            container,
            contract,
            runtime,
            hydrate: false
        });
    }
}

main();
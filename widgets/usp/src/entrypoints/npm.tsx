import {Widget} from "../Widget.tsx";
import { ResourceLoader } from "@reactedge/framework/contract";

async function main() {
    const loader = new ResourceLoader();
    const contract = await loader.loadContract("default.json");
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
            hydrate: true
        });
    } else {
        Widget({
            container,
            contract,
            hydrate: false
        });
    }
}

main();
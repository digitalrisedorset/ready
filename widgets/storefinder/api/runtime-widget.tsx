import { WIDGET_ID } from "../src/Config.ts";

import type { WidgetApi } from "@reactedge/public-api/widget";
import type {ReactEdgeRuntimeConfig} from "@reactedge/public-api/runtime.ts";

import {ShadowHostProvider} from "@reactedge/framework/host.ts";
import {storeFinderStyles} from "../src/styles/store-finder.styles.ts";
import {createRoot} from "react-dom/client";
import {WidgetRoot} from "../src/bootstrap/widget-root.tsx";


const mount = (
    el: HTMLElement,
    contract: unknown,
    runtime: ReactEdgeRuntimeConfig
) => {
    const hostProvider = new ShadowHostProvider(storeFinderStyles)

    createRoot(hostProvider.getMountedHost(el)).render(
        <WidgetRoot
            hostElement={el}
            contract={contract}
            runtime={runtime}
        />
    )
};

const api: WidgetApi = {
    mount,
};

if (typeof window !== "undefined") {
    window[`ReactEdge_${WIDGET_ID}`] = api;
}

export { mount };
import { WIDGET_ID } from "../src/Config.ts";

import type { WidgetApi } from "@reactedge/public-api/widget";
import type {ReactEdgeRuntimeConfig} from "@reactedge/public-api/runtime.ts";

import {bootstrap} from "../src/bootstrap/bootstrap.tsx";
import {ShadowHostProvider} from "@reactedge/framework/host.ts";
import {storeFinderStyles} from "../src/styles/store-finder.styles.ts";


const mount = (
    el: HTMLElement,
    contract: unknown,
    runtime: ReactEdgeRuntimeConfig
) => {
    bootstrap(el, contract, runtime, new ShadowHostProvider(storeFinderStyles));
};

const api: WidgetApi = {
    mount,
};

if (typeof window !== "undefined") {
    (window as any)[`ReactEdge_${WIDGET_ID}`] = api;
}

export { mount };
import type { WidgetApi } from "@reactedge/public-api/widget";
import type {ReactEdgeRuntimeConfig} from "@reactedge/public-api/runtime.ts";

import "../styles/widget.css";
import {bootstrap} from "../bootstrap/bootstrap.tsx";
import {WIDGET_ID} from "../Config.ts";


const mount = (
    el: HTMLElement,
    contract: unknown,
    _runtime: ReactEdgeRuntimeConfig
) => {
    bootstrap(el, contract);
};

const api: WidgetApi = {
    mount,
};

if (typeof window !== "undefined") {
    (window as any)[`ReactEdge_${WIDGET_ID}`] = api;
}

export { mount };
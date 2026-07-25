import type { WidgetApi } from "@reactedge/public-api/widget";

import "../src/styles/widget.css";
import {bootstrap} from "../src/bootstrap/bootstrap.tsx";
import {WIDGET_ID} from "../src/Config.ts";


const mount = (
    el: HTMLElement,
    contract: unknown
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
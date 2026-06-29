import {injectStyles} from "./style.ts";
import {storeFinderStyles} from "../styles/store-finder.styles.ts";
import {WIDGET_ID} from "../Config.ts";
export function getMountedHost(hostElement: HTMLElement) {
    const shadow =
        hostElement.shadowRoot || hostElement.attachShadow({ mode: "open" });

    for (const css of storeFinderStyles) {
        injectStyles(shadow, css);
    }

    return shadow
}
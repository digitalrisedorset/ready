import {sellerFinderStyles} from "../styles/seller-finder.styles.ts";
import {injectStyles} from "./style.ts";

export function getMountedHost(hostElement: HTMLElement) {
    const shadow =
        hostElement.shadowRoot || hostElement.attachShadow({ mode: "open" });

    for (const css of sellerFinderStyles) {
        injectStyles(shadow, css);
    }

    return shadow
}
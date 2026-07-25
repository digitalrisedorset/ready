import {WIDGET_ID} from "../../../../widgets/banner/src/Config";

export interface HostProvider {
    getMountedHost(hostElement: HTMLElement): HTMLElement | ShadowRoot;
}

export class ElementHostProvider implements HostProvider {
    getMountedHost(hostElement: HTMLElement): HTMLElement {
        hostElement.classList.add(`reactedge-${WIDGET_ID}`);
        return hostElement;
    }
}

export class ShadowHostProvider implements HostProvider {
    constructor(
        private readonly styles?: string[]
    ) {}

    getMountedHost(hostElement: HTMLElement): ShadowRoot {
        const shadow =
            hostElement.shadowRoot ??
            hostElement.attachShadow({ mode: "open" });

        if (Array.isArray(this.styles)) {
            for (const css of this.styles) {
                this.injectStyle(shadow, css);
            }
        }

        return shadow;
    }

    private injectStyle(
        shadow: ShadowRoot,
        css: string
    ): void {
        const style = document.createElement("style");
        style.textContent = css;
        shadow.appendChild(style);
    }
}
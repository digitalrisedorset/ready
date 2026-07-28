export interface HostProvider {
    getMountedHost(hostElement: HTMLElement): HTMLElement | ShadowRoot;
}

export class ElementHostProvider implements HostProvider {
    private widgetId: string

    constructor(widgetId: string) {
        this.widgetId = widgetId;
    }
    getMountedHost(hostElement: HTMLElement): HTMLElement {
        hostElement.classList.add(`reactedge-${this.widgetId}`);
        return hostElement;
    }
}

export class ShadowHostProvider implements HostProvider {
    private readonly styles?: string[] | undefined;

    constructor(styles?: string[]) {
        this.styles = styles;
    }

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
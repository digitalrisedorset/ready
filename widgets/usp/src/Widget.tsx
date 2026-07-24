import {WidgetRoot} from "./bootstrap/widget-root.tsx";
import {createRoot, hydrateRoot} from "react-dom/client";

export interface WidgetOptions {
    container: HTMLElement;
    rawConfig: unknown;
    hydrate?: boolean;
}

export function Widget({
       container,
       rawConfig,
       hydrate = false,
   }: WidgetOptions) {
    const element = (
        <WidgetRoot rawConfig={rawConfig} />
    );

    if (hydrate) {
        hydrateRoot(container, element);
    } else {
        createRoot(container).render(element);
    }
}
import {WidgetRoot} from "./bootstrap/widget-root.tsx";
import {createRoot, hydrateRoot} from "react-dom/client";

export interface WidgetOptions {
    container: HTMLElement;
    contract: unknown;
    hydrate?: boolean;
}

export function Widget({
       container,
       contract,
       hydrate = false,
   }: WidgetOptions) {
    const element = (
        <WidgetRoot contract={contract} />
    );

    if (hydrate) {
        hydrateRoot(container, element);
    } else {
        createRoot(container).render(element);
    }
}
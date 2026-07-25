import {WidgetRoot} from "./bootstrap/widget-root.tsx";
import {createRoot, hydrateRoot} from "react-dom/client";

export interface WidgetOptions {
    container: HTMLElement;
    contract: unknown;
    runtime: unknown;
    hydrate?: boolean;
}

export function Widget({
   container,
   contract,
   runtime,
   hydrate = false,
}: WidgetOptions) {
    const element = (
        <WidgetRoot contract={contract} runtime={runtime} />
    );

    if (hydrate) {
        hydrateRoot(container, element);
    } else {
        createRoot(container).render(element);
    }
}
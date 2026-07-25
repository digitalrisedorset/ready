import {createRoot} from "react-dom/client";
import {WidgetRoot} from "./widget-root.tsx";
import {getMountedHost} from "../lib/hostReader.ts";

export function bootstrap(
    hostElement: HTMLElement,
    contract: unknown
) {
    const mountedHost = getMountedHost(hostElement);

    createRoot(mountedHost).render(
        <WidgetRoot
            hostElement={hostElement}
            contract={contract}
        />
    );
}
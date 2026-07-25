import {getMountedHost} from "../lib/hostReader.ts";
import {createRoot} from "react-dom/client";
import {WidgetRoot} from "./widget-root.tsx";

export function bootstrap(
    hostElement: HTMLElement,
    contract: unknown,
    runtime: unknown
) {
    const mountedHost = getMountedHost(hostElement);

    createRoot(mountedHost).render(
        <WidgetRoot
            hostElement={hostElement}
            contract={contract}
            runtime={runtime}
        />
    );
}
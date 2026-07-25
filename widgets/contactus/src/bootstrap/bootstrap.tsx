import {createRoot} from "react-dom/client";
import {WidgetRoot} from "./widget-root.tsx";
import {type HostProvider} from "@reactedge/framework/host.ts";

export function bootstrap(
    hostElement: HTMLElement,
    contract: unknown,
    runtime: unknown,
    hostProvider: HostProvider
) {
    createRoot(hostProvider.getMountedHost(hostElement)).render(
        <WidgetRoot
            hostElement={hostElement}
            contract={contract}
            runtime={runtime}
        />
    );
}
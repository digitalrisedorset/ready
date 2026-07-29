import {HostProvider} from "@reactedge/framework/host";

export interface BootstrapOptions {
    hostElement: HTMLElement;
    contract: unknown;
    runtime?: unknown;
    hostProvider: HostProvider;
}

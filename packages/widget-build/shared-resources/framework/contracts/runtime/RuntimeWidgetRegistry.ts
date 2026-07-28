import type {WidgetManifest} from "@reactedge/framework/contracts/runtime/WidgetManifest";

export interface RuntimeWidgetRegistryEntry {
    src: string;
    integrity?: string;
    contract: unknown;
}

export type RuntimeWidgetRegistry =
    Record<string, WidgetManifest>;
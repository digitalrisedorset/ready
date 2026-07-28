import type {WidgetRegistryEntry} from "@reactedge/framework/contracts/buiild/WidgetRegistryEntry";

/**
 * Shared interfaces and domain types used by the build pipeline.
 */
export interface WidgetImageOptimisationConfig {
    scanFormats: string[];
    outputFormat: string;
    quality: number;
}


export type BuildWidgetRegistry =
    Record<string, WidgetRegistryEntry>;
import type {SsrStrategy} from "../../../../../../deployment-orchestrator/scripts/build/rebuild-registry/schema";

export interface WidgetSsrConfig {
    strategy: SsrStrategy;
    variants?: SsrVariant[];
}

export type SsrVariant =
    | 'desktop'
    | 'mobile'
    | 'tablet';

export type SsrViewMap =
    Partial<Record<SsrVariant, string>>;
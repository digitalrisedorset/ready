export interface WidgetOptions {
    container: HTMLElement;
    contract: unknown;
    runtime?: unknown;
    hydrate?: boolean;
}

export function Widget(options: WidgetOptions): void
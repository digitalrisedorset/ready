import type {Currency} from "../lib/currency.ts";

export interface CartItemImage {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export interface ProductOption {
    label: string;
    value: string;
}

export interface MinicartItem {
    item_id: number;
    sku: string;
    name: string;
    qty: number;
    price: number;
    thumbnail: CartItemImage;
    options?: ProductOption[];
}

export interface MinicartData {
    summary_count: number;
    items: MinicartItem[];
}

export type Translations = {
    [key: string]: string;
};

/* -------------------- */
/* Resolved Config      */
/* -------------------- */
export interface MinicartRuntimeConfig {
    readonly currency: string;
    readonly locale: string;
}

export interface MinicartDataConfig {
    readonly summary_count: number;
    readonly items: MinicartItem[] | undefined;
}

export interface MinicartTranslationsConfig {
    readonly [key: string]: string;
}

export interface MinicartSettingsConfig {
    readonly primaryColor?: string;
    readonly secondaryColour?: string;
}

export interface WidgetConfig {
    data?: MinicartData,
    currency: Currency;
    locale: string;
    primaryColor: string;
    secondaryColour: string;
}
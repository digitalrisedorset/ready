import { z } from 'zod';

const ThumbnailSchema = z.object({
    src: z.string().url(),
    alt: z.string(),
    width: z.number().int().positive(),
    height: z.number().int().positive(),
}).strict();

const OptionSchema = z.object({
    label: z.string(),
    value: z.string(),
}).strict();

const CartItemSchema = z.object({
    item_id: z.number().int().positive(),
    sku: z.string(),
    name: z.string(),
    qty: z.number().positive(),
    price: z.number(),
    thumbnail: ThumbnailSchema,
    options: z.array(OptionSchema).default([]),
}).strict();

export const WidgetConfigSchema = z.object({
    runtime: z.object({
        currency: z.string(),
        locale: z.string(),
    }).strict(),

    data: z.object({
        summary_count: z.number().int().nonnegative(),
        items: z.array(CartItemSchema),
    }).strict(),

    translations: z.record(z.string(), z.string()),

    settings: z.object({
        primaryColor: z.string(),
        secondaryColour: z.string(),
    }).strict(),
}).strict();

export type SchemaWidgetConfig =
    z.infer<typeof WidgetConfigSchema>;

export function parseConfig(
    input: unknown
): SchemaWidgetConfig {
    return WidgetConfigSchema.parse(input);
}
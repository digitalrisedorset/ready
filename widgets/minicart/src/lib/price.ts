export function formatPrice(value: number | string, currency: string, locale: string): string {
    const n = typeof value === "number" ? value : Number(value);
    if (Number.isNaN(n)) return "";

    // Fix common mistakes like GPB → GBP
    const safeCurrency = currency === "GPB" ? "GBP" : currency;

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: safeCurrency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(n);
}
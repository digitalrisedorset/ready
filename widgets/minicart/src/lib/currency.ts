export type Currency = string & {
    readonly __brand: "Currency";
};

export function normalizeCurrency(
    value: unknown
): Currency {
    if (typeof value !== "string") {
        throw new Error("Currency must be a string.");
    }

    const currency = value.trim().toUpperCase();

    if (!/^[A-Z]{3}$/.test(currency)) {
        throw new Error(
            `Invalid ISO 4217 currency '${value}'.`
        );
    }

    return currency as Currency;
}
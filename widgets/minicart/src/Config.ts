import type {WidgetActivity} from "@reactedge/framework/activity";
import {parseConfig} from "./ConfigSchema.ts";
import type {WidgetConfig} from "./components/Types.ts";
import {normalizeCurrency} from "./lib/currency.ts";

export const WIDGET_ID = 'minicart'

/**
 * Validates the widget contract and returns an immutable configuration.
 *
 * The contract is treated as untrusted input and is validated before
 * being exposed to the React application.
 *
 * This function represents the trust boundary between the ReactEdge
 * runtime and the widget implementation for widgets that do not require
 * runtime integrations.
 *
 * @param contract - Widget contract supplied by the host platform.
 * @param activity - Optional activity logger used during bootstrap.
 * @returns An immutable widget configuration.
 * @throws When the widget contract is invalid.
 */
export function readWidgetConfig(
    contract: unknown,
    activity?: WidgetActivity
): WidgetConfig {
    try {
        const parsedContract = parseConfig(contract);

        const resolved = {
            data: parsedContract.data,
            currency: normalizeCurrency(parsedContract.runtime.currency),
            locale: parsedContract.runtime.locale,
            primaryColor: parsedContract.settings?.primaryColor,
            secondaryColour: parsedContract.settings?.secondaryColour,
            isReady: parsedContract.settings?.primaryColor !== ''
        };

        activity?.log(
            'bootstrap',
            'Config resolved',
            resolved
        );

        return Object.freeze(resolved);

    } catch (e) {
        activity?.log(
            'bootstrap',
            'Invalid widget contract',
            e instanceof Error? e.message: e,
            'error'
        );

        throw e;
    }
}
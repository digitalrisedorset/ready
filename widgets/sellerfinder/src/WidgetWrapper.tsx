import { readWidgetConfig } from "./Config.ts";
import { useActivityContext } from "./activity/Context/useActivityContext.ts";
import {TranslationStateProvider} from "./state/Translation/TranslationStateProvider.tsx";
import {SellerFinder} from "./components/SsellerListing.tsx";

type Props = {
    rawConfig: unknown;
    runtime: unknown
};

export const WidgetWrapper = ({ rawConfig, runtime }: Props) => {
    const activity = useActivityContext();
    const config = readWidgetConfig(rawConfig, runtime, activity);

    return <TranslationStateProvider translations={config.translations}>
        <SellerFinder config={config} />
    </TranslationStateProvider>
};

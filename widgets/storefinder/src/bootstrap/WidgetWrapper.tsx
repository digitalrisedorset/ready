import {useActivityContext} from "../activity/Context/useActivityContext.ts";
import {readWidgetConfig} from "../Config.ts";
import {TranslationStateProvider} from "../state/Translation/TranslationStateProvider.tsx";
import {StoreFinder} from "../components/StoreListing.tsx";

type Props = {
    contract: unknown;
    runtime: unknown
};

export const WidgetWrapper = ({ contract, runtime }: Props) => {
    const activity = useActivityContext();
    const config = readWidgetConfig(contract, runtime, activity);

    return <TranslationStateProvider translations={config.translations}>
        <StoreFinder config={config} />
    </TranslationStateProvider>
};

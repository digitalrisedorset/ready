import { readWidgetConfig, type RuntimeConfig } from "../Config.ts";
import { SellerFinderWidget } from "../components/SellerFinderWidget.tsx";

type Props = {
    rawConfig: unknown;
    runtimeConfig: RuntimeConfig;
};

export const WidgetView = ({ rawConfig, runtimeConfig: _runtimeConfig }: Props) => {
    const config = readWidgetConfig(rawConfig);

    return <SellerFinderWidget config={config} />;
};

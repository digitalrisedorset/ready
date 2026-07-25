import type {RuntimeConfig} from "./lib/load-runtime.ts";
import {readWidgetConfig} from "./Config.ts";
import {SellerFinder} from "./components/SsellerListing.tsx";

type Props = {
    contract: unknown;
    runtime: RuntimeConfig;
};

export const WidgetView = ({ contract, runtime }: Props) => {
    const config = readWidgetConfig(contract, runtime);

    return <SellerFinder config={config} />;
};

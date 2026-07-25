import {readWidgetConfig} from "../Config.ts";
import {BannerStatic} from "../components/BannerStatic.tsx";
import {Spinner} from "../components/Spinner.tsx";

type Props = {
    contract: unknown;
};

export const WidgetView = ({ contract }: Props) => {
    const config = readWidgetConfig(contract);

    if (!config) return null;

    if (config.slides.length === 0) return <Spinner />;

    return <BannerStatic slides={config.slides} config={config.settings} />;
};


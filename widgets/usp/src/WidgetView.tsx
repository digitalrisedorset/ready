import {readWidgetConfig, type RuntimeConfig} from "./Config.ts";
import {Spinner} from "./components/Spinner.tsx";
import {UspMobileWidget} from "./components/UspMobileWidget.tsx";
import {UspWidget} from "./components/UspWidget.tsx";

type Props = {
    contract: unknown;
    runtime: RuntimeConfig
};

export const WidgetView = ({ contract, runtime }: Props) => {
    const config = readWidgetConfig(contract);

    if (!config) return null;

    if (config.data.slides.length === 0) return <Spinner />;

    if (runtime.rendering.userAgent === 'mobile') {
        return <UspMobileWidget config={config} slides={config.data.slides} />
    }

    return <UspWidget config={config}  />
};


import {readWidgetConfig} from "./Config.ts";
import {MegamenuContent} from "./components/MobileMegamenu/MenuContent.tsx";

type Props = {
    contract: unknown;
};

export const WidgetView = ({ contract }: Props) => {
    const config = readWidgetConfig(contract);

    if (!config) return null;

    return <MegamenuContent items={config?.data.items} theme={config.settings?.theme} />
};


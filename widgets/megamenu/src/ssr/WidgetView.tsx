import { MegamenuContent } from "../components/MegamenuContent.tsx";
import {readWidgetConfig} from "../Config.ts";

type Props = {
    rawConfig: unknown;
};

export const WidgetView = ({ rawConfig }: Props) => {
    const config = readWidgetConfig(rawConfig);

    if (!config) return null;

    return <MegamenuContent items={config?.data.items} theme={config.settings?.theme} />
};


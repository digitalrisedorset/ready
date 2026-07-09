import {readWidgetConfig} from "./Config.ts";
import {useActivityContext} from "./activity/Context/useActivityContext.ts";
import {MinicartWidget} from "./components/MinicartWidget.tsx";

type Props = {
    rawConfig: unknown;
};

export const WidgetWrapper = ({ rawConfig }: Props) => {
    const activity = useActivityContext()
    const config = readWidgetConfig(rawConfig, activity);

    if (!config) return null;

    return <MinicartWidget config={config} />
};


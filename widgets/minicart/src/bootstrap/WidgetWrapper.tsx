import {useActivityContext} from "../activity/Context/useActivityContext.ts";
import {readWidgetConfig} from "../Config.ts";
import {MinicartWidget} from "../components/MinicartWidget.tsx";

type Props = {
    contract: unknown;
};

export const WidgetWrapper = ({ contract }: Props) => {
    const activity = useActivityContext()
    const config = readWidgetConfig(contract, activity);

    if (!config) return null;

    return <MinicartWidget config={config} />
};

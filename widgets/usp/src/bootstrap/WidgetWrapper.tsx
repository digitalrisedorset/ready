import {useActivityContext} from "../activity/Context/useActivityContext.ts";
import {readWidgetConfig} from "../Config.ts";
import {Spinner} from "../components/Spinner.tsx";
import {UspWidget} from "../components/UspWidget.tsx";

type Props = {
    rawConfig: unknown;
};

export const WidgetWrapper = ({ rawConfig }: Props) => {
    const activity = useActivityContext()
    const config = readWidgetConfig(rawConfig, activity);

    if (!config) return null;

    if (config.data.slides.length === 0) return <Spinner />;

    return <UspWidget config={config} />
};


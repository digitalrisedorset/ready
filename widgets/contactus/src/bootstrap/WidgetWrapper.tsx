import {useActivityContext} from "../activity/Context/useActivityContext.ts";
import {readWidgetConfig} from "../Config.ts";
import {SystemStateProvider} from "../state/System/SystemStateProvider.tsx";
import {ContactUsWrapper} from "../components/ContactUsWrapper.tsx";

type Props = {
    contract: unknown,
    runtime: unknown
}

export function WidgetWrapper({contract, runtime}: Props) {
    const activity = useActivityContext()
    const config = readWidgetConfig(contract, runtime, activity);

    if (!config) return null;

    return <SystemStateProvider config={config}>
        <ContactUsWrapper config={config} />
    </SystemStateProvider>
}


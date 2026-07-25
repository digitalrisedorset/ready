import {MegamenuContent} from "./components/MegamenuContent.tsx";
import {ConfigStateProvider} from "./state/Config/ConfigStateProvider.tsx";
import {useMediaQuery} from "./hooks/ui/useMediaQuery.tsx";
import {MobileMegamenu} from "./components/MobileMegamenu.tsx";
import {readWidgetConfig} from "./Config.ts";
import {useActivityContext} from "./activity/Context/useActivityContext.ts";

type Props = {
    contract?: unknown
}

export function WidgetWrapper({contract}: Props) {
    const activity = useActivityContext()
    const config = readWidgetConfig(contract, activity);
    const isMobile = useMediaQuery('(max-width: 768px)');

    if (!config) return null;

    return <ConfigStateProvider settings={config?.settings?.theme}>
        {!isMobile && <MegamenuContent items={config?.data.items} theme={config.settings?.theme} />}
        {isMobile && <MobileMegamenu items={config?.data.items} theme={config.settings?.theme} />}
    </ConfigStateProvider>;
}

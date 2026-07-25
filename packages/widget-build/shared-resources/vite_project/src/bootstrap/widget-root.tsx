import {WIDGET_ID} from "../Config.ts";
import {ActivityContextProvider} from "../activity/Context/ActivityContextProvider.tsx";
import {WidgetWrapper} from "./WidgetWrapper.tsx";
interface WidgetRootProps {
    rawConfig: unknown;
    hostElement?: HTMLElement;
}

export function WidgetRoot({
       rawConfig,
       hostElement,
   }: WidgetRootProps) {
    return (
        <div className={`reactedge-${WIDGET_ID}`}>
            <ActivityContextProvider
                {...(hostElement ? { hostElement } : {})}
            >
                <WidgetWrapper rawConfig={rawConfig} />
            </ActivityContextProvider>
        </div>
    );
}
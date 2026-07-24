import {WIDGET_ID} from "../Config.ts";
import {WidgetView} from "../ssr/WidgetView.tsx";
interface WidgetRootProps {
    rawConfig: unknown;
    hostElement?: HTMLElement;
}

export function WidgetComponent({
       rawConfig
   }: WidgetRootProps) {
    return (
        <div className={`reactedge-${WIDGET_ID}`}>
            <WidgetView rawConfig={rawConfig} />
        </div>
    );
}
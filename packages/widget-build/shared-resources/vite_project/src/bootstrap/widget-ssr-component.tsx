import {WIDGET_ID} from "../Config.ts";
import {WidgetView} from "../ssr/WidgetView.tsx";
interface WidgetRootProps {
    rawConfig: unknown;
    hostElement?: HTMLElement;
}

export function WidgetComponent({
       rawConfig
   }: WidgetRootProps) {
    const runtimeConfig = {
        rendering: {
            userAgent: 'desktop'
        }}

    return (
        <div className={`reactedge-${WIDGET_ID}`}>
            <WidgetView rawConfig={rawConfig} runtimeConfig={runtimeConfig}/>
        </div>
    );
}
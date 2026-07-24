import { renderToString } from 'react-dom/server';
import {type RuntimeConfig, WIDGET_ID} from "../Config.ts";
import {WidgetView} from "./WidgetView.tsx";

export const renderHtml = (config: unknown, runtimeConfig: RuntimeConfig): string => {
    return renderToString(
        <div className={`reactedge-${WIDGET_ID}`}>
            <WidgetView rawConfig={config} runtimeConfig={runtimeConfig} />
        </div>
    );
};
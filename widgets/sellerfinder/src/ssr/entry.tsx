import { renderToString } from 'react-dom/server';
import {WIDGET_ID, type WidgetConfig} from "../Config.ts";
import {WidgetView} from "./WidgetView.tsx";
import type {RuntimeConfig} from "../lib/load-runtime.ts";

export const renderHtml = (config: WidgetConfig, runtime: RuntimeConfig): string => {
    return renderToString(
        <div className={`reactedge-${WIDGET_ID}`}>
            <WidgetView contract={config} runtime={runtime} />
        </div>
    );
};
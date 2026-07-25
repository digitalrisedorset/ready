import { renderToString } from 'react-dom/server';
import {type RuntimeConfig, WIDGET_ID} from "../Config.ts";
import {WidgetView} from "./WidgetView.tsx";

export const renderHtml = (config: unknown, runtime: RuntimeConfig): string => {
    return renderToString(
        <div className={`reactedge-${WIDGET_ID}`}>
            <WidgetView contract={config} runtime={runtime} />
        </div>
    );
};
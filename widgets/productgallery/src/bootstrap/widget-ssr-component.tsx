import {WIDGET_ID} from "../Config.ts";
import {WidgetView} from "../ssr/WidgetView.tsx";

interface WidgetRootProps {
    contract: unknown;
    hostElement?: HTMLElement;
}

export function WidgetComponent({
       contract
   }: WidgetRootProps) {
    const runtime = {
        rendering: {
            userAgent: 'desktop'
        }}

    const bootstrapData = {
        galleryData: []
    }

    return (
        <div className={`reactedge-${WIDGET_ID}`}>
            <WidgetView contract={contract} runtime={runtime} bootstrapData={bootstrapData}/>
        </div>
    );
}
import { visualizer } from "rollup-plugin-visualizer";

export function reactEdgeVisualizer(enabled: boolean) {
    return enabled
        ? visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: "stats.html",
        })
        : false;
}
import { defineConfig, UserConfig } from "vite";
import type { BuildOptions } from "vite";

export interface ReactEdgeConfigOptions {
    widgetName: string;
    version: string;
    isAnalyze: false,
    build: UserConfig["build"];
}

export function createReactEdgeConfig(
    options: ReactEdgeConfigOptions
) {
    const {widgetName, version, build, isAnalyze } = options;

    return defineConfig({
        define: {
            'process.env.NODE_ENV': JSON.stringify('production')
        }
    })
}

export function createWidgetBuildDefaults(
    options: {
        widgetName: string;
        version: string;
    }
): BuildOptions {
    const {widgetName, version } = options;

    return {
        outDir: `../../workspace/release/source/${widgetName}/`,
        cssCodeSplit: false,
        emptyOutDir: false,
        lib: {
            entry: "api/widget.ts",
            name: `ReactEdge_${widgetName}`,
            fileName: () => `widget-${widgetName}@${version}.iife.js`,
            formats: ["iife"],
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
                assetFileNames: `widget-${widgetName}.[ext]`,
            },
        },
        minify: true,
        sourcemap: false
    }
}
import { defineConfig, UserConfig } from "vite";
import type { BuildOptions } from "vite";

export interface ReactEdgeConfigOptions {
    widgetName: string;
    version: string;
    isAnalyze: false,
    build: UserConfig["build"];
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

export function createNpmBuildDefaults({
   widgetName,
}: {
    widgetName: string;
}): BuildOptions {
    return {
        outDir: `../../workspace/release/source/${widgetName}/`,
        emptyOutDir: false,
        lib: {
            entry: "api/index.ts",
            formats: ["es"],
            fileName: () => "index.js",
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react-dom/client",
                "react-dom/server",
                "react/jsx-runtime",
            ],
        },
    };
}
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pkg from './package.json';
import { resolve } from "node:path";
import {createNpmBuildDefaults} from "../../packages/widget-build/shared-resources/widget-preset/createReactEdgeConfig";

const widgetName = pkg.name.replace(/^widget-/, "");

export default defineConfig({
  publicDir: resolve(__dirname, "public"),
  plugins: [react(), ],
  define: {
    __REACTEDGE_MODE__: JSON.stringify(
        process.env.REACTEDGE_MODE ?? "render"
    ),
  },
  build: createNpmBuildDefaults({
    widgetName
  }),
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pkg from './package.json'
import { manifestPlugin } from '../../packages/widget-build/shared-resources/widget-preset/manifestPlugin'
import {resolve} from "node:path";
import {createWidgetBuildDefaults} from "../../packages/widget-build/shared-resources/widget-preset/createReactEdgeConfig";
import {reactEdgeVisualizer} from "../../packages/widget-build/shared-resources/widget-preset/reactEdgeVisualizer";

const isAnalyze = process.env.ANALYZE === 'true';

const widgetName = pkg.name.replace(/^widget-/, '');

export default defineConfig({
  resolve: {
    alias: {
      "@reactedge": resolve(
          __dirname,
          "../../packages/widget-build/shared-resources"
      ),
    },
  },

  plugins: [
    react(),
    reactEdgeVisualizer(isAnalyze),
    manifestPlugin({ widgetName, version: pkg.version }),
  ],

  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },

  build: createWidgetBuildDefaults({
    widgetName,
    version: pkg.version,
  }),
});
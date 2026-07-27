import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pkg from './package.json'
import { manifestPlugin } from './manifestPlugin'
import {resolve} from "node:path";

const widgetName = 'contactus';
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
    manifestPlugin({ widgetName }),
  ],
  define: {
    'process.env': {}
  },
  build: {
    outDir: `../../workspace/release/source/${widgetName}/`,
    cssCodeSplit: true,
    emptyOutDir: false,
    lib: {
      entry: "api/widget-runtime.ts",
      name: `ReactEdge_${widgetName}`,
      fileName: () => `widget-${widgetName}@${pkg.version}.iife.js`,
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
})
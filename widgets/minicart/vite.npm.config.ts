import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pkg from './package.json';
import { resolve } from "node:path";

const widgetName = pkg.name.replace(/^widget-/, "");

export default defineConfig({
  publicDir: resolve(__dirname, "public"),
  plugins: [react(), ],
  define: {
    __REACTEDGE_MODE__: JSON.stringify(
        process.env.REACTEDGE_MODE ?? "render"
    ),
  },
  build: {
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
  },
});
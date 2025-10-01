import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vanillaExtractPlugin({ identifiers: ({ hash }) => `patrick-ui_${hash}` }),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "dist/@types",
      entryRoot: "./src",
    }),
  ],
  resolve: {
    alias: {
      "@patrick-ui/core": path.resolve(__dirname, "../core/src"),
    },
  },

  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          react: "Vue",
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "PatrickUI",
      fileName: "index",
      formats: ["es"],
    },
  },
});

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({ identifiers: ({ hash }) => `patrick-ui_${hash}` }),
    dts({ tsconfigPath: "./tsconfig.app.json", outDir: 'dist/@types' }),
  ],
  resolve: {
    alias: {
      "@patrick-ui/core": path.resolve(__dirname, "../core/src"),
    },
  },

  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: 'PatrickUI',
      fileName: "index",
      formats: ["es", 'cjs'],
    },
  },
});

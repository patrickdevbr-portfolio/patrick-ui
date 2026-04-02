import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@patrick-ui/react", "@patrick-ui/core"],
  },
  server: {
    fs: {
      allow: ["../.."],
    },
    watch: {
      ignored: ["!**/packages/react/dist/**", "!**/packages/core/dist/**"],
    },
  },
});

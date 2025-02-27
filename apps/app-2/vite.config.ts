import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
const port = 5175;
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app2",
      exposes: {
        "./export-app": "./src/export-app.tsx",
      },
      filename: "remoteEntry.js",
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.3.0",
          shareScope: "react18",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.3.0",
          shareScope: "react18",
        },
      },
    }),
  ],
  base: "/app-2",
  build: {
    target: "esnext",
    minify: false,
  },
  server: {
    port,
  },
  preview: {
    port,
  },
});

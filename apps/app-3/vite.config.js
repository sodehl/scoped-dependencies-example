import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
const port = 5176;
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app3",
      exposes: {
        "./export-app": "./src/export-app.jsx",
      },
      filename: "remoteEntry.js",
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^17.0.2",
          shareScope: "react17",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^17.0.2",
          shareScope: "react17",
        },
      },
    }),
  ],
  base: "/app-3",
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

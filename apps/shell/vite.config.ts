import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
const port = 5173;
export default defineConfig({
  plugins: [
    federation({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        app1: {
          type: "module",
          name: "app1",
          entry: `/app-1/remoteEntry.js`,
          entryGlobalName: "app1",
        },
        app2: {
          type: "module",
          name: "app2",
          entry: `/app-2/remoteEntry.js`,
          entryGlobalName: "app2",
        },
        app3: {
          type: "module",
          name: "app3",
          entry: `/app-3/remoteEntry.js`,
          entryGlobalName: "app3",
        },
      },
    }),
    react(),
  ],
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

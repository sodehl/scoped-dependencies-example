import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
const port = 5174;
export default defineConfig({
  plugins: [react()],
  server: {
    port,
  },
  preview: {
    port,
  },
});

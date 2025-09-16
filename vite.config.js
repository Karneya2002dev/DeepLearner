import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Railway backend URL (fallback to localhost in dev)
// const backendUrl ="http://deeplearner-production.up.railway.app";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": 

"http://deeplearner-production.up.railway.app",
    }
  },
});

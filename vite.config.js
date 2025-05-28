import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PortfolioWeb-personal",
});

// base: "https://pablocariglino.github.io/PortfolioWeb-personal",

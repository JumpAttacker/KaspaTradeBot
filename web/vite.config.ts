import path from "path"
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    svgr(),
      react()
  ],
  base: '/KaspaTradeBot',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

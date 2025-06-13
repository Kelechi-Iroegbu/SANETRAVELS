import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/     
export default defineConfig({
  plugins:[react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  content: [],
  theme: {
    extend: {
      colors: {
        "blue-dianne": {
          900: "#1D535D",
        },
      },
    },
  },
});

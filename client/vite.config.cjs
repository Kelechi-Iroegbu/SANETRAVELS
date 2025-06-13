const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react-swc");
const tailwindcss = require("@tailwindcss/vite");
const path = require("path");

// https://vite.dev/config/
module.exports = defineConfig({
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
  plugins: [react(), tailwindcss()],
});

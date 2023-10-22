import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@services": "/src/services",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@context": "/src/context",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@models": "/src/models",
      "@validations": "/src/validations",
    },
  },
});

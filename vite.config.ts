import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Ensure this points to the `src` directory
    },
  },
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build:{
    outDir:"../server/dist"
  },
  envPrefix: "REACT_APP_",
  plugins: [react()],
})
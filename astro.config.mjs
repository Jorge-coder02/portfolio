import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  devOptions: {
    toolbar: false,
  },
  integrations: [react()],
});

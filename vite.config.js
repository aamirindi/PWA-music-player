import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  name: "Music-Player",
  short_name: "PWA",
  description: "Music player using React (PWA)",
  icons: [
    {
      src: "/logo.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any maskable",
    },
    {
      src: "/logo.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
  theme_color: "#181818",
  background_color: "#e0cc3b",
  display: "standalone",
  scope: "/",
  start_url: "/",
  orientation: "portrait",
};

export default defineConfig({
  plugins: [react(), VitePWA({ manifest })],
});

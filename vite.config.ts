import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Pain Tracker PWA",
        short_name: "PainTracker",
        description: "A simple pain tracker app",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png", // Path to your 192x192 icon
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png", // Path to your 512x512 icon
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  base: "/anastasia",
});

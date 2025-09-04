import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import SitemapPlugin from "vite-plugin-sitemap";
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      hostname: "https://artbyjulieulfeng.vercel.app/",
      dynamicRoutes: [
        "/",
        "/about",
        "/blog",
        "/browse",
        "/home",
        "/favourites",
      ],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        // 👇 Do NOT serve index.html for these URLs
        navigateFallbackDenylist: [
          /sitemapmain\.xml$/,
          /robots\.txt$/
        ],
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: "Julie's Art Gallery",
        short_name: "Julie's Art Gallery",
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
      },
    })
  ],
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEY,
    storageUrl: process.env.SUPABASE_STORAGE_URL,
    baseStorageUrl: process.env.SUPABASE_GET_STORAGE_URL,
    },

  app: {
    head: {
    link: [
    { rel: "stylesheet", href:
    "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
    ],
    }
    },
    
  devtools: { enabled: true },
  //Add new modules
  modules: ["@nuxtjs/tailwindcss", '@vite-pwa/nuxt', "@pinia/nuxt"],
  

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwindcss.config.ts",
  },

  pwa: {
    manifest: {
      "theme_color": "#f9f8f7",
      "background_color": "#0e0e0e",
      "display": "standalone",
      "scope": "/",
      "start_url": "/",
      "name": "ECOMMERCE",
      "short_name": "ecommerce_ribi",
      "icons": [
          {
              "src": "/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/icon-256x256.png",
              "sizes": "256x256",
              "type": "image/png"
          },
          {
              "src": "/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
          },
          {
              "src": "/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
      ]
  },
  devOptions: {
    enabled: true,
    }
  }
})

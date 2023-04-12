// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    storage: {
      db: {
        driver: "cloudflare-kv-binding",
        binding: "KV"
      }
    },
    devStorage: {
      db: {
        driver: "memory"
      }
    }
  }
})

export default defineNuxtConfig({
  app: {
    head: {
      title: "Project X",
    },
  },

  runtimeConfig: {
    apiServer: "http://127.0.0.1:8000",

    public: {
      siteUrl: "http://127.0.0.1:3000",
      apiUrl: "http://127.0.0.1:8000",
    },
  },

  css: ["vuetify/lib/styles/main.sass", "~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  modules: ['@pinia/nuxt'],
});

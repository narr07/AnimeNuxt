// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@hypernym/nuxt-anime',
    'nuxt-delay-hydration',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Ui',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  components: {
    dirs: [
      {
        path: './components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
    navigation: {
      fields: ['icon'],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      },
    },
  },
  anime: {
    composables: true,
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', display: 'swap' },
    ],
    defaults: {
      fallbacks: {
        'serif': ['Times New Roman'],
        'sans-serif': ['Arial'],
        'monospace': ['Courier New'],
      },
      preload: true,
      styles: ['normal', 'italic'],

    },
    assets: {
      prefix: '/_fonts',
    },
  },
  delayHydration: {
    mode: 'mount',
  },
});

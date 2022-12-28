export default {
  head: {
    titleTemplate: 'Movies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Meta description' },
    ],
  },
  css: [
    // プロジェクト内共通のスタイル
    '~/assets/css/reset.scss',
    '~/assets/css/main.scss',
  ],
  publicRuntimeConfig: {
    baseURL: process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:8080'
  },
  modules: [
    "@nuxtjs/axios",
  ],
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['./assets/css/_variables.scss', './assets/css/_functions.scss'],
  },
  // コンポーネントを自動でインポート
  components: true,
}

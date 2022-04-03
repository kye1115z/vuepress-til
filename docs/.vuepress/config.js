const { description } = require('../../package')

module.exports = {
  base:'/vuepress-til/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
   head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: 'images/maskable_icon_x192.png',
      },
    ],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      '/intro',
      {
        title: 'Javascript',
        collapsable: true,
        children: ['/javascript/start'],
      },
      {
        title: 'React',
        collapsable: true,
        children: ['/react/jsx'],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',

    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요😀",
          buttonText: "새로고침",
        },
      },
    ],
  ]
};

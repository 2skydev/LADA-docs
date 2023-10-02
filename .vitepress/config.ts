import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'LADA',
  description: 'League of Legends Assistant Desktop App',

  lang: 'ko',
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,
  titleTemplate: 'LADA - :title',

  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/'
    },
    en: {
      label: 'English',
      lang: 'en'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  sitemap: {
    hostname: 'https://lada.2skydev.com'
  },

  themeConfig: {
    externalLinkIcon: true,
    editLink: {
      pattern: 'https://github.com/2skydev/LADA-docs/edit/main/docs/:path'
    },

    logo: '/logo.png',

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2skydev/LADA' }
    ],

    nav: [],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'What is LADA', link: '/what-is-lada' },
          { text: 'Installation', link: '/installation' },
          { text: 'FAQs', link: '/faqs' },
        ],
      },
      // {
      //   text: 'ETC',
      //   collapsed: false,
      //   items: [
      //     { text: 'Known bugs', link: '/known-bugs' },
      //   ],
      // }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023-present 2skydev`
    },
  },

  srcDir: './docs',
  vite: {
    publicDir: resolve(__dirname, '../public'),
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBarMenu\.vue$/,
          replacement: resolve(__dirname, 'components/VPNavBarMenu.vue')
        }
      ]
    }
  },
})
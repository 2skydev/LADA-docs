import { watchEffect } from 'vue'
import { useData, inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Markdown from '../components/Markdown.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Markdown', Markdown)
  },
  setup() {
    const { lang } = useData()

    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
      }
    })
  }
}
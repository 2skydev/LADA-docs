
import DefaultTheme from 'vitepress/theme'
import Markdown from '../components/Markdown.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Markdown', Markdown)
  }
}
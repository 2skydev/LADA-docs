<script lang="ts" setup>
import { ref } from 'vue';
import { createMarkdownRenderer } from '../markdown/markdown'

const html = ref('')

const props = defineProps<{
  text: string
}>()

createMarkdownRenderer().then((md) => {
  const result = md.render(props.text)
  html.value = result
})
</script>

<template>
  <div v-html="html"></div>
</template>
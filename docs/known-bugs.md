<script setup>
import { ref } from 'vue'

const issues = ref([])

fetch('https://api.github.com/repos/2skydev/LADA/issues').then(res => res.json()).then(data => {
  issues.value = data.map(issue => {
    return {
      id: issue.id,
      markdown: 
`### ${issue.title}

${issue.body}
`
    }
  })
})
</script>

# Known bugs

현재 알려진 버그들 입니다.

버그가 수정되면 자동으로 이 페이지가 업데이트 됩니다.

<div v-for="issue in issues" :key="issue.id">
  <Markdown :text="issue.markdown"></Markdown>
</div>
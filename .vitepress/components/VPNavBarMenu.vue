<script lang="ts" setup>
import { ref } from 'vue'
import { useData, DefaultTheme } from 'vitepress'
import VPNavBarMenuLink from 'vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue'
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue'

const { theme } = useData()

const versionMenu = ref<DefaultTheme.NavItemWithChildren | null>(null)

fetch('https://api.github.com/repos/2skydev/LADA/releases/latest').then(res => res.json()).then(res => {
  versionMenu.value = {
    text: `${res.tag_name}`,
    items: [
      { text: 'Download', link: res.assets.find(asset => asset.name.endsWith('.exe')).browser_download_url },
      { text: 'Releases', link: 'https://github.com/2skydev/LADA/releases' },
    ]
  }
})
</script>

<template>
  <nav v-if="theme.nav" aria-labelledby="main-nav-aria-label" class="VPNavBarMenu">
    <span id="main-nav-aria-label" class="visually-hidden">Main Navigation</span>
    <template v-for="item in theme.nav" :key="item.text">
      <VPNavBarMenuLink v-if="'link' in item" :item="item" />
      <VPNavBarMenuGroup v-else :item="item" />
    </template>

    <Transition name="fade">
      <VPNavBarMenuGroup v-if="versionMenu" :item="versionMenu" />
    </Transition>
  </nav>
</template>

<style scoped>
.VPNavBarMenu {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .VPNavBarMenu {
    display: flex;
  }
}
</style>
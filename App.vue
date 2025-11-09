<template>
  <div>
    <LandingPage v-if="currentPage === 'landing'" @navigate="navigateTo" />
    <ChatApp v-else-if="currentPage === 'chat'" :preset-message="presetMessage" @navigate="navigateTo" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LandingPage from './LandingPage.vue'
import ChatApp from './ChatApp.vue'

const currentPage = ref<'landing' | 'chat'>('landing')
const presetMessage = ref<string>('')

const navigateTo = (page: string, preset?: string) => {
  if (page === 'chat' || page === 'landing') {
    currentPage.value = page
    if (preset !== undefined) {
      presetMessage.value = preset
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

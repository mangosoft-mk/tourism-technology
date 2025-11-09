<template>
  <div>
    <!-- System Message -->
    <div v-if="message.sender === 'system'" class="text-center my-6">
      <div class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-cyan-300/30">
        <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <p class="text-sm text-cyan-100 font-medium">{{ message.text }}</p>
      </div>
    </div>

    <!-- User/Bot Message -->
    <div v-else :class="['flex items-start gap-4 my-6', isBot ? 'justify-start' : 'justify-end']">
      <!-- Bot Avatar -->
      <div v-if="isBot" class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg ring-2 ring-white/20">
        <svg class="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
        </svg>
      </div>

      <!-- Message Bubble -->
      <div :class="[
        'max-w-xs md:max-w-md lg:max-w-lg px-5 py-4 rounded-2xl shadow-xl',
        isBot
          ? 'bg-white/90 backdrop-blur-sm text-gray-800 rounded-tl-none border border-cyan-200/50'
          : 'bg-gradient-to-br from-orange-400 to-pink-500 text-white rounded-br-none'
      ]">
        <p class="text-sm leading-relaxed">{{ message.text }}</p>

        <!-- Link Button -->
        <a
          v-if="message.link"
          :href="message.link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-5 rounded-xl text-sm transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          {{ message.link.text }}
        </a>
      </div>

      <!-- User Avatar -->
      <div v-if="!isBot" class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg ring-2 ring-white/20">
        <svg class="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ChatMessage as ChatMessageType } from '../types'

interface Props {
  message: ChatMessageType
}

const props = defineProps<Props>()

const isBot = computed(() => props.message.sender === 'bot')
</script>

<style scoped>
/* Add smooth animations */
.flex {
  animation: fadeInUp 0.4s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

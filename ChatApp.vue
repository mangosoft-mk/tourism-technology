<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
    <!-- Animated background with tourism imagery -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-900 animate-gradient"></div>
    <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920')] bg-cover bg-center opacity-20"></div>
    <div class="absolute inset-0 backdrop-blur-[2px]"></div>

    <!-- Floating decorative elements -->
    <div class="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>

    <!-- Back Button -->
    <button
      @click="goBack"
      class="absolute top-6 left-6 z-50 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-xl border border-white/30"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
      </svg>
      Back to Home
    </button>

    <div class="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 h-[90vh] relative z-10">

      <!-- Booking Summary Sidebar -->
      <div class="lg:w-1/3 w-full lg:order-1 order-2">
        <BookingSummary :details="bookingDetails" />
      </div>

      <!-- Main Chat Section -->
      <div class="lg:w-2/3 w-full flex flex-col bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 lg:order-2 order-1 overflow-hidden">
        <!-- Header -->
        <div class="p-6 border-b border-white/20 bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
          <div class="flex items-center justify-center gap-3 mb-2">
            <svg class="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
            <h1 class="text-3xl font-bold text-white drop-shadow-lg">Antalya Vacation Booker</h1>
          </div>
          <p class="text-center text-cyan-100 text-sm font-medium">Your AI-Powered Travel Companion ✈️</p>
        </div>

        <!-- Chat Messages -->
        <div ref="chatContainer" class="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-transparent to-black/5">
          <ChatMessage
            v-for="msg in messages"
            :key="msg.id"
            :message="msg"
          />

          <!-- Loading indicator -->
          <div v-if="isLoading" class="flex items-start gap-3 my-4 justify-start">
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center animate-pulse shadow-lg">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
              </svg>
            </div>
            <div class="max-w-xs md:max-w-md lg:max-w-lg px-5 py-4 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm rounded-tl-none">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div class="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div class="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Form -->
        <form @submit.prevent="handleSendMessage" class="p-6 border-t border-white/20 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm">
          <div class="flex items-center gap-4">
            <input
              v-model="userInput"
              type="text"
              placeholder="Type your message... (e.g., 'I need a 7-night vacation for 2 adults')"
              :disabled="isLoading"
              class="flex-1 bg-white/90 backdrop-blur-sm border-2 border-cyan-300/50 rounded-full py-4 px-6 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-gray-800 placeholder-gray-500 disabled:opacity-50 transition-all duration-300 shadow-lg"
            />
            <button
              type="submit"
              :disabled="isLoading || !userInput.trim()"
              class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full p-4 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 shadow-xl transform hover:scale-105 active:scale-95"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, onMounted, nextTick, watch } from 'vue'
import type { Chat } from '@google/genai'
import type { ChatMessage as ChatMessageType, BookingDetails } from './types'
import ChatMessage from './components/ChatMessage.vue'
import BookingSummary from './components/BookingSummary.vue'
import { initializeChat, sendMessageToGemini } from './services/geminiService'

interface Props {
  presetMessage?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  navigate: [page: string]
}>()

const goBack = () => {
  emit('navigate', 'landing')
}

const chat = shallowRef<Chat | null>(null)
const messages = ref<ChatMessageType[]>([])
const userInput = ref<string>('')
const isLoading = ref<boolean>(true)
const bookingDetails = ref<BookingDetails>({
  checkInDate: null,
  nights: null,
  adults: null,
  children: null,
  childrenAges: null,
})

const chatContainer = ref<HTMLDivElement | null>(null)

// Auto-scroll to bottom when messages change
watch(messages, async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}, { deep: true })

const startConversation = async () => {
  const newChat = initializeChat()
  chat.value = newChat
  isLoading.value = true

  try {
    // If there's a preset message, send it directly
    if (props.presetMessage && props.presetMessage.trim()) {
      const firstResponse = await sendMessageToGemini(newChat, "Hello")
      messages.value = [{
        id: crypto.randomUUID(),
        sender: 'bot',
        text: firstResponse.text
      }]

      // Wait a bit then auto-send the preset message
      isLoading.value = false
      await nextTick()

      // Add user message
      const userMessage: ChatMessageType = {
        id: crypto.randomUUID(),
        sender: 'user',
        text: props.presetMessage,
      }
      messages.value.push(userMessage)
      isLoading.value = true

      // Send to AI
      const response = await sendMessageToGemini(newChat, props.presetMessage)

      if (response.functionCalls && response.functionCalls.length > 0) {
        await handleFunctionCall(response)
      } else {
        messages.value.push({
          id: crypto.randomUUID(),
          sender: 'bot',
          text: response.text,
        })
      }
    } else {
      // Normal conversation start
      const firstResponse = await sendMessageToGemini(newChat, "Hello")
      messages.value = [{
        id: crypto.randomUUID(),
        sender: 'bot',
        text: firstResponse.text
      }]
    }
  } catch (error) {
    console.error("Failed to start conversation:", error)
    messages.value = [{
      id: crypto.randomUUID(),
      sender: 'bot',
      text: "I'm sorry, I'm having trouble connecting right now. Please try again later."
    }]
  } finally {
    isLoading.value = false
  }
}

const handleFunctionCall = async (response: any) => {
  const functionCall = response.functionCalls[0]

  if (functionCall.name === 'findVacationPackages') {
    const args = functionCall.args as unknown as BookingDetails
    bookingDetails.value = args

    const systemMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      sender: 'system',
      text: 'Searching for vacation packages on eurosava.com...',
    }
    messages.value.push(systemMessage)

    const params = new URLSearchParams({
      type: 'charter-antalya',
      from: 'Skopje',
      to: 'Antalya',
      page: '1',
    })

    if (args.checkInDate) {
      const dateParts = args.checkInDate.split('-')
      if (dateParts.length === 3) {
        const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
        params.set('date', formattedDate)
      }
    }
    if (args.nights) {
      params.set('nights', args.nights.toString())
    }
    if (args.adults) {
      params.set('adl', args.adults.toString())
    }
    if (args.children !== null) {
      params.set('chld', args.children.toString())
    }
    if (args.childrenAges && args.childrenAges.length > 0) {
      args.childrenAges.forEach((age, index) => {
        params.set(`ch${index + 1}`, age.toString())
      })
    }

    const searchUrl = `https://test-web.eurosava.com/hotels?${params.toString()}`

    setTimeout(() => {
      const finalBotMessage: ChatMessageType = {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: "Great news! I've found some fantastic vacation packages for you. Click the button below to see the results and book your dream trip to Antalya!",
        link: {
          url: searchUrl,
          text: 'View Packages on Eurosava.com'
        }
      }
      messages.value.push(finalBotMessage)
    }, 1500)
  }
}

const handleSendMessage = async () => {
  if (!userInput.value.trim() || !chat.value || isLoading.value) return

  const userMessage: ChatMessageType = {
    id: crypto.randomUUID(),
    sender: 'user',
    text: userInput.value,
  }

  messages.value.push(userMessage)
  const currentInput = userInput.value
  userInput.value = ''
  isLoading.value = true

  try {
    const response = await sendMessageToGemini(chat.value, currentInput)

    if (response.functionCalls && response.functionCalls.length > 0) {
      await handleFunctionCall(response)
    } else {
      messages.value.push({
        id: crypto.randomUUID(),
        sender: 'bot',
        text: response.text,
      })
    }

  } catch (error) {
    console.error("Failed to send message:", error)
    messages.value.push({
      id: crypto.randomUUID(),
      sender: 'bot',
      text: "Apologies, but I've encountered an error. Please try again."
    })
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  startConversation()
})
</script>

<style scoped>
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}
</style>

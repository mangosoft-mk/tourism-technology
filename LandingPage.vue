<template>
  <div class="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50">
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <svg class="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
            <h1 class="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Antalya 2026</h1>
          </div>
          <div class="hidden md:flex items-center gap-6">
            <a href="#smart-booking" class="text-gray-700 hover:text-green-600 transition-colors font-medium">Smart Booking Assistant</a>
          </div>
        </div>
      </div>
    </nav>



    <!-- Hotels Section with AI Chat Link -->
    <section id="smart-booking" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4 text-gray-900">Smart Booking</h2>
          <p class="text-xl text-gray-600">Discover the perfect accommodation for your Antalya adventure</p>
        </div>

        <!-- AI Booking Assistant - Featured -->
        <div class="mb-12">
          <div class="bg-gradient-to-br from-green-500 via-teal-500 to-emerald-600 rounded-3xl shadow-2xl overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div class="p-12 text-white flex flex-col justify-center">
                <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 w-fit">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                  <span class="text-sm font-semibold">AI-Powered</span>
                </div>

                <h3 class="text-4xl font-bold mb-4">Smart Booking Assistant</h3>
                <p class="text-xl mb-6 text-green-50">
                  Let our AI assistant help you find the perfect vacation package for nearby destinations like Antalya.
                  Chat naturally about your preferences and get personalized recommendations.
                </p>

                <div class="space-y-3 mb-8">
                  <div class="flex items-center gap-3">
                    <svg class="w-6 h-6 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-green-50">Natural conversation interface</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-6 h-6 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-green-50">Real-time package search</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-6 h-6 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-green-50">Personalized recommendations</span>
                  </div>
                </div>

                <div class="space-y-4">
                  <button @click="goToChat('')" class="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full flex items-center justify-center gap-3">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    Start Chatting Now
                  </button>

                  <!-- Quick Presets -->
                  <div class="text-center">
                    <p class="text-green-100 text-sm font-medium mb-3">Or try these quick options:</p>
                    <div class="grid grid-cols-1 gap-3">
                      <!-- <button @click="openModal('winter-ski', '⛷️ Winter Ski Trip', 'Plan your perfect ski vacation in Salzburg')" class="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
                        </svg>
                        Winter Ski Trip
                      </button>

                      <button @click="openModal('summer-lakes', '🏖️ Summer Lakes', 'Discover beautiful lakes near Salzburg')" class="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                        </svg>
                        Summer Lakes
                      </button>

                      <button @click="openModal('city-center', '🏛️ City Center', 'Explore Salzburg historic sites')" class="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                        </svg>
                        City Center
                      </button> -->

                      <button @click="openModal('antalya', '🌴 Antalya Turkey', 'Book your vacation to Antalya')" class="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                        </svg>
                        Antalya Turkey
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-12 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-64 h-64 mx-auto mb-6 relative">
                    <div class="absolute inset-0 bg-white/20 rounded-3xl animate-pulse"></div>
                    <svg class="absolute inset-0 w-full h-full text-white p-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                    </svg>
                  </div>
                  <p class="text-white text-lg font-medium">Powered by AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <svg class="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
          </svg>
          <h3 class="text-2xl font-bold">Antalya 2026</h3>
        </div>
        <p class="text-gray-400 mb-6">Sun, Sea, and Stories: Your Antalya Adventure</p>
        <p class="text-sm text-gray-500">© 2026 Eurosava</p>
      </div>
    </footer>

    <!-- Trip Details Modal -->
    <TripDetailsModal
      :show="showModal"
      :trip-type="currentTripType"
      :trip-title="modalTitle"
      :trip-description="modalDescription"
      @close="closeModal"
      @submit="handleTripSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TripDetailsModal from './components/TripDetailsModal.vue'

interface TripDetails {
  startDate: string
  days: number
  adults: number
  children: number
  childrenAges: number[]
}

const emit = defineEmits<{
  navigate: [page: string, preset?: string]
}>()

const showModal = ref(false)
const currentTripType = ref('')
const modalTitle = ref('')
const modalDescription = ref('')

const openModal = (tripType: string, title: string, description: string) => {
  currentTripType.value = tripType
  modalTitle.value = title
  modalDescription.value = description
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const handleTripSubmit = (details: TripDetails) => {
  showModal.value = false

  const { startDate, days, adults, children, childrenAges } = details

  // Format dates for URLs
  const checkInDate = new Date(startDate)
  const checkOutDate = new Date(checkInDate)
  checkOutDate.setDate(checkOutDate.getDate() + days)

  const formatDate = (date: Date) => date.toISOString().split('T')[0]
  const formatDateBooking = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  if (currentTripType.value === 'antalya') {
    // For Antalya, use the chat with pre-filled info
    const childrenInfo = children > 0 ? ` and ${children} children (ages: ${childrenAges.join(', ')})` : ''
    const presetMessage = `I want a ${days}-night vacation package to Antalya, Turkey starting on ${formatDate(checkInDate)} for ${adults} adults${childrenInfo}.`
    emit('navigate', 'chat', presetMessage)
  } else {
    // For Salzburg trips, open booking and flight links in new tabs
    const bookingUrl = generateBookingUrl(currentTripType.value, formatDateBooking(checkInDate), formatDateBooking(checkOutDate), adults, children)
    const airbnbUrl = generateAirbnbUrl(formatDate(checkInDate), formatDate(checkOutDate), adults, children)
    const flightUrl = generateFlightUrl(formatDate(checkInDate), formatDate(checkOutDate))

    // Open all links
    window.open(bookingUrl, '_blank')
    setTimeout(() => window.open(airbnbUrl, '_blank'), 500)
    setTimeout(() => window.open(flightUrl, '_blank'), 1000)

    // Also show AI recommendations
    const childrenInfo = children > 0 ? ` and ${children} children` : ''
    const presetMessage = `I want to ${getTripDescription(currentTripType.value)} for ${days} days starting ${formatDate(checkInDate)} with ${adults} adults${childrenInfo}. Can you give me recommendations?`
    emit('navigate', 'chat', presetMessage)
  }
}

const getTripDescription = (tripType: string): string => {
  const descriptions: Record<string, string> = {
    'winter-ski': 'go on a winter ski trip to Salzburg',
    'summer-lakes': 'visit the beautiful lakes near Salzburg',
    'city-center': 'explore Salzburg city center and historic sites'
  }
  return descriptions[tripType] || 'plan a trip to Salzburg'
}

const generateBookingUrl = (tripType: string, checkIn: string, checkOut: string, adults: number, children: number): string => {
  const rooms = 1
  const cityMap: Record<string, string> = {
    'winter-ski': '-hotel-at-salzburg',
    'summer-lakes': '-hotel-at-salzburg',
    'city-center': '-hotel-at-salzburg'
  }
  const cityId = cityMap[tripType] || '-hotel-at-salzburg'

  return `https://www.booking.com/searchresults.html?ss=Salzburg%2C+Austria&checkin=${checkIn}&checkout=${checkOut}&group_adults=${adults}&group_children=${children}&no_rooms=${rooms}`
}

const generateAirbnbUrl = (checkIn: string, checkOut: string, adults: number, children: number): string => {
  const guests = adults + children
  return `https://www.airbnb.com/s/Salzburg--Austria/homes?checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}`
}

const generateFlightUrl = (departureDate: string, returnDate: string): string => {
  return `https://www.google.com/flights?q=flights+to+salzburg+on+${departureDate}+returning+${returnDate}`
}

const goToChat = (presetMessage: string) => {
  if (presetMessage) {
    emit('navigate', 'chat', presetMessage)
  } else {
    emit('navigate', 'chat')
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>

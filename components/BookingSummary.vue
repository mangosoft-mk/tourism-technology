<template>
  <div class="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20 w-full h-full">
    <!-- Header with icon -->
    <div class="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
      <div class="bg-gradient-to-br from-orange-400 to-pink-500 p-3 rounded-xl shadow-lg">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-white">Trip Summary</h2>
    </div>

    <!-- Summary Items -->
    <div class="space-y-4">
      <SummaryItem
        icon="calendar"
        label="Check-in Date"
        :value="details.checkInDate"
      />
      <SummaryItem
        icon="moon"
        label="Nights"
        :value="details.nights"
      />
      <SummaryItem
        icon="users"
        label="Adults"
        :value="details.adults"
      />
      <SummaryItem
        icon="child"
        label="Children"
        :value="details.children"
      />
      <SummaryItem
        icon="age"
        label="Children Ages"
        :value="details.childrenAges ? details.childrenAges.join(', ') : null"
      />
    </div>

    <!-- Decorative element -->
    <div class="mt-6 pt-6 border-t border-white/20">
      <div class="flex items-center justify-center gap-2 text-cyan-300 text-sm">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <span class="font-medium">AI-Powered Smart Booking</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BookingDetails } from '../types'
import SummaryItem from './SummaryItem.vue'

interface Props {
  details: BookingDetails
}

defineProps<Props>()
</script>

<style scoped>
/* Add subtle animation on mount */
.bg-white\/10 {
  animation: slideInLeft 0.5s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

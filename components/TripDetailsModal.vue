<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" @click.self="closeModal">
        <div class="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all">
          <!-- Header -->
          <div class="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                </svg>
                <h3 class="text-2xl font-bold">{{ tripTitle }}</h3>
              </div>
              <button @click="closeModal" class="text-white hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <p class="text-green-100 mt-2">{{ tripDescription }}</p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
            <!-- Start Date -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Start Date
              </label>
              <input
                v-model="formData.startDate"
                type="date"
                required
                :min="today"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            <!-- Number of Days -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Number of Days
              </label>
              <input
                v-model.number="formData.days"
                type="number"
                min="1"
                max="30"
                required
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            <!-- Number of Adults -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Number of Adults
              </label>
              <input
                v-model.number="formData.adults"
                type="number"
                min="1"
                max="10"
                required
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            <!-- Number of Children -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Number of Children
              </label>
              <input
                v-model.number="formData.children"
                type="number"
                min="0"
                max="10"
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            <!-- Children Ages (if children > 0) -->
            <div v-if="formData.children > 0" class="space-y-3">
              <label class="block text-sm font-semibold text-gray-700">
                Children Ages
              </label>
              <div class="grid grid-cols-2 gap-3">
                <div v-for="i in formData.children" :key="i">
                  <input
                    v-model.number="childrenAges[i - 1]"
                    type="number"
                    :placeholder="`Child ${i} age`"
                    min="0"
                    max="17"
                    required
                    class="w-full px-4 py-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex gap-3 pt-4">
              <button
                type="button"
                @click="closeModal"
                class="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Search Trips
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface TripDetails {
  startDate: string
  days: number
  adults: number
  children: number
  childrenAges: number[]
}

interface Props {
  show: boolean
  tripType: string
  tripTitle?: string
  tripDescription?: string
}

const props = withDefaults(defineProps<Props>(), {
  tripTitle: 'Plan Your Trip',
  tripDescription: 'Tell us about your travel plans'
})

const emit = defineEmits<{
  close: []
  submit: [details: TripDetails]
}>()

const today = computed(() => {
  const date = new Date()
  return date.toISOString().split('T')[0]
})

const formData = ref({
  startDate: '',
  days: 7,
  adults: 2,
  children: 0
})

const childrenAges = ref<number[]>([])

// Reset children ages when number of children changes
watch(() => formData.value.children, (newVal) => {
  childrenAges.value = new Array(newVal).fill(0)
})

const closeModal = () => {
  emit('close')
}

const handleSubmit = () => {
  const details: TripDetails = {
    startDate: formData.value.startDate,
    days: formData.value.days,
    adults: formData.value.adults,
    children: formData.value.children,
    childrenAges: childrenAges.value.slice(0, formData.value.children)
  }
  emit('submit', details)
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}
</style>

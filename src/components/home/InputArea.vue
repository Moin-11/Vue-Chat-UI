<template>
  <div class="bg-gray-800 p-4 ">
    <div class="grid grid-cols-2 gap-2 mb-2">
      <button
        v-for="action in quickActions"
        :key="action.text"
        @click="$emit('quick-action', action)"
        class="bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-4 rounded flex items-center justify-center"
      >
        <font-awesome-icon :icon="action.icon" class="mr-2" />
        {{ action.text }}
      </button>
    </div>
    <div class="flex items-center">
      <input
        v-model="inputText"
        @keyup.enter="sendMessage"
        type="text"
        placeholder="Message ChatGPT"
        class="flex-grow bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none"
      />
      <button 
        @click="sendMessage" 
        class="bg-green-500 hover:bg-green-600 text-white px-3 h-full py-2 ml-1 rounded-r "
      >
        <font-awesome-icon icon="paper-plane" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  quickActions: { type: Array, required: true }
})

const emit = defineEmits(['send-message', 'quick-action'])

const inputText = ref('')

const sendMessage = () => {
  if (inputText.value.trim()) {
    emit('send-message', inputText.value)
    inputText.value = ''
  }
}
</script>
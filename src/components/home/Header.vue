<template>
  <header class="bg-gray-900 py-2 px-4 flex items-center justify-between border-b border-gray-700">
    <div class="flex items-center space-x-2">
      <button @click="$emit('toggle-sidebar')" class="text-gray-400 hover:text-white p-1">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
      <button @click="$emit('new-chat')" class="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700 flex items-center">
        <span class="mr-2">New chat</span>
        <font-awesome-icon :icon="['fas', 'plus']" class="text-xs" />
      </button>
      <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-gray-400 text-xs ml-1" />
    </div>
    <div class="flex items-center">
      <h1 class="text-white font-medium">{{ title }}</h1>
    </div>
    <div class="flex items-center">
      <img :src="logo" alt="User" class="w-8 h-8 rounded-full" />
    </div>
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import logo from "@/assets/img/logo.png"

defineProps({
  title: { type: String, default: 'VueGPT' },
  isSidebarOpen: { type: Boolean, required: true }
})

defineEmits(['toggle-sidebar', 'new-chat'])
</script>
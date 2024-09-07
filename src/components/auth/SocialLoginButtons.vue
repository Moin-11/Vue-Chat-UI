<template>
    <div class="space-y-3">
      <button
        v-for="provider in providers"
        :key="provider.name"
        @click="handleLogin(provider.name)"
        class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <FontAwesomeIcon :icon="provider.icon" class="w-5 h-5 mr-2" />
        Continue with {{ provider.name }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue'
  
  const providers = ref([
    { name: 'Google', icon: 'fa-brands fa-google' },
    { name: 'Microsoft Account', icon: 'fa-brands fa-microsoft' },
    { name: 'Apple', icon: 'fa-brands fa-apple' },
  ])
  
  const handleLogin = (providerName) => {
    console.log(`Logging in with ${providerName}`)
    // Implement social login 
  }
  </script>
<template>
    <form @submit.prevent="submitForm" class="mb-4">
      <div class="mb-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email address*"
          required
          @blur="checkEmail"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div v-if="showPassword" class="mb-4">
        <div class="relative">
          <input
            v-model="password"
            :type="showPasswordText ? 'text' : 'password'"
            placeholder="Password*"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
          />
          <button 
            type="button" 
            @click="togglePasswordVisibility" 
            class="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <i :class="['fas', showPasswordText ? 'fa-eye-slash' : 'fa-eye', 'text-gray-400']"></i>
          </button>
        </div>
        <a href="#" class="text-green-600 text-sm mt-1 inline-block hover:underline">Forgot password?</a>
      </div>
      <button
        type="submit"
        class="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Continue
      </button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)
  const showPasswordText = ref(false)
  const emit = defineEmits(['submit'])
  
  const checkEmail = () => {
    if (email.value) {
      showPassword.value = true
    }
  }
  
  const togglePasswordVisibility = () => {
    showPasswordText.value = !showPasswordText.value
  }
  
  const submitForm = () => {
    if (!showPassword.value) {
      checkEmail()
    } else {
      emit('submit', { email: email.value, password: password.value })
    }
  }
  </script>
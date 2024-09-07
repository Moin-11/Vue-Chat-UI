<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img :src="logo" alt="Logo" class="w-16 h-16 mb-8" />
      <h1 class="text-3xl font-bold mb-8 text-gray-800">Welcome back</h1>
      <div class="w-full max-w-md">
        <EmailForm @submit="handleSubmit" />
        <p class="text-center my-4 text-sm text-gray-600">
          Don't have an account? <a href="#" class="text-green-600 hover:underline">Sign Up</a>
        </p>
        <div class="text-center my-4 text-sm text-gray-400">OR</div>
        <SocialLoginButtons />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import logo from "@/assets/img/logo.png"
  import EmailForm from '@/components/auth/EmailForm.vue'
  import SocialLoginButtons from '@/components/auth/SocialLoginButtons.vue'
  
  const router = useRouter()
  
  const handleSubmit = ({ email, password }) => {
    console.log('Submitted:', { email, password })
    // simulate a successful login
    router.push('/')
  }
  </script>
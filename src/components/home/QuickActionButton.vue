<template>
    <button 
      @click="$emit('click')" 
      class="bg-gray-600 hover:bg-gray-500 rounded p-2 text-sm flex items-center justify-center"
    >
      <i :class="icon" class="mr-2"></i> 
      {{ text }}
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  defineProps({
    icon: { type: String, required: true },
    text: { type: String, required: true }
  })
  
  defineEmits(['click'])
  </script>
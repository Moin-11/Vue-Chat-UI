<template>
  <div :class="['bg-gray-800 text-white transition-all', isOpen ? 'w-64' : 'w-0 overflow-hidden']">
    <div class="p-4">
      <button @click="$emit('new-chat')" class="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-4">
        <i class="fas fa-plus mr-2"></i> New chat
      </button>
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item" class="mb-2">
            <a href="#" @click="$emit('select-menu', item)" class="hover:bg-gray-700 px-2 py-1 rounded block">
              <i class="fas fa-comments mr-2"></i>{{ item }}
            </a>
          </li>
        </ul>
      </nav>
      <div v-if="recentItems.length > 0" class="mt-4">
        <h3 class="text-sm font-semibold mb-2">Recent</h3>
        <ul>
          <li v-for="item in recentItems" :key="item" class="mb-1">
            <a href="#" @click="$emit('select-recent', item)" class="text-sm hover:underline">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  menuItems: { type: Array, required: true },
  recentItems: { type: Array, required: true },
  isOpen: { type: Boolean, required: true }
})

defineEmits(['select-menu', 'select-recent', 'new-chat'])
</script>
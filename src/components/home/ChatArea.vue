<template>
  <main class="flex-1 overflow-y-auto p-4">
    <div v-for="message in messagesArray" :key="message.id" class="mb-4">
      <div 
        :class="[
          'p-2 rounded max-w-[80%]', 
          message.isUser 
            ? 'bg-blue-500 ml-auto' 
            : 'bg-gray-700 mr-auto'
        ]"
      >
        <div v-if="message.isUser">{{ message.content }}</div>
        <div v-else v-html="formatContent(message.content)"></div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { defineProps, toRefs, watch } from 'vue'

const props = defineProps({
  messages: { type: Array, required: true }
})

const { messages: messagesArray } = toRefs(props)

watch(messagesArray, (newMessages) => {
  console.log('Messages updated in ChatArea:', newMessages);
}, { deep: true });

const formatContent = (content) => {
  console.log('Formatting content:', content);  

  // Split the content by newlines and wrap each line in a <p> tag
  return content.split('\n').map(line => `<p>${line}</p>`).join('')
}


</script>
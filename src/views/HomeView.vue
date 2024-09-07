<template>
  <div class="flex h-screen bg-gray-900 text-white">
    <SideBar
      :menu-items="menuItems"
      :recent-items="recentItems"
      @select-menu="handleMenuSelect"
      @select-recent="handleRecentSelect"
      :is-open="isSidebarOpen"
      @new-chat="newChat"
    />
    <div class="flex-1 flex flex-col">
      <Header 
        :title="currentChat" 
        @toggle-sidebar="toggleSidebar" 
        @new-chat="newChat"
        :is-sidebar-open="isSidebarOpen"
         />
      <ChatArea :messages="messages" />
      <InputArea
        :quick-actions="quickActions"
        @send-message="sendMessage"
        @quick-action="handleQuickAction"
      />
    </div>
  </div>
</template>

<script setup>
import { ref,  reactive } from 'vue'
import SideBar from '@/components/home/SideBar.vue'
import Header from '@/components/home/Header.vue'
import ChatArea from '@/components/home/ChatArea.vue'
import InputArea from '@/components/home/InputArea.vue'

const menuItems = ref(['VueGPT', 'Explore GPTs'])
const recentItems = ref([])
const quickActions = ref([
  { text: 'Create an illustration for a bakery', icon: 'fas fa-paint-brush' },
  { text: 'Plan a relaxing day', icon: 'fas fa-umbrella-beach' },
  { text: 'Create a workout plan', icon: 'fas fa-dumbbell' },
  { text: 'Python script for daily email reports', icon: 'fas fa-envelope-open-text' }
])

const currentChat = ref('VueGPT')
const messages = ref([])
const isSidebarOpen = ref(true)

let eventSource;

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

//Toggles the sidebar open/closed state.
const handleMenuSelect = (item) => {
  currentChat.value = item
}

const handleRecentSelect = (item) => {
}


const sendMessage = async (text) => {
  const userMessage = { id: Date.now(), content: text, isUser: true };
  messages.value.push(userMessage);

  const aiMessage = reactive({ id: Date.now() + 1, content: '', isUser: false });
  messages.value.push(aiMessage);

  if (eventSource) {
    eventSource.close();
  }

  eventSource = new EventSource(`http://localhost:5000/events`);

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received SSE data:', data);  
    if (data.message) {
      aiMessage.content += data.message + '\n';
    } else if (data.content) {
      aiMessage.content += data.content + '\n';
    }
    console.log('Updated AI message:', aiMessage.content); 
  };

  eventSource.onerror = (error) => {
    console.error('SSE error:', error);
    eventSource.close();
  };

  eventSource.addEventListener('close', () => {
    eventSource.close();
  });
}





</script>




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
          @send-message="sendMessagefapi"
          @quick-action="handleQuickAction"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onUnmounted } from 'vue'
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
  
  const handleMenuSelect = (item) => {
    currentChat.value = item
  }
  
  const handleRecentSelect = (item) => {
    // Implement recent item selection logic
  }
  
  const newChat = () => {
    // Implement new chat logic
  }
  
  const handleQuickAction = (action) => {
    // Implement quick action logic
    sendMessagefapi(action.text)
  }
  
  const sendMessagefapi = async (text) => {
    const userMessage = { id: Date.now(), content: text, isUser: true };
    messages.value.push(userMessage);
  
    const aiMessage = reactive({ 
      id: Date.now() + 1, 
      content: '', 
      isUser: false,
      isTyping: true
    });
    messages.value.push(aiMessage);
  
    if (eventSource) {
      eventSource.close();
    }
  
    eventSource = new EventSource(`http://localhost:8000/stream`);
  
    let buffer = '';
  
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received SSE data:', data);
      
      if (data.content) {
        buffer += data.content;
        aiMessage.content = buffer;
        aiMessage.isTyping = false;
      }
    };
  
    eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      eventSource.close();
      aiMessage.isTyping = false;
    };
  }
  
  onUnmounted(() => {
    if (eventSource) {
      eventSource.close();
    }
  })
  </script>
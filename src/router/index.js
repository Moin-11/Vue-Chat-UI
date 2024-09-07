import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AuthView from '@/views/AuthView.vue';
import HomeView2 from '@/views/HomeView2.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView},
    {
      path: "/home",
      name: "home2",
      component: HomeView2
    }
  ],
});

export default router;
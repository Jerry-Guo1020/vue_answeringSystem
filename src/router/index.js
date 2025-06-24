import Texting from '@/views/texting.vue'
import Welcome from '@/views/welcome.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
     {
      path: '/texting',
      name: 'texting',
      component: Texting,
    },
    
  ],
})

export default router

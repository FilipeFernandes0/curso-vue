import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../views/AppView.vue'
import PortugueseView from '../views/PortugueseView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
   ,
    {
      path: '/',
      name: 'app',
      component: AppView
    },
    {
      path: '/portuguese-liga',
      name: 'portuguese',
      component: PortugueseView
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from  '../views/AboutView.vue'
import LocalStorage from  '../views/LocalStorage.vue'
import RefactorView from  '../views/RefactorView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/local',
      name: 'local',
      component: LocalStorage
    },
    {
      path: '/refactor',
      name: 'refactor',
      component: RefactorView
    },

  ]
})

export default router

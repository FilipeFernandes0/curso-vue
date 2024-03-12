import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../views/AppView.vue'
import DetalhesView from '../views/DetalhesView.vue'
import DetalhedaTemporada from '../views/DetalhedaTemporada.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App',
      component: AppView
    },
    {
      path: '/detalhes-view/:leagueId',
      name: 'detalhes-view',
      component: DetalhesView,
      props: true
 
    },
    {
      path: '/liga/:leagueId/temporada/:year',
      name: 'detalhes-temporada',
      component: DetalhedaTemporada,
      props: true
 
    },
    
  ]
})

export default router

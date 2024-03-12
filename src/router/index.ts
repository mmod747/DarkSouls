import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormVeiw from '../views/FormVeiw.vue'
import GameCat from '../views/GameCat.vue'
import GameDetails from '../views/GameDetails.vue'
import MMORP from '../views/category/MMORPG.vue'
import Shooter from '@/views/category/Shooter.vue'
import MOBA from '@/views/category/MOBA.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: GameDetails
    },


    {
      path: '/category',
      name: 'category',
      component: GameCat,
      children: [
        {
          path: '/MMORPG',
          name: 'MMORPG',
          component: MMORP
        },
        {
          path: '/Shooter',
          name: 'Shooter',
          component: Shooter
        },
        {
          path: '/MOBA',
          name: 'MOBA',
          component: MOBA
        },


      ]
    }, {
      path: '/Form',
      name: 'Form',
      component: FormVeiw
    },

  ]
})

export default router
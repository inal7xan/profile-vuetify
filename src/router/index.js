import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/player',
      name: 'player',
      component: () => import('../views/MusicView.vue')
    },
    {
      path: '/book',
      name: 'Book',
      component: () => import('../views/BookView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/post',
      name: 'Post',
      component: () => import('../views/PostView.vue')
    }
  ]
})

export default router

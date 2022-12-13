import { createRouter, createWebHistory } from 'vue-router'
import ViewPosts from '@/views/ViewPosts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: ViewPosts
    }
  ]
})

export default router

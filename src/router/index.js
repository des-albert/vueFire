import { createRouter, createWebHistory } from 'vue-router'
import ViewPosts from '@/views/ViewPosts.vue'
import AddPost from '@/views/AddPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: ViewPosts
    },
    {
      path: '/addPost',
      name: 'addPost',
      component: AddPost
    }
  ]
})

export default router

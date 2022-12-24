import { createRouter, createWebHistory } from 'vue-router'
import ViewPosts from '@/views/ViewPosts.vue'
import AddPost from '@/views/AddPost.vue'
import EditPost from '@/views/EditPost.vue'

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
    },
    {
      path: '/editPost:id',
      name: 'editPost',
      component: EditPost

    }
  ]
})

export default router

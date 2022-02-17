import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import newBlog from '../components/NewBlog'
import Blog from '../components/Blog'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newBlog',
    name: 'newBlog',
    component: newBlog
  },
  {
    path: '/blog/:id',
    name: 'blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

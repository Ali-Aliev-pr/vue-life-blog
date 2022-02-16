import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import newBlog from '../components/NewBlog'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

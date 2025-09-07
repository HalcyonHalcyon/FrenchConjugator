import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Quiz from '../Quiz.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/quiz', component: Quiz },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

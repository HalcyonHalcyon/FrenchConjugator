import { createRouter, createWebHistory } from 'vue-router'
import Quiz from '../Quiz.vue'

const routes = [
  { path: '/quiz', component: Quiz },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
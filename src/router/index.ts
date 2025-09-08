import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../Home.vue'
import Quiz from '../Quiz.vue'

const routes = [
  { path: '/', component: App},
  { path: '/home', component: Home },
  { path: '/quiz', component: Quiz }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

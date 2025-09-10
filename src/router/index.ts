import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../Home.vue'
import Quiz from '../Quiz.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/quiz', component: Quiz, name: 'Quiz' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../Home.vue'
import Quiz from '../Quiz.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/quiz', component: Quiz }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

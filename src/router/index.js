import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ManagementView from '../views/ManagementView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/management',
    name: 'Management',
    component: ManagementView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

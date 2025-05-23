// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Resource from '../views/Resource.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/resource', component: Resource }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

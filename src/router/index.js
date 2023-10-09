import { createRouter, createWebHistory } from 'vue-router'
import EmployeeComponent from '../components/EmployeeComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EmployeeComponent',
      component: EmployeeComponent
    }
  ]
})

export default router

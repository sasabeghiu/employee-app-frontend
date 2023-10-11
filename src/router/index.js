import { createRouter, createWebHistory } from 'vue-router'
import EmployeeManage from '../views/EmployeeManage.vue'
import EmployeeAddView from '../views/EmployeeAddView.vue'
import EmployeeView from '../views/EmployeeView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/employees',
      name: 'EmployeeManage',
      component: EmployeeManage
    },
    {
      path: '/employeesform',
      name: 'EmployeeAddView',
      component: EmployeeAddView
    },
    {
      path: '/employeesview',
      name: 'EmployeeView',
      component: EmployeeView
    }
  ]
})

export default router

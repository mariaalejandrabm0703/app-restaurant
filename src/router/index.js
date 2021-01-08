import Vue from 'vue'
import VueRouter from 'vue-router'
import Transactions from '../views/Transactions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/buyers',
    name: 'Buyers',
    component: () => import('../views/Buyers.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

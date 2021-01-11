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
  },
  {
    path: '/buyer/:id',
    name: 'BuyerDetails',
    component: () => import('../views/BuyerDetails.vue')
  },
  {
    path: '/buyer/:id/products_details/',
    name: 'SimpleTable1',
    component: () => import('../components/SimpleTable.vue')
  },
  {
    path: '/transactions/products_details/',
    name: 'SimpleTable2',
    component: () => import('../components/SimpleTable.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

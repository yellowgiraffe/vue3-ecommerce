import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ProductView from '../views/ProductView.vue'
import BlogView from '../views/BlogView.vue'
import ReformView from '../views/ReformView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ShopView,
    },
    {
      path: "/products/:id",
      component: ProductView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/productReform',
      name: 'productReform',
      component: ReformView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: HomeView,
    },
  ]
})

export default router

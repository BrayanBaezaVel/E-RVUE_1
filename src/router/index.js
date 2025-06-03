import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Homepage.vue'
import Usuario from '../views/usuario.vue'
import RegUser from '@/views/regUser.vue'
import Productos from '@/views/productos.vue'
import RegProduct from '@/views/regProduct.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/usuario', component: Usuario },
  {path: '/reg-user',component: RegUser},
  {path: '/productos',component: Productos},
  {path: '/reg-product',component: RegProduct}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

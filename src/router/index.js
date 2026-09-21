import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'inicio', component: () => import('../views/HomeView.vue') },
  { path: '/nosotros', name: 'nosotros', component: () => import('../views/NosotrosView.vue') },
  { path: '/museo', name: 'museo', component: () => import('../views/MuseoView.vue') },
  { path: '/productos', name: 'productos', component: () => import('../views/ProductosView.vue') },
  { path: '/galeria', name: 'galeria', component: () => import('../views/GaleriaView.vue') },
  { path: '/contacto', name: 'contacto', component: () => import('../views/ContactoView.vue') },
]

const router = createRouter({
  // Hash history: funciona en GitHub Pages sin configuración de servidor adicional.
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

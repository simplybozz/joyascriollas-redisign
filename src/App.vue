<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSite from './components/FooterSite.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'

// Pantalla de carga también al entrar a una página hija, no solo al abrir
// la app por primera vez: reutiliza el mismo loader del arranque (misma
// marca, mismo giro) para que cada navegación se sienta como una carga
// real, igual que en el rediseño de EGEMERD (ahí cada página es un
// documento nuevo y muestra su propio loader al cargar; aquí se simula
// ese mismo momento con un mínimo de tiempo visible).
const router = useRouter()
const showLoader = ref(false)
let hideTimer = null
let navStart = 0
const MIN_VISIBLE_MS = 480

router.beforeEach((to, from) => {
  if (to.path === from.path) return true
  window.clearTimeout(hideTimer)
  navStart = performance.now()
  showLoader.value = true
  return true
})

router.afterEach((to, from) => {
  if (to.path === from.path) return
  const elapsed = performance.now() - navStart
  const wait = Math.max(0, MIN_VISIBLE_MS - elapsed)
  hideTimer = window.setTimeout(() => {
    showLoader.value = false
  }, wait)
})

onBeforeUnmount(() => {
  window.clearTimeout(hideTimer)
})
</script>

<template>
  <div class="app-shell">
    <div class="app-loader route-loader" :class="{ 'is-hidden': !showLoader }" aria-hidden="true">
      <div class="app-loader-mark"><div class="app-loader-ring"></div></div>
    </div>

    <NavBar />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <FooterSite />
    <WhatsAppFloat />
  </div>
</template>

<style>
.app-shell {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}

/* El estilo visual de .app-loader (fondo, spinner) vive en el <style>
   inline de index.html a propósito, para que la primerísima carga no
   dependa del bundle de Vue. Esta clase aquí solo reutiliza ese mismo
   look al navegar entre páginas.

   La entrada es rápida a propósito (que "salga" el loading de inmediato
   al hacer clic, sin quedar medio transparente encima de la página
   anterior) y la salida es lenta y suave (el mismo fundido de 0.7s del
   arranque), para que se sienta smooth al revelar la página nueva. */
.route-loader {
  transition-duration: 0.12s;
}
.route-loader.is-hidden {
  transition-duration: 0.7s;
}
</style>

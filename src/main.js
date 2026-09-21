import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { revealDirective } from './composables/useReveal'

const app = createApp(App)
app.directive('reveal', revealDirective)
app.use(router)
app.mount('#app')

// Retira la pantalla de carga inicial con un fundido suave. Se le da un
// tiempo mínimo visible para que no sea un simple parpadeo, igual que en
// el rediseño de EGEMERD.
const loader = document.getElementById('app-loader')
if (loader) {
  const MIN_VISIBLE_MS = 550
  window.setTimeout(() => {
    loader.classList.add('is-hidden')
    window.setTimeout(() => loader.remove(), 750)
  }, MIN_VISIBLE_MS)
}

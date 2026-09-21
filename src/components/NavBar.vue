<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { PhList, PhX } from '@phosphor-icons/vue'
import { nav, brand } from '../data/content'

const isOpen = ref(false)
const route = useRoute()

watch(
  () => route.path,
  () => {
    isOpen.value = false
  }
)
</script>

<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <router-link to="/" class="brand" @click="isOpen = false">
        <span class="brand-mark">JC</span>
        <span class="brand-word">
          {{ brand.name }}
          <small>Est. {{ brand.since }}</small>
        </span>
      </router-link>

      <nav class="links" aria-label="Navegación principal">
        <router-link v-for="item in nav" :key="item.to" :to="item.to" class="link">
          {{ item.label }}
        </router-link>
      </nav>

      <a href="#contacto" class="btn btn-outline cta-desktop" @click.prevent="$router.push('/contacto')">
        Escríbenos
      </a>

      <button class="menu-toggle" :aria-expanded="isOpen" aria-label="Abrir menú" @click="isOpen = !isOpen">
        <PhX v-if="isOpen" size="22" weight="light" />
        <PhList v-else size="22" weight="light" />
      </button>
    </div>

    <transition name="menu-fade">
      <nav v-if="isOpen" class="mobile-panel" aria-label="Navegación móvil">
        <router-link v-for="item in nav" :key="item.to" :to="item.to" class="mobile-link">
          {{ item.label }}
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(13, 11, 8, 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}

.navbar-inner {
  height: 72px;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.brand {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-right: auto;
  flex-shrink: 0;
}

.brand-mark {
  font-family: var(--font-display);
  font-size: 1.7rem;
  color: var(--gold);
  font-style: italic;
}

.brand-word {
  font-family: var(--font-display);
  font-size: 1.15rem;
  letter-spacing: 0.03em;
  color: var(--ink);
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-word small {
  font-family: var(--font-body);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  color: var(--ink-faint);
  text-transform: uppercase;
}

.links {
  display: none;
  align-items: center;
  gap: 1.9rem;
}

.link {
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink-muted);
  position: relative;
  padding: 0.3rem 0;
  transition: color 0.3s var(--ease);
}

.link:hover,
.link.router-link-exact-active {
  color: var(--gold-soft);
}

.link.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 1px;
  background: var(--gold);
}

.cta-desktop {
  display: none;
  padding: 0.65rem 1.3rem;
  font-size: 0.72rem;
}

.menu-toggle {
  background: none;
  border: none;
  color: var(--ink);
  display: flex;
  cursor: pointer;
  padding: 0.4rem;
}

.mobile-panel {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
  background: var(--bg);
}

.mobile-link {
  padding: 1.05rem var(--gutter);
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink-muted);
  border-bottom: 1px solid var(--line);
}

.mobile-link.router-link-exact-active {
  color: var(--gold-soft);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.25s var(--ease);
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

@media (min-width: 900px) {
  .links {
    display: flex;
  }
  .cta-desktop {
    display: inline-flex;
  }
  .menu-toggle {
    display: none;
  }
}
</style>

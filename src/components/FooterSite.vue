<script setup>
import { PhInstagramLogo, PhFacebookLogo, PhEnvelope, PhPhone, PhMapPin } from '@phosphor-icons/vue'
import { brand, contact, nav } from '../data/content'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="f-brand">
        <span class="brand-mark">JC</span>
        <h3>{{ brand.name }}</h3>
        <p class="lede small">{{ brand.tagline }}</p>
        <div class="socials">
          <a :href="contact.instagram" target="_blank" rel="noopener" aria-label="Instagram">
            <PhInstagramLogo size="20" weight="light" />
          </a>
          <a :href="contact.facebook" target="_blank" rel="noopener" aria-label="Facebook">
            <PhFacebookLogo size="20" weight="light" />
          </a>
        </div>
      </div>

      <div class="f-col">
        <span class="eyebrow">Navegación</span>
        <router-link v-for="item in nav" :key="item.to" :to="item.to">{{ item.label }}</router-link>
      </div>

      <div class="f-col">
        <span class="eyebrow">Contacto</span>
        <a :href="`mailto:${contact.email}`"><PhEnvelope size="16" weight="light" /> {{ contact.email }}</a>
        <a :href="`tel:+1${contact.phone.replace(/-/g, '')}`"><PhPhone size="16" weight="light" /> {{ contact.phone }}</a>
        <span class="addr"><PhMapPin size="16" weight="light" /> {{ contact.address }}</span>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; {{ year }} {{ brand.legalName }}. Todos los derechos reservados.</p>
      <p class="credit">Propuesta de rediseño</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-elevated);
  border-top: 1px solid var(--line);
  padding: clamp(3rem, 6vw, 5rem) 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr;
  gap: 3rem;
  padding-bottom: 3rem;
}

.f-brand .brand-mark {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 2.2rem;
  color: var(--gold);
}

.f-brand h3 {
  margin-top: 0.4rem;
  font-size: 1.5rem;
}

.lede.small {
  font-size: 0.92rem;
  margin-top: 0.5rem;
}

.socials {
  display: flex;
  gap: 0.9rem;
  margin-top: 1.4rem;
}

.socials a {
  width: 38px;
  height: 38px;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-muted);
  transition: border-color 0.3s var(--ease), color 0.3s var(--ease);
}

.socials a:hover {
  border-color: var(--gold);
  color: var(--gold-soft);
}

.f-col {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.f-col a,
.f-col .addr {
  color: var(--ink-muted);
  font-size: 0.92rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  transition: color 0.3s var(--ease);
}

.f-col a:hover {
  color: var(--gold-soft);
}

.footer-bottom {
  border-top: 1px solid var(--line);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: var(--ink-faint);
}

@media (max-width: 780px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.2rem;
  }
}
</style>

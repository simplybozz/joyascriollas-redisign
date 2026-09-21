<script setup>
import { PhWhatsappLogo } from '@phosphor-icons/vue'
import { contact } from '../data/content'

const href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  'Hola Joyas Criollas, me gustaría más información.'
)}`
</script>

<template>
  <a :href="href" target="_blank" rel="noopener" class="wa-float" aria-label="Escribir por WhatsApp">
    <PhWhatsappLogo size="26" weight="fill" />
  </a>
</template>

<style scoped>
.wa-float {
  position: fixed;
  right: 1.4rem;
  bottom: 1.4rem;
  z-index: 60;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: var(--gold);
  color: #14110c;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  transition: transform 0.3s var(--ease), background-color 0.3s var(--ease);
}

.wa-float:hover {
  background: var(--gold-soft);
  transform: translateY(-3px);
}

.wa-float:active {
  transform: scale(0.96);
}
</style>

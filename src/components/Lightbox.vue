<script setup>
import { onMounted, onUnmounted } from 'vue'
import { PhX, PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue'

const props = defineProps({
  images: { type: Array, required: true },
  index: { type: Number, required: true },
})
const emit = defineEmits(['close', 'update:index'])

function next() {
  emit('update:index', (props.index + 1) % props.images.length)
}
function prev() {
  emit('update:index', (props.index - 1 + props.images.length) % props.images.length)
}
function onKey(e) {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="lightbox" role="dialog" aria-modal="true" @click.self="$emit('close')">
    <button class="lb-close" aria-label="Cerrar" @click="$emit('close')">
      <PhX size="22" weight="light" />
    </button>
    <button class="lb-nav lb-prev" aria-label="Anterior" @click="prev">
      <PhArrowLeft size="22" weight="light" />
    </button>
    <img :src="images[index].src" :alt="images[index].alt" class="lb-img" />
    <button class="lb-nav lb-next" aria-label="Siguiente" @click="next">
      <PhArrowRight size="22" weight="light" />
    </button>
    <p class="lb-caption">{{ images[index].alt }}</p>
  </div>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(9, 8, 6, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lb-img {
  max-width: min(90vw, 1100px);
  max-height: 78vh;
  object-fit: contain;
}

.lb-caption {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  text-align: center;
  color: var(--ink-muted);
  font-size: 0.85rem;
  padding: 0 4rem;
}

.lb-close {
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
  background: none;
  border: none;
  color: var(--ink);
  cursor: pointer;
}

.lb-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--ink);
  cursor: pointer;
  padding: 0.5rem;
}

.lb-prev {
  left: 1rem;
}
.lb-next {
  right: 1rem;
}

@media (min-width: 860px) {
  .lb-prev {
    left: 2rem;
  }
  .lb-next {
    right: 2rem;
  }
}
</style>

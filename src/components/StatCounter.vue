<script setup>
import { useCountUp } from '../composables/useCountUp'

const props = defineProps({
  value: { type: Number, required: true },
  suffix: { type: String, default: '' },
  label: { type: String, required: true },
  prefix: { type: String, default: '' },
})

const { value: animated, elRef } = useCountUp(props.value)
</script>

<template>
  <div ref="elRef" class="stat">
    <div class="stat-number">{{ prefix }}{{ animated.toLocaleString('es-DO') }}{{ suffix }}</div>
    <p class="stat-label">{{ label }}</p>
  </div>
</template>

<style scoped>
.stat-number {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 3.4rem);
  color: var(--gold-soft);
  font-weight: 500;
}

.stat-label {
  margin-top: 0.5rem;
  font-size: 0.88rem;
  color: var(--ink-muted);
  max-width: 26ch;
}
</style>

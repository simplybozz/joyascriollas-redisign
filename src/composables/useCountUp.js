import { ref, onMounted, onUnmounted } from 'vue'

// Anima un número desde 0 hasta `target` cuando el elemento referenciado
// entra en el viewport. Usa requestAnimationFrame (no setInterval) y se
// ejecuta una sola vez.
export function useCountUp(target, { duration = 1400 } = {}) {
  const value = ref(0)
  const elRef = ref(null)
  let started = false

  function animate() {
    if (started) return
    started = true

    const start = performance.now()
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      value.value = Math.round(eased * target)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  let observer
  onMounted(() => {
    if (!elRef.value || typeof IntersectionObserver === 'undefined') {
      animate()
      return
    }
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(elRef.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { value, elRef }
}

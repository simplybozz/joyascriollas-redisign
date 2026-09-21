// Directiva v-reveal: revela un elemento con fundido + desplazamiento al entrar
// en el viewport. Usa IntersectionObserver (no scroll listeners).
//
// Uso: <div v-reveal>...</div>  o  <div v-reveal="120">...</div> (delay en ms)

const observer =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const el = entry.target
              const delay = Number(el.dataset.revealDelay || 0)
              window.setTimeout(() => {
                el.classList.add('is-visible')
              }, delay)
              observer.unobserve(el)
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      )
    : null

export const revealDirective = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) {
      el.dataset.revealDelay = binding.value
    }
    if (observer) {
      observer.observe(el)
    } else {
      el.classList.add('is-visible')
    }
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}

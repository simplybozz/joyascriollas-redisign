<script setup>
import { categorias } from '../data/content'
import categoriaJoyeria from '../assets/img/hero-3.jpg'
import categoriaRegalos from '../assets/img/product-2.jpg'

const images = {
  'joyeria-fina': categoriaJoyeria,
  'regalos-corporativos': categoriaRegalos,
}
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container" v-reveal>
        <span class="eyebrow">Productos y servicios</span>
        <h1>De la joyería fina a la artesanía criolla</h1>
        <p class="lede">
          Trabajamos piedras y materias primas dominicanas, piedras preciosas internacionales,
          regalos corporativos personalizados y reparación de joyería y relojes.
        </p>
      </div>
    </section>

    <section
      v-for="(cat, i) in categorias"
      :key="cat.id"
      class="section cat-block"
      :class="{ 'cat-block-img': images[cat.id], reverse: images[cat.id] && i % 4 === 3 }"
    >
      <div class="container cat-block-grid">
        <div v-if="images[cat.id]" class="cat-block-img-wrap" v-reveal>
          <img :src="images[cat.id]" :alt="cat.titulo" />
        </div>
        <div class="cat-block-copy" v-reveal="images[cat.id] ? 120 : 0">
          <h2>{{ cat.titulo }}</h2>
          <p class="lede">{{ cat.resumen }}</p>
          <div class="chips">
            <span v-for="d in cat.detalle" :key="d" class="chip">{{ d }}</span>
          </div>
        </div>
      </div>
    </section>

    <hr class="hairline container" />

    <section class="section pricing-note">
      <div class="container" v-reveal>
        <p class="lede">
          Los precios en la tienda en línea se muestran en dólares estadounidenses como
          referencia para compras internacionales. En nuestra tienda física se pagan en pesos
          dominicanos, según la tasa del día. Todos nuestros productos son garantizados.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-head {
  padding: clamp(3.5rem, 8vw, 6rem) 0 clamp(2rem, 5vw, 3rem);
}

.page-head h1 {
  font-size: clamp(2.1rem, 4.4vw, 3.1rem);
  margin-top: 0.6rem;
  max-width: 20ch;
}

.page-head .lede {
  margin-top: 1.2rem;
  max-width: 60ch;
}

.cat-block {
  border-top: 1px solid var(--line);
}

.cat-block-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.2rem;
  align-items: start;
}

.cat-block-img-wrap img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.cat-block-copy h2 {
  font-size: clamp(1.6rem, 3vw, 2.15rem);
}

.cat-block-copy .lede {
  margin-top: 0.9rem;
}

.chips {
  margin-top: 1.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.chip {
  font-size: 0.8rem;
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  color: var(--ink-muted);
}

.pricing-note {
  padding-top: clamp(2.5rem, 5vw, 4rem);
}

.pricing-note .lede {
  max-width: 68ch;
  color: var(--ink-faint);
  font-size: 0.92rem;
}

@media (min-width: 860px) {
  .cat-block-img .cat-block-grid {
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
  }
  .cat-block-img.reverse .cat-block-img-wrap {
    order: 2;
  }
  .cat-block:not(.cat-block-img) .cat-block-copy {
    max-width: 780px;
  }
}
</style>

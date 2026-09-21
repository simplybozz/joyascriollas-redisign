<script setup>
import { ref } from 'vue'
import Lightbox from '../components/Lightbox.vue'
import { galeria } from '../data/content'
import heroImg1 from '../assets/img/hero-1.jpg'
import heroImg2 from '../assets/img/hero-2.jpg'
import heroImg3 from '../assets/img/hero-3.jpg'
import productImg2 from '../assets/img/product-2.jpg'

const imgMap = {
  'hero-1': heroImg1,
  'hero-2': heroImg2,
  'hero-3': heroImg3,
  'product-2': productImg2,
}

const items = galeria.map((g) => ({ ...g, src: imgMap[g.src] }))

const activeIndex = ref(null)
function open(i) {
  activeIndex.value = i
}
function close() {
  activeIndex.value = null
}
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container" v-reveal>
        <span class="eyebrow">Galería</span>
        <h1>Piezas de nuestra colección</h1>
        <p class="lede">Una muestra de las joyas y artesanías que trabajamos en Joyas Criollas.</p>
      </div>
    </section>

    <section class="section gallery-section">
      <div class="container gallery-masonry">
        <button
          v-for="(item, i) in items"
          :key="item.src"
          class="gallery-cell"
          :class="`cell-${i % 4}`"
          v-reveal="i * 80"
          @click="open(i)"
        >
          <img :src="item.src" :alt="item.alt" loading="lazy" />
        </button>
      </div>
    </section>

    <Lightbox
      v-if="activeIndex !== null"
      :images="items"
      :index="activeIndex"
      @close="close"
      @update:index="(i) => (activeIndex = i)"
    />
  </div>
</template>

<style scoped>
.page-head {
  padding: clamp(3.5rem, 8vw, 6rem) 0 clamp(2rem, 5vw, 3rem);
}

.page-head h1 {
  font-size: clamp(2.1rem, 4.4vw, 3.1rem);
  margin-top: 0.6rem;
}

.page-head .lede {
  margin-top: 1.2rem;
}

.gallery-masonry {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.gallery-cell {
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 1;
}

.gallery-cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
}

.gallery-cell:hover img {
  transform: scale(1.06);
}

@media (min-width: 700px) {
  .gallery-masonry {
    grid-template-columns: repeat(4, 1fr);
  }
  .cell-0 {
    grid-column: span 2;
    grid-row: span 2;
    aspect-ratio: auto;
  }
}
</style>

<script setup>
import { PhDiamond } from '@phosphor-icons/vue'
import { museo } from '../data/content'
import heroAmber from '../assets/img/hero-2.jpg'
import larimarImg from '../assets/img/hero-3.jpg'
</script>

<template>
  <div>
    <section class="museo-hero">
      <img :src="heroAmber" alt="" class="museo-hero-bg" />
      <div class="museo-hero-overlay"></div>
      <div class="container museo-hero-content" v-reveal>
        <span class="eyebrow">El museo</span>
        <h1>{{ museo.nombre }}</h1>
      </div>
    </section>

    <section class="section piece-feature">
      <div class="container piece-grid">
        <div class="piece-number" v-reveal>
          <span class="piece-value">{{ museo.piezaDestacada.peso }}</span>
          <span class="piece-caption">La pieza de ámbar más grande del mundo</span>
        </div>
        <div class="piece-copy" v-reveal="120">
          <p class="lede">{{ museo.descripcion }}</p>
          <p class="piece-detail">
            {{ museo.piezaDestacada.comparacion }}
          </p>
        </div>
      </div>
    </section>

    <hr class="hairline container" />

    <section class="section coleccion">
      <div class="container">
        <div class="section-head" v-reveal>
          <h2>Qué encontrarás en la colección</h2>
        </div>
        <div class="coleccion-grid">
          <div v-for="(item, i) in museo.coleccion" :key="item" class="coleccion-item" v-reveal="i * 70">
            <PhDiamond size="18" weight="light" />
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="larimar-banner">
      <img :src="larimarImg" alt="Dije de larimar montado en plata, hallado en República Dominicana" class="larimar-img" />
      <div class="container larimar-copy" v-reveal>
        <p class="lede">
          El Larimar, encontrado únicamente en República Dominicana hasta el momento, también
          tiene un lugar propio en la colección, con piezas de sus distintos tonos de azul.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.museo-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.museo-hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.museo-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(13, 11, 8, 0.35) 0%, rgba(13, 11, 8, 0.96) 92%);
}

.museo-hero-content {
  position: relative;
  z-index: 1;
  padding-bottom: 3.5rem;
}

.museo-hero-content h1 {
  font-size: clamp(2.1rem, 4.6vw, 3.2rem);
  margin-top: 0.6rem;
  max-width: 18ch;
}

.piece-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

.piece-number {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.piece-value {
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 8vw, 5.2rem);
  color: var(--gold-soft);
  line-height: 1;
}

.piece-caption {
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink-muted);
  max-width: 22ch;
}

.piece-copy .piece-detail {
  margin-top: 1rem;
  font-size: 0.92rem;
  color: var(--ink-faint);
}

.coleccion-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
}

.coleccion-item {
  background: var(--bg);
  padding: 1.6rem;
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
}

.coleccion-item svg {
  color: var(--gold);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.coleccion-item p {
  color: var(--ink-muted);
  font-size: 0.98rem;
}

.larimar-banner {
  position: relative;
  min-height: 45vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.larimar-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
}

.larimar-copy {
  position: relative;
  z-index: 1;
  margin-left: auto;
  max-width: 460px;
  padding: 3rem 1.5rem;
  background: rgba(13, 11, 8, 0.82);
}

@media (min-width: 860px) {
  .piece-grid {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 4rem;
  }
  .coleccion-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

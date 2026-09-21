<script setup>
import { PhCaretRight } from '@phosphor-icons/vue'
import { mission, brand } from '../data/content'
import legadoImg from '../assets/img/hero-1.jpg'
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container" v-reveal>
        <span class="eyebrow">Nosotros</span>
        <h1>Un oficio de familia, criollo desde 1979</h1>
        <p class="lede">
          {{ brand.legalName }} nació como una tienda familiar y hoy es reconocida por trabajar
          piedras y materias primas dominicanas con altísima calidad y atención personalizada.
        </p>
      </div>
    </section>

    <section class="section intro-split">
      <div class="container intro-grid">
        <div class="intro-img" v-reveal>
          <img :src="legadoImg" alt="Collar artesanal de larimar y ónix, Joyas Criollas" />
        </div>
        <div class="intro-copy" v-reveal="120">
          <h2>Materia prima dominicana, en cada pieza</h2>
          <p class="lede">
            Ámbar, larimar, cuerno de vaca, hueso, coco y nácar: todo lo que trabajamos sale de
            República Dominicana y pasa por manos artesanas antes de llegar a nuestra tienda en
            Ensanche El Vergel.
          </p>
        </div>
      </div>
    </section>

    <hr class="hairline container" />

    <section class="section mvv">
      <div class="container mvv-grid">
        <div class="mvv-card" v-reveal>
          <span class="eyebrow">Misión</span>
          <p>{{ mission.mision }}</p>
        </div>
        <div class="mvv-card" v-reveal="120">
          <span class="eyebrow">Visión</span>
          <p>{{ mission.vision }}</p>
        </div>
      </div>

      <div class="container valores" v-reveal="200">
        <span class="eyebrow">Valores</span>
        <div class="valores-list">
          <span v-for="(v, i) in mission.valores" :key="v">
            {{ v }}<span v-if="i < mission.valores.length - 1" class="dot" aria-hidden="true">·</span>
          </span>
        </div>
      </div>
    </section>

    <section class="section museo-cta">
      <div class="container museo-cta-inner" v-reveal>
        <h2>Detrás de la tienda, un museo</h2>
        <p class="lede">
          La colección privada de Noel Salvador Valette Abreu, con la pieza de ámbar más grande
          del mundo, está abierta a nuestros visitantes.
        </p>
        <router-link to="/museo" class="btn btn-outline">
          Conocer el museo <PhCaretRight size="14" weight="bold" />
        </router-link>
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
  max-width: 16ch;
}

.page-head .lede {
  margin-top: 1.2rem;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

.intro-img img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.intro-copy h2 {
  font-size: clamp(1.8rem, 3.4vw, 2.4rem);
}

.intro-copy .lede {
  margin-top: 1.1rem;
}

.mvv-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.mvv-card p {
  margin-top: 0.9rem;
  font-size: 1.05rem;
  color: var(--ink-muted);
  max-width: 52ch;
}

.valores-list {
  margin-top: 1rem;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  color: var(--gold-soft);
}

.valores-list .dot {
  color: var(--ink-faint);
  margin: 0 0.6rem;
  font-family: var(--font-body);
}

.museo-cta {
  border-top: 1px solid var(--line);
  text-align: center;
}

.museo-cta-inner h2 {
  font-size: clamp(1.8rem, 3.4vw, 2.4rem);
}

.museo-cta-inner .lede {
  margin: 1rem auto 0;
}

.museo-cta-inner .btn {
  margin-top: 2rem;
}

@media (min-width: 860px) {
  .intro-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4.5rem;
  }
  .mvv-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}
</style>

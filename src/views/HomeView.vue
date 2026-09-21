<script setup>
import { PhCaretRight, PhDiamond } from '@phosphor-icons/vue'
import StatCounter from '../components/StatCounter.vue'
import heroAmber from '../assets/img/hero-2.jpg'
import legadoImg from '../assets/img/hero-1.jpg'
import categoriaJoyeria from '../assets/img/hero-3.jpg'
import categoriaRegalos from '../assets/img/product-2.jpg'
import { mission, museo, categorias, galeria, contact } from '../data/content'

const imgMap = {
  'hero-1': legadoImg,
  'hero-2': heroAmber,
  'hero-3': categoriaJoyeria,
  'product-2': categoriaRegalos,
}

// Vitrina de 3 categorías en la portada: dos con foto real, una en texto.
const featuredIds = ['joyeria-fina', 'regalos-corporativos', 'artesania-criolla']
const featuredImages = { 'joyeria-fina': 'hero-3', 'regalos-corporativos': 'product-2' }
const featuredCategorias = featuredIds
  .map((id) => categorias.find((c) => c.id === id))
  .filter(Boolean)

const galeriaPreview = galeria.slice(0, 4)
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <h1 v-reveal>Ámbar y Larimar dominicano, tallado a mano desde 1979.</h1>
          <p class="lede" v-reveal="160">
            Joyería familiar en Santo Domingo con piedras y materias primas dominicanas, un museo
            propio y medio siglo de oficio criollo.
          </p>
          <div class="hero-actions" v-reveal="320">
            <router-link to="/productos" class="btn btn-primary">
              Ver colección <PhCaretRight size="15" weight="bold" />
            </router-link>
          </div>
        </div>
        <div class="hero-visual" v-reveal="200">
          <img :src="heroAmber" alt="Collar de ámbar dominicano en bruto, Joyas Criollas" />
          <div class="hero-visual-frame" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section stats-section">
      <div class="container">
        <span class="eyebrow" v-reveal>Nuestra historia en cifras</span>
        <div class="stats-row">
          <div class="stat" v-reveal="80">
            <div class="stat-number">1979</div>
            <p class="stat-label">Año de fundación de Joyas Criollas, S.A.</p>
          </div>
          <div v-reveal="160">
            <StatCounter :value="18" suffix=" lb" label="Peso de la pieza de ámbar más grande del mundo, en nuestro museo" />
          </div>
          <div v-reveal="240">
            <StatCounter :value="45" suffix="+" label="Años de trayectoria familiar en República Dominicana" />
          </div>
        </div>
      </div>
    </section>

    <hr class="hairline container" />

    <!-- LEGADO -->
    <section class="section legado">
      <div class="container legado-grid">
        <div class="legado-img" v-reveal>
          <img :src="legadoImg" alt="Collar artesanal de larimar y ónix con dije tallado" />
        </div>
        <div class="legado-copy" v-reveal="120">
          <h2>Un negocio de familia, con casi medio siglo de oficio</h2>
          <p class="lede">
            Todo lo que trabajamos nace de piedras y materias primas dominicanas: ámbar, larimar,
            cuerno de vaca, coco y nácar, transformados por manos artesanas en piezas que llevan a
            República Dominicana con ellas.
          </p>
          <router-link to="/nosotros" class="text-link">
            Conoce nuestra historia <PhCaretRight size="14" weight="bold" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- CATEGORIAS -->
    <section class="section categorias-section">
      <div class="container">
        <div class="section-head" v-reveal>
          <span class="eyebrow">Lo que hacemos</span>
          <h2>De la mina al mostrador</h2>
          <p class="lede">Piezas propias y encargos a medida, confeccionados con materiales criollos.</p>
        </div>

        <div class="cat-grid">
          <router-link
            v-for="(cat, i) in featuredCategorias"
            :key="cat.id"
            to="/productos"
            class="cat-card"
            :class="{ 'cat-card-photo': featuredImages[cat.id] }"
            v-reveal="i * 100"
          >
            <img
              v-if="featuredImages[cat.id]"
              :src="imgMap[featuredImages[cat.id]]"
              alt=""
              class="cat-bg"
            />
            <div class="cat-content">
              <PhDiamond size="20" weight="light" class="cat-icon" />
              <h3>{{ cat.titulo }}</h3>
              <p>{{ cat.resumen }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- MUSEO BANNER -->
    <section class="museo-banner">
      <img :src="heroAmber" alt="" class="museo-bg" />
      <div class="museo-overlay"></div>
      <div class="container museo-content" v-reveal>
        <span class="eyebrow">El museo</span>
        <h2>{{ museo.nombre }}</h2>
        <p class="lede">
          Alberga la pieza de ámbar más grande del mundo: {{ museo.piezaDestacada.peso }},
          encontrada el {{ museo.piezaDestacada.hallazgo }} en {{ museo.piezaDestacada.lugar }}.
        </p>
        <router-link to="/museo" class="btn btn-outline">
          Conocer el museo <PhCaretRight size="14" weight="bold" />
        </router-link>
      </div>
    </section>

    <!-- MANIFESTO -->
    <section class="section manifesto">
      <div class="container">
        <blockquote v-reveal>
          <p>&ldquo;{{ mission.mision }}&rdquo;</p>
          <cite>Joyas Criollas, S.A.</cite>
        </blockquote>
      </div>
    </section>

    <!-- GALERIA PREVIEW -->
    <section class="section galeria-preview">
      <div class="container">
        <div class="section-head" v-reveal>
          <h2>Piezas de nuestra colección</h2>
        </div>
        <div class="gal-grid">
          <router-link
            v-for="(item, i) in galeriaPreview"
            :key="item.src"
            to="/galeria"
            class="gal-item"
            v-reveal="i * 90"
          >
            <img :src="imgMap[item.src]" :alt="item.alt" />
          </router-link>
        </div>
        <div class="gal-cta" v-reveal>
          <router-link to="/galeria" class="text-link">
            Ver galería completa <PhCaretRight size="14" weight="bold" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="section cta-final">
      <div class="container cta-final-inner" v-reveal>
        <h2>Visítanos en Ensanche El Vergel</h2>
        <p class="lede">{{ contact.address }}</p>
        <div class="cta-actions">
          <router-link to="/contacto" class="btn btn-primary">Cómo llegar y horarios</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: clamp(3rem, 8vw, 5rem) 0 clamp(3rem, 6vw, 5rem);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

.hero-copy h1 {
  font-size: clamp(2.3rem, 5.2vw, 3.6rem);
  max-width: 14ch;
}

.hero-copy .lede {
  margin-top: 1.3rem;
}

.hero-actions {
  margin-top: 2.2rem;
}

.hero-visual {
  position: relative;
  padding: 14px;
  background: var(--bg-elevated);
  border: 1px solid var(--line);
}

.hero-visual img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
}

.hero-visual-frame {
  position: absolute;
  inset: 14px;
  border: 1px solid rgba(245, 239, 227, 0.18);
  pointer-events: none;
}

.stats-section {
  padding-top: clamp(2rem, 5vw, 3.5rem);
  padding-bottom: clamp(2.5rem, 5vw, 4rem);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

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

.legado-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

.legado-img img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.legado-copy h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.6rem);
}

.legado-copy .lede {
  margin-top: 1.1rem;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.6rem;
  color: var(--gold-soft);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--gold-dim);
  padding-bottom: 0.2rem;
  transition: border-color 0.3s var(--ease);
}

.text-link:hover {
  border-color: var(--gold-soft);
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.cat-card {
  position: relative;
  min-height: 320px;
  padding: 1.8rem;
  display: flex;
  align-items: flex-end;
  border: 1px solid var(--line);
  overflow: hidden;
  transition: border-color 0.35s var(--ease);
}

.cat-card:hover {
  border-color: var(--line-strong);
}

.cat-card:hover .cat-bg {
  transform: scale(1.05);
}

.cat-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
}

.cat-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(13, 11, 8, 0.15) 0%, rgba(13, 11, 8, 0.92) 100%);
}

.cat-card:not(.cat-card-photo)::after {
  background: var(--bg-elevated-2);
  opacity: 1;
}

.cat-content {
  position: relative;
  z-index: 1;
}

.cat-icon {
  color: var(--gold);
  margin-bottom: 0.7rem;
}

.cat-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.cat-content p {
  font-size: 0.9rem;
  color: var(--ink-muted);
}

.museo-banner {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.museo-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.museo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(13, 11, 8, 0.95) 20%, rgba(13, 11, 8, 0.55) 100%);
}

.museo-content {
  position: relative;
  z-index: 1;
  max-width: 620px;
  padding: 4rem 1.5rem;
}

.museo-content h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.6rem);
  margin-top: 0.6rem;
}

.museo-content .lede {
  margin-top: 1.1rem;
}

.museo-content .btn {
  margin-top: 2rem;
}

.manifesto blockquote {
  margin: 0;
  max-width: 780px;
  margin-inline: auto;
  text-align: center;
}

.manifesto p {
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(1.4rem, 3vw, 2rem);
  line-height: 1.4;
  color: var(--ink);
}

.manifesto cite {
  display: block;
  margin-top: 1.5rem;
  font-style: normal;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
}

.gal-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.gal-item {
  overflow: hidden;
  aspect-ratio: 1;
}

.gal-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
}

.gal-item:hover img {
  transform: scale(1.06);
}

.gal-cta {
  margin-top: 2rem;
}

.cta-final {
  text-align: center;
  border-top: 1px solid var(--line);
}

.cta-final-inner h2 {
  font-size: clamp(1.9rem, 3.6vw, 2.6rem);
}

.cta-final .lede {
  margin: 1rem auto 0;
}

.cta-actions {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

@media (min-width: 860px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
  .legado-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4.5rem;
  }
  .legado-img {
    order: 2;
  }
}

@media (max-width: 860px) {
  .stats-row {
    grid-template-columns: 1fr;
    gap: 2.2rem;
  }
  .cat-grid {
    grid-template-columns: 1fr;
  }
  .gal-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

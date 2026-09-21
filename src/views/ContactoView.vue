<script setup>
import { ref } from 'vue'
import { PhMapPin, PhEnvelope, PhPhone, PhClock, PhWhatsappLogo, PhInstagramLogo, PhFacebookLogo, PhCaretRight } from '@phosphor-icons/vue'
import { contact } from '../data/content'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`
const waHref = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola Joyas Criollas, me gustaría más información.')}`

const form = ref({ nombre: '', email: '', mensaje: '' })

function submit() {
  const subject = encodeURIComponent(`Contacto desde el sitio web: ${form.value.nombre || 'Cliente'}`)
  const body = encodeURIComponent(
    `Nombre: ${form.value.nombre}\nCorreo: ${form.value.email}\n\n${form.value.mensaje}`
  )
  window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <div>
    <section class="page-head">
      <div class="container" v-reveal>
        <span class="eyebrow">Contacto</span>
        <h1>Visítanos o escríbenos</h1>
        <p class="lede">Estamos en Ensanche El Vergel, Santo Domingo.</p>
      </div>
    </section>

    <section class="section contact-grid-section">
      <div class="container contact-grid">
        <div class="info-col" v-reveal>
          <div class="info-row">
            <PhMapPin size="20" weight="light" />
            <div>
              <span class="info-label">Dirección</span>
              <p>{{ contact.address }}</p>
            </div>
          </div>
          <div class="info-row">
            <PhPhone size="20" weight="light" />
            <div>
              <span class="info-label">Teléfono</span>
              <p><a :href="`tel:+1${contact.phone.replace(/-/g, '')}`">{{ contact.phone }}</a></p>
            </div>
          </div>
          <div class="info-row">
            <PhWhatsappLogo size="20" weight="light" />
            <div>
              <span class="info-label">WhatsApp</span>
              <p><a :href="waHref" target="_blank" rel="noopener">{{ contact.whatsappDisplay }}</a></p>
            </div>
          </div>
          <div class="info-row">
            <PhEnvelope size="20" weight="light" />
            <div>
              <span class="info-label">Correo</span>
              <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></p>
            </div>
          </div>
          <div class="info-row">
            <PhClock size="20" weight="light" />
            <div>
              <span class="info-label">Horario</span>
              <p v-for="h in contact.hours" :key="h.days">{{ h.days }}: {{ h.time }}</p>
            </div>
          </div>

          <div class="socials">
            <a :href="contact.instagram" target="_blank" rel="noopener" aria-label="Instagram">
              <PhInstagramLogo size="19" weight="light" />
            </a>
            <a :href="contact.facebook" target="_blank" rel="noopener" aria-label="Facebook">
              <PhFacebookLogo size="19" weight="light" />
            </a>
          </div>
        </div>

        <form class="form-col" v-reveal="140" @submit.prevent="submit">
          <div class="field">
            <label for="nombre">Nombre</label>
            <input id="nombre" v-model="form.nombre" type="text" required autocomplete="name" />
          </div>
          <div class="field">
            <label for="email">Correo</label>
            <input id="email" v-model="form.email" type="email" required autocomplete="email" />
          </div>
          <div class="field">
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" v-model="form.mensaje" rows="5" required></textarea>
            <span class="helper">Cuéntanos qué pieza buscas o qué necesitas.</span>
          </div>
          <button type="submit" class="btn btn-primary">Enviar mensaje</button>
        </form>
      </div>
    </section>

    <section class="map-section" v-reveal>
      <iframe
        :src="mapSrc"
        title="Ubicación de Joyas Criollas en el mapa"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <a :href="mapLink" target="_blank" rel="noopener" class="map-fallback-link">
        Abrir en Google Maps <PhCaretRight size="13" weight="bold" />
      </a>
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
}

.page-head .lede {
  margin-top: 1.2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.info-col {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.info-row {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-row svg {
  color: var(--gold);
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.info-label {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-bottom: 0.25rem;
}

.info-row p {
  color: var(--ink-muted);
  font-size: 0.95rem;
}

.info-row a {
  color: var(--ink-muted);
  transition: color 0.3s var(--ease);
}
.info-row a:hover {
  color: var(--gold-soft);
}

.socials {
  display: flex;
  gap: 0.9rem;
  margin-top: 0.5rem;
}

.socials a {
  width: 40px;
  height: 40px;
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-muted);
  transition: border-color 0.3s var(--ease), color 0.3s var(--ease);
}
.socials a:hover {
  border-color: var(--gold);
  color: var(--gold-soft);
}

.form-col {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field label {
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.field input,
.field textarea {
  background: var(--bg-elevated);
  border: 1px solid var(--line-strong);
  color: var(--ink);
  padding: 0.85rem 1rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  border-radius: var(--radius);
  resize: vertical;
}

.field input:focus,
.field textarea:focus {
  outline: 2px solid var(--gold);
  outline-offset: 1px;
}

.field .helper {
  font-size: 0.78rem;
  color: var(--ink-faint);
}

.form-col .btn {
  align-self: flex-start;
  margin-top: 0.4rem;
}

.map-section {
  border-top: 1px solid var(--line);
  position: relative;
}

.map-section iframe {
  width: 100%;
  height: 380px;
  border: 0;
  display: block;
  filter: grayscale(0.4) invert(0.92) contrast(0.9);
}

.map-fallback-link {
  position: absolute;
  right: 1.2rem;
  bottom: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--bg);
  border: 1px solid var(--line-strong);
  padding: 0.6rem 1rem;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink);
  transition: border-color 0.3s var(--ease), color 0.3s var(--ease);
}

.map-fallback-link:hover {
  border-color: var(--gold);
  color: var(--gold-soft);
}

@media (min-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr 1.1fr;
    gap: 5rem;
  }
}
</style>

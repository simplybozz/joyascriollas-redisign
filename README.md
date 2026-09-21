# Joyas Criollas: Propuesta de rediseño

Rediseño moderno y minimalista del sitio [joyascriollasrd.com](https://www.joyascriollasrd.com/),
construido con **Vue 3 + Vite** para que se sienta interactivo (transiciones entre páginas,
animaciones al hacer scroll, contadores animados) en lugar de una página estática.

## Cómo correrlo en tu máquina

Necesitas [Node.js](https://nodejs.org/) 18 o superior instalado.

```bash
npm install       # instala las dependencias (una sola vez)
npm run dev       # levanta el servidor de desarrollo en http://localhost:5173
npm run build     # genera la versión de producción en /dist
npm run preview   # sirve /dist localmente para revisar el build final
```

## Publicarlo en GitHub Pages

1. Sube esta carpeta a un repositorio nuevo en GitHub (por ejemplo `joyas-criollas-redesign`).
2. En el repositorio: **Settings → Pages → Build and deployment → Source**, selecciona
   **GitHub Actions**.
3. Haz push a la rama `main`. El workflow en `.github/workflows/deploy.yml` construye el sitio
   y lo publica automáticamente en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

No hace falta tocar nada más: el workflow arma la ruta base (`--base=/nombre-del-repo/`)
usando el nombre real del repositorio.

## Estructura

```
src/
  views/        Home, Nosotros, Museo, Productos, Galería, Contacto
  components/   Navbar, Footer, botón de WhatsApp, contador animado, lightbox
  composables/  animaciones (scroll reveal, contador numérico)
  data/         contenido real del negocio
  assets/img/   fotografías
```

// Contenido real de Joyas Criollas, S.A. recopilado de joyascriollasrd.com
// Edita este archivo para actualizar textos del sitio sin tocar los componentes.

export const brand = {
  name: 'Joyas Criollas',
  since: 1979,
  tagline: 'Calidad que se distingue desde 1979',
  legalName: 'Joyas Criollas, S.A.',
  founder: 'Noel Salvador Valette Abreu',
}

export const contact = {
  address: 'Calle Dr. César Dargám #24, Ensanche El Vergel, Santo Domingo, República Dominicana',
  email: 'joyascriollasrd@gmail.com',
  phone: '809-567-8518',
  whatsapp: '18099628218',
  whatsappDisplay: '809-962-8218',
  hours: [
    { days: 'Lunes a Viernes', time: '9:00 a.m. - 6:00 p.m.' },
    { days: 'Sábado', time: '9:00 a.m. - 2:00 p.m.' },
    { days: 'Domingo y días feriados', time: 'Cerrado' },
  ],
  instagram: 'https://www.instagram.com/joyascriollas/',
  facebook: 'https://www.facebook.com/joyascriollas/',
  instagramHandle: '@joyascriollas',
}

export const mission = {
  mision:
    'Joyas Criollas es una tienda de carácter familiar, dedicada a la venta de artesanías confeccionadas con piedras y materias primas dominicanas, donde los visitantes pueden apreciar productos de altísima calidad en un ambiente placentero, seguro y provisto de atenciones personalizadas.',
  vision:
    'Somos la empresa líder de la República Dominicana en venta de artesanías confeccionadas con piedras y materias primas dominicanas, reconocida por su alta calidad y servicio tanto en la República Dominicana como en el mundo.',
  valores: ['Calidad', 'Trabajo', 'Responsabilidad', 'Servicio'],
}

export const museo = {
  nombre: 'Museo Noel Salvador Valette Abreu',
  descripcion:
    'En nuestra tienda está ubicado el Museo Noel Salvador Valette Abreu, con las colecciones privadas del Sr. Noel Valette. Aquí se encuentra la pieza de ámbar más grande del mundo, hallada en las minas dominicanas de Llanigua, Sabana de la Mar, el 26 de mayo de 1979, por Juan De la Rosa. Adquirida años después por Joyas Criollas, S.A., permanece en el museo hasta hoy.',
  piezaDestacada: {
    peso: '18 libras',
    hallazgo: '26 de mayo de 1979',
    lugar: 'Minas de Llanigua, Sabana de la Mar',
    comparacion:
      'La pieza previamente considerada la más grande (14 libras) se exhibe en el Museo Imperial de Berlín.',
  },
  coleccion: [
    'La pieza de ámbar más grande del mundo (18 libras)',
    'La colección de fósiles en ámbar más grande, en diversos tamaños y colores',
    'Esculturas en ámbar de reconocidos escultores dominicanos',
    'Una colección de los distintos colores del Larimar',
    'Una nutrida colección numismática',
    'Objetos históricos de la Era de Trujillo',
  ],
}

export const categorias = [
  {
    id: 'joyeria-fina',
    titulo: 'Joyería en Ámbar y Larimar',
    resumen: 'Ámbar, Larimar y Coral Negro montados en plata y oro.',
    detalle: [
      'Ámbar montado en plata y oro',
      'Larimar montado en plata y oro',
      'Coral negro montado en plata y oro',
      'Coral rosado, coral blanco, marfil, jade, malaquita, turquesa, perlas de río, ágata y más',
    ],
  },
  {
    id: 'piedras-preciosas',
    titulo: 'Piedras Preciosas',
    resumen: 'Joyas confeccionadas con piedras preciosas de origen internacional.',
    detalle: ['Rubíes', 'Esmeraldas', 'Topacio', 'Amatista', 'Agua marina'],
  },
  {
    id: 'artesania-criolla',
    titulo: 'Artesanía en Materiales Criollos',
    resumen: 'Piezas talladas en cuerno de vaca, hueso, jícara de coco y caracol.',
    detalle: [
      'Accesorios personales',
      'Bandejas y quesos',
      'Carteras',
      'Muebles y espejos',
      'Portalápices y portalibros',
      'Portavasos y cucharitas de café',
      'Cofres y portarretratos',
      'Trofeos y figuras en general',
    ],
  },
  {
    id: 'regalos-corporativos',
    titulo: 'Regalos Corporativos e Institucionales',
    resumen: 'Línea de regalos personalizables para visitantes, convenciones y eventos.',
    detalle: [
      'Ideal para convenciones, congresos, graduaciones y reuniones',
      'Piezas personalizables con placa grabada de logo o mensaje',
      'Desarrollamos piezas a partir de tu idea',
    ],
    imagen: 'product-2',
  },
  {
    id: 'arte-y-restauracion',
    titulo: 'Arte y Reparación',
    resumen: 'Pinturas de artistas dominicanos reconocidos y reparación de joyería y relojes.',
    detalle: [
      'Pinturas de artistas dominicanos',
      'Reparación de prendas de joyería',
      'Reparación de relojes',
    ],
  },
]

export const galeria = [
  { src: 'hero-1', alt: 'Collar de larimar y ónix con dije tallado, Joyas Criollas' },
  { src: 'hero-2', alt: 'Collar artesanal de ámbar dominicano en bruto' },
  { src: 'hero-3', alt: 'Dije y colgante de larimar montados en plata' },
  { src: 'product-2', alt: 'Pieza de ámbar tallada en forma del mapa de República Dominicana' },
]

export const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Museo', to: '/museo' },
  { label: 'Productos', to: '/productos' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Contacto', to: '/contacto' },
]

export const stats = [
  { value: 1979, suffix: '', label: 'Año de fundación', display: 'since' },
  { value: 18, suffix: ' lb', label: 'La pieza de ámbar más grande del mundo, en nuestro museo' },
  { value: 45, suffix: '+', label: 'Años de trayectoria familiar en República Dominicana' },
]

export type Project = {
  title: string;
  techs: string[];
  link?: string;
  git?: string;
  youtube?: string;
  isComingSoon?: boolean;
  description?: string;
};

const projects: Project[] = [
  {
    title: 'Plataforma Empresarial Siesa',
    techs: ['Node.js', 'Express', 'Vue.js', 'TypeScript', 'PostgreSQL'],
    link: 'https://asesorexperto.oportunidades.com.co/',
    youtube: 'https://youtu.be/qAlTeZU28H4',
    description:
      'Plataforma empresarial con arquitectura de microservicios integrada con Siesa. Implementación de autenticación con roles dinámicos, módulo comercial con sincronización en tiempo real y sistema automatizado de generación de etiquetas, logrando una reducción del 90% en tiempos de proceso.',
  },
  {
    title: 'Caliche Motos Website',
    techs: ['Next.js', 'React 19', 'TailwindCSS', 'Vercel'],
    link: 'https://www.calichemotos.com/',
    youtube: 'https://youtu.be/CA1-_FuTStg',
    description:
      'Desarrollo de sitio web moderno para empresa de repuestos de motos, implementando las últimas tecnologías de React y despliegue automatizado en Vercel para garantizar alta disponibilidad y rendimiento.',
  },
  {
    title: 'Plataforma Metálicas Otalvaro',
    techs: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL'],
    youtube: 'https://youtu.be/DXWnNB5E3wM',
    description:
      'Plataforma de landing page para almacén metalmecánico con sistema de cotización integrado. Implementación de generación automática de PDFs para propuestas comerciales, logrando reducción del 85% en tiempo de elaboración de cotizaciones.',
  },
  {
    title: 'Recibosypagos.co',
    techs: ['Vue.js', 'Django', 'Python', 'PostgreSQL', 'Docker', 'Next.js', 'React', 'Django REST Framework'],
    link: 'https://recibosypagos.co',
    youtube: 'https://youtu.be/XiDRYkJIyig',
    description:
      'Plataforma especializada en gestión de productos y facturas. Implementación de PWA, APIs RESTful, web scraping para catálogos, y modernización de código legacy. Desarrollo de módulos en Next.js para optimizar escalabilidad y experiencia de usuario.',
  },
  {
    title: 'Movie Ticket Generator',
    techs: ['React', 'Material-UI', 'Supabase', 'REST APIs', 'JavaScript'],
    git: 'https://github.com/ssantss/movie-ticket',
    description:
      'Simulador de Cine Colombia con sistema de cartelera en tiempo real. Integración con APIs externas (Cine Colombia, OMDB), persistencia de datos con Supabase, sistema de tickets virtuales y visualización de progreso de películas.',
  },
  {
    title: 'Calculadora 4x1000',
    techs: ['Svelte', 'TailwindCSS', 'JavaScript', 'PWA'],
    link: 'https://www.4x1000.co/',
    git: 'https://github.com/ssantss/4x1000',
    youtube: 'https://youtu.be/RTYy1fo_5Xw',
    description:
      'Calculadora financiera (GMF 4x1000) con estados reactivos y sistema de historial con persistencia local. Implementación de modo oscuro/claro y optimización para dispositivos móviles con capacidades PWA.',
  },
  {
    title: 'Scanner Audifarma',
    techs: ['Vue.js', 'Dynamsoft Web TWAIN', 'Axios', 'JavaScript'],
    // git: 'https://gitlab.com/paicoder/scanner-audifarma',
    link: 'https://scanner-puce.vercel.app/',
    youtube: 'https://youtu.be/h9YaesdCFko',
    description:
      'Desarrollo de sistema de digitalización de documentos con integración de escáner web en tiempo real. Implementación de procesamiento de imágenes (rotación, vista previa, miniaturas), conversión a PDF y sistema de carga de documentos con validación de parámetros. Integración con servidor privado/público mediante Axios.',
  },
  {
    title: 'Places Pin',
    techs: ['JavaScript', 'Vue.js 3', 'Django', 'Google Maps API', 'Vuetify', 'Docker'],
    link: 'https://places.paicoders.com/santiago',
    git: 'https://gitlab.com/paicoder/places/places-monorepo',
    description:
      'Una app para revivir aventuras de viaje a través de pines interactivos que relatan tus experiencias. Ideal para recordar y compartir tus historias.  ',
  },

  {
    title: 'Profit Manager',
    techs: ['Svelte', 'JavaScript', 'Firebase', 'Flowbite', 'Firebase Auth'],
    link: 'https://profitmoney.paicoders.com',
    git: 'https://gitlab.com/paicoder/profit-money',
    youtube: 'https://www.youtube.com/watch?v=qPcb186UIXQ',
    description:
      'Una app que gestiona tus finanzas con facilidad, puede controlar tus cuentas de ahorro, supervisa inversiones (CDTs, RentaAhorro), manejar tus préstamos a terceros.',
  },

  {
    title: 'Pokedex',
    techs: ['Vue.js', 'JavaScript', 'Html', 'Css'],
    git: 'https://github.com/ssantss/Pokedex_vue',
    link: 'https://pokedex.paicoders.com/',
    description:
      'Pokedex, desarrollado con Vue, aprovecha la API de Pokeapi para acceder a todos los Pokémon y facilitar su búsqueda.',
  },

  {
    title: 'Rickandmorty Api test',
    techs: ['JavaScript', 'Html', 'Css'],
    git: 'https://github.com/ssantss/rickandmortyApi',
    link: 'https://rickandmorty.paicoders.com/',
    description:
      'Este proyecto integra la API de Rick and Morty para crear una interfaz web interactiva utilizando HTML, CSS y JavaScript vanilla.',
  },

  {
    title: 'Geometric-calc',
    techs: ['JavaScript', 'Html', 'Css'],
    git: 'https://github.com/ssantss/Geometric_calc',
    link: 'https://geometriccalc.paicoders.com/',
    description: 'Este proyecto hace calculos geometricos, utilizando HTML, CSS y JavaScript vanilla.',
  },

  {
    title: 'IPhone stock checker',
    techs: ['Python'],
    git: 'https://gitlab.com/paicoder/iphone-stock-checker',
    description:
      'Script para verificar la disponibilidad de productos Apple en el sitio web oficial de Apple en EE. UU., necesaria la inclusión de un código postal.',
  },

  {
    title: 'Auto-Refreshify',
    techs: ['JavaScript', 'Html', 'Css'],
    git: 'https://gitlab.com/paicoder/reload-page-chrome-extension',
    description:
      'Auto-Refreshify es una extensión de navegador que actualiza páginas automáticamente tras un periodo de inactividad, eliminando la necesidad de clics manuales.',
  },
];

export default projects;

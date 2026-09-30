export type Project = {
  title: string;
  techs: string[];
  link?: string;
  git?: string;
  youtube?: string;
  isComingSoon?: boolean;
  description?: string;
  shortDesc?: string;
  isFeatured?: boolean;
  isStar?: boolean;
};

const projects: Project[] = [
  {
    title: 'DIGER Pereira',
    techs: ['Django', 'Next.js', 'Celery', 'LLMs', 'PostgreSQL'],
    link: 'https://digerpereira.com',
    isStar: true,
    shortDesc:
      'Plataforma de la Alcaldía de Pereira que digitaliza con IA el censo de familias afectadas por emergencias. Creador y líder de un equipo de ~10 devs; 46K+ escaneos.',
    description:
      'Creador y líder técnico (equipo de ~10 contribuidores) de la plataforma con la que la Dirección de Gestión del Riesgo de Pereira digitaliza los formularios de caracterización psicosocial de familias afectadas por emergencias y los reporta al registro nacional de damnificados (RUD/UNGRD). Extracción de formularios escaneados con votación por consenso entre varios modelos de IA, auditoría humana de los campos sin consenso y exportación automatizada al RUD. 46.000+ escaneos procesados y 11.000+ familias reportadas.',
  },
  {
    title: 'Vatio Libre — Tesla Dashboard',
    techs: ['Vue.js', 'Django', 'Python', 'Tesla Owner API', 'OAuth'],
    link: 'https://vatiolibre.com',
    isFeatured: true,
    shortDesc:
      'Cliente en EE. UU.: plataforma de monitoreo de vehículos Tesla con la Tesla Owner API, órdenes y entregas en vivo.',
    description:
      'Contratista remoto para Vatio Libre (New Jersey, EE. UU.). Construí desde cero el Tesla Dashboard: integración con la Tesla Owner API y OAuth, decodificador de VIN, órdenes con timeline logístico, panel de entregas con ETA en tiempo real e internacionalización español/inglés.',
  },
  {
    title: 'Snowify — Open Source',
    techs: ['Electron', 'JavaScript', 'Node.js', 'i18n'],
    link: 'https://snowify.cc/',
    git: 'https://github.com/nyakuoff/Snowify',
    isFeatured: true,
    shortDesc:
      'Reproductor de música de escritorio open source: 30 PRs mergeados upstream, crossfade, radio en vivo y 12 idiomas.',
    description:
      'Contribuidor open source de Snowify, reproductor de música de escritorio en Electron. 30 PRs mergeados upstream: motor de crossfade sin cortes, radio por internet en vivo, caché predictiva de audio, internacionalización a 12 idiomas y extracción de una arquitectura modular que eliminó 1.500+ líneas.',
  },
  {
    title: 'NotificacionesQR',
    techs: ['Node.js', 'Express', 'Baileys', 'Gmail API', 'Google Pub/Sub', 'SQLite', 'Canvas', 'PDFKit'],
    link: 'https://notificacionesqr.com',
    git: 'https://github.com/ssantss/notificadorqr',
    isFeatured: true,
    shortDesc:
      'Alertas de WhatsApp en tiempo real para pagos QR, Bre-B y Bancolombia, con reportes en PDF.',
    description:
      'Servicio que notifica a los empleados de un negocio por WhatsApp cada vez que llega un pago QR, transferencia por llaves Bre-B o transferencia Bancolombia. Recibe emails en tiempo real via Google Pub/Sub, parsea las transacciones y envía alertas instantáneas al grupo de WhatsApp. Incluye reportes diarios, semanales y mensuales con imagen y PDF profesional.',
  },
  {
    title: 'Parqueadero.app',
    techs: ['Next.js', 'Django', 'Python', 'Capacitor', 'PostgreSQL'],
    link: 'https://parqueadero.app/',
    isStar: true,
    shortDesc:
      'SaaS de parqueaderos usado por ~130 parqueaderos en 14 países: tickets térmicos, app Android y modo sin red.',
    description:
      'SaaS de gestión de parqueaderos que fundé y opero: ~130 parqueaderos activos en 14 países y ~1.600 vehículos por día hábil. Motor de cobro con 5 modos (minuto, fracciones, tramos, tarifa plana y pases por horario), mensualidades, convenios con comercios, cierre de caja, impresión térmica por Bluetooth/red, PWA offline-first y app nativa Android.',
  },
  {
    title: 'Sileo — Plataforma integrada con Siesa',
    techs: ['Node.js', 'Express', 'Vue.js', 'TypeScript', 'PostgreSQL'],
    link: 'https://asesorexperto.oportunidades.com.co/',
    youtube: 'https://youtu.be/qAlTeZU28H4',
    shortDesc:
      'Microservicios integrados con Siesa; roles dinámicos y −90% en tiempos de proceso.',
    description:
      'Plataforma empresarial con arquitectura de microservicios integrada con Siesa. Implementación de autenticación con roles dinámicos, módulo comercial con sincronización en tiempo real y sistema automatizado de generación de etiquetas, logrando una reducción del 90% en tiempos de proceso.',
  },
  {
    title: 'Caliche Motos',
    techs: ['Next.js', 'React 19', 'TailwindCSS', 'Vercel'],
    link: 'https://www.calichemotos.com/',
    youtube: 'https://youtu.be/CA1-_FuTStg',
    shortDesc:
      'Sitio moderno de repuestos de moto en Next.js con deploy automatizado en Vercel.',
    description:
      'Desarrollo de sitio web moderno para empresa de repuestos de motos, implementando las últimas tecnologías de React y despliegue automatizado en Vercel para garantizar alta disponibilidad y rendimiento.',
  },
  {
    title: 'Metálicas Otálvaro',
    techs: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL'],
    youtube: 'https://youtu.be/DXWnNB5E3wM',
    shortDesc:
      'Landing con cotizador integrado y PDFs automáticos; −85% en tiempo de cotización.',
    description:
      'Plataforma de landing page para almacén metalmecánico con sistema de cotización integrado. Implementación de generación automática de PDFs para propuestas comerciales, logrando reducción del 85% en tiempo de elaboración de cotizaciones.',
  },
  {
    title: 'Recibosypagos.co',
    techs: ['Vue.js', 'Django', 'Python', 'PostgreSQL', 'Docker', 'Next.js', 'React', 'Django REST Framework'],
    link: 'https://recibosypagos.co',
    youtube: 'https://youtu.be/XiDRYkJIyig',
    isFeatured: true,
    shortDesc:
      'Plataforma de productos y facturas: PWA, APIs REST, scraping y migración de legacy.',
    description:
      'Plataforma especializada en gestión de productos y facturas. Implementación de PWA, APIs RESTful, web scraping para catálogos, y modernización de código legacy. Desarrollo de módulos en Next.js para optimizar escalabilidad y experiencia de usuario.',
  },
  {
    title: 'Calculadora 4x1000',
    techs: ['Svelte', 'TailwindCSS', 'JavaScript', 'PWA'],
    link: 'https://www.4x1000.co/',
    git: 'https://github.com/ssantss/4x1000',
    youtube: 'https://youtu.be/RTYy1fo_5Xw',
    shortDesc:
      'Calculadora del GMF con historial local persistente, PWA y modo claro/oscuro.',
    description:
      'Calculadora financiera (GMF 4x1000) con estados reactivos y sistema de historial con persistencia local. Implementación de modo oscuro/claro y optimización para dispositivos móviles con capacidades PWA.',
  },
  {
    title: 'Scanner Audifarma',
    techs: ['Vue.js', 'Dynamsoft Web TWAIN', 'Axios', 'JavaScript'],
    link: 'https://scanner-puce.vercel.app/',
    youtube: 'https://youtu.be/h9YaesdCFko',
    shortDesc:
      'Digitalización de documentos con escáner web en tiempo real y exportación a PDF.',
    description:
      'Desarrollo de sistema de digitalización de documentos con integración de escáner web en tiempo real. Implementación de procesamiento de imágenes (rotación, vista previa, miniaturas), conversión a PDF y sistema de carga de documentos con validación de parámetros. Integración con servidor privado/público mediante Axios.',
  },
  {
    title: 'Places Pin',
    techs: ['JavaScript', 'Vue.js 3', 'Django', 'Google Maps API', 'Vuetify', 'Docker'],
    git: 'https://gitlab.com/paicoder/places/places-monorepo',
    shortDesc:
      'Mapa de pines interactivos para revivir y compartir aventuras de viaje.',
    description:
      'Una app para revivir aventuras de viaje a través de pines interactivos que relatan tus experiencias. Ideal para recordar y compartir tus historias.',
  },
  {
    title: 'Profit Manager',
    techs: ['Svelte', 'JavaScript', 'Firebase', 'Flowbite', 'Firebase Auth'],
    link: 'https://profitmoney.paicoders.com',
    git: 'https://gitlab.com/paicoder/profit-money',
    youtube: 'https://www.youtube.com/watch?v=qPcb186UIXQ',
    shortDesc:
      'Gestor de finanzas personales: ahorros, inversiones (CDT) y préstamos a terceros.',
    description:
      'Una app que gestiona tus finanzas con facilidad, puede controlar tus cuentas de ahorro, supervisa inversiones (CDTs, RentaAhorro), manejar tus préstamos a terceros.',
  },
];

export default projects;

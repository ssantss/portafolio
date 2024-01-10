export type Project = {
  title: string;
  techs: string[];
  link?: string;
  git: string;
  youtube?: string;
  isComingSoon?: boolean;
  description?: string;
};

const projects: Project[] = [
  {
    title: "Places Pin",
    techs: [
      "JavaScript",
      "Vue.js 3",
      "Django",
      "Google Maps API",
      "Vuetify",
      "Docker",
    ],
    link: "https://places.paicoders.com/santiago",
    git: "https://gitlab.com/paicoder/places/places-monorepo",
    description:
      "Una app para revivir aventuras de viaje a través de pines interactivos que relatan tus experiencias. Ideal para recordar y compartir tus historias.  ",
  },

  {
    title: "Profit Manager",
    techs: ["Svelte", "JavaScript", "Firebase", "Flowbite", "Firebase Auth"],
    link: "https://www.profitmoney.paicoders.com",
    git: "https://gitlab.com/paicoder/profit-money",
    youtube: "https://www.youtube.com/watch?v=qPcb186UIXQ",
    description:
      "Una app que gestiona tus finanzas con facilidad, puede controlar tus cuentas de ahorro, supervisa inversiones (CDTs, RentaAhorro), manejar tus préstamos a terceros.",
  },

  {
    title: "Pokedex",
    techs: ["Vue.js", "JavaScript", "Html", "Css"],
    git: "https://github.com/ssantss/Pokedex_vue",
    link: "https://pokedex.paicoders.com/",
    description:
      "Pokedex, desarrollado con Vue, aprovecha la API de Pokeapi para acceder a todos los Pokémon y facilitar su búsqueda.",
  },

  {
    title: "Rickandmorty Api test",
    techs: ["JavaScript", "Html", "Css"],
    git: "https://github.com/ssantss/rickandmortyApi",
    link: "https://rickandmorty.paicoders.com/",
    description:
      "Este proyecto integra la API de Rick and Morty para crear una interfaz web interactiva utilizando HTML, CSS y JavaScript vanilla.",
  },

  {
    title: "Geometric-calc",
    techs: ["JavaScript", "Html", "Css"],
    git: "https://github.com/ssantss/Geometric_calc",
    link: "https://geometriccalc.paicoders.com/",
    description:
      "Este proyecto hace calculos geometricos, utilizando HTML, CSS y JavaScript vanilla.",
  },

  {
    title: "IPhone stock checker",
    techs: ["Python"],
    git: "https://gitlab.com/paicoder/iphone-stock-checker",
    description:
      "Script para verificar la disponibilidad de productos Apple en el sitio web oficial de Apple en EE. UU., necesaria la inclusión de un código postal.",
  },

  {
    title: "Auto-Refreshify",
    techs: ["JavaScript", "Html", "Css"],
    git: "https://gitlab.com/paicoder/reload-page-chrome-extension",
    description:
      "Auto-Refreshify es una extensión de navegador que actualiza páginas automáticamente tras un periodo de inactividad, eliminando la necesidad de clics manuales.",
  },
];

export default projects;

type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "santiagojimenezmoncada@gmail.com",
  title: "Hola, soy Santiago 🧔",
  // profile: "/profile.webp",
  description:
    "Soy un *desarrollador frontend colombiano* con *2 años* de experiencia en el mundo web, enfocado actualmente en *Django y Vue.js*. Experimento con *Svelte, React y otros frameworks*, siempre en búsqueda de nuevas tecnologías. Apasionado por los viajes, estoy listo para asumir nuevos retos.",
  socials: [
    {
      label: "Gitlab",
      link: "https://gitlab.com/ssantss",
    },
    {
      label: "Github",
      link: "https://github.com/ssantss",
    },
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/ssantss",
    },
    {
      label: "X",
      link: "https://twitter.com/santiiiag_o",
    },
  ],
};

export default presentation;

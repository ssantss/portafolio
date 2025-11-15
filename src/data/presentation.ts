type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  phone: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
  skills: {
    label: string;
    icon: string;
  }[];
};

const presentation: Presentation = {
  mail: "santyjimenez92@gmail.com",
  phone: "+573003060003",
  title: "Hola, soy Santiago 🧔",
  // profile: "/profile.webp",
  description:
    "Soy un *desarrollador fullstack* con *4 años* de experiencia, enfocado actualmente en *Django y Next.js*. Trabajo  con *Vue js, Svelte, React y otros frameworks*, tengo conocimiento  en Docker y deploy de proyectos con linux, siempre en búsqueda de nuevas tecnologías. Apasionado por los viajes, listo para asumir nuevos retos.",
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
  skills: [
    {
      label: "Django",
      icon: "django",
    },
    {
      label: "Python",
      icon: "python",
    },
    {
      label: "Next.js",
      icon: "next-js",
    },
    {
      label: "Vue.js",
      icon: "vue-js",
    },
    {
      label: "Svelte",
      icon: "svelte",
    },
    {
      label: "Linux",
      icon: "ubuntu",
    },
  ],
};

export default presentation;

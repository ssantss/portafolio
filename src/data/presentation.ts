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
    "Soy un *desarrollador frontend* con *2 años* de experiencia en el mundo web, enfocado actualmente en *Django y Vue.js*. Trabajo  con *Svelte, React y otros frameworks*, tengo conocimiento  en Docker y deploy de proyectos con linux, siempre en búsqueda de nuevas tecnologías. Apasionado por los viajes, estoy listo para asumir nuevos retos.",
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
      label: "JavaScript",
      icon: "js",
    },
    {
      label: "HTML",
      icon: "html5",
    },
    {
      label: "CSS",
      icon: "csswizardry",
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
      label: "React",
      icon: "react",
    },
    {
      label: "Django",
      icon: "django",
    },
    {
      label: "Node.js",
      icon: "node-js",
    },
    {
      label: "Python",
      icon: "python",
    },
    {
      label: "Docker",
      icon: "docker",
    },
    {
      label: "Git",
      icon: "git",
    },
    {
      label: "Linux",
      icon: "ubuntu",
    },
  ],
};

export default presentation;

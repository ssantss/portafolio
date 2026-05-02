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
    "*Desarrollador Fullstack* con foco en *Django y Next.js*. Llevo *4 años* diseñando y operando plataformas SaaS de punta a punta — desde apuestas deportivas y facturación multi-tenant hasta sistemas de parqueo, con integraciones a WhatsApp, OAuth, *cámaras IP e impresoras en red*. En producción manejo *PostgreSQL, Docker y Linux*, y cuando un proyecto lo pide también trabajo con *Vue, Svelte, React, FastAPI y Express*.",
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

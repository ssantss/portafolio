type Social = {
  label: string;
  handle: string;
  link: string;
};

type Presentation = {
  mail: string;
  phone: string;
  title: string;
  role: string;
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
  title: "Santiago Jimenez",
  role: "desarrollador fullstack — django + next.js",
  // profile: "/profile.webp",
  description:
    "Desarrollador Fullstack con foco en *Django y Next.js*. Llevo *4 años* diseñando y operando plataformas SaaS de punta a punta — apuestas deportivas, facturación multi-tenant y sistemas de parqueo — con integraciones a WhatsApp, OAuth, *cámaras IP e impresoras en red*. En producción manejo *PostgreSQL, Docker y Linux*.",
  socials: [
    {
      label: "GitHub",
      handle: "@ssantss",
      link: "https://github.com/ssantss",
    },
    {
      label: "GitLab",
      handle: "@ssantss",
      link: "https://gitlab.com/ssantss",
    },
    {
      label: "LinkedIn",
      handle: "in/ssantss",
      link: "https://linkedin.com/in/ssantss",
    },
    {
      label: "X",
      handle: "@santiiiag_o",
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

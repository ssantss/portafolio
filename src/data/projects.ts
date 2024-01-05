export type Project = {
  title: string;
  techs: string[];
  link: string;
  git: string;
  isComingSoon?: boolean;
  description?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio / Places Pin",
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
    title: "Portfolio / Profit Manager",
    techs: ["Svelte", "JavaScript", "Firebase", "Flowbite", "Firebase Auth"],
    link: "https://profit-money.vercel.app/",
    git: "https://gitlab.com/paicoder/profit-money",
    description:
      "Una app que gestiona tus finanzas con facilidad, puede controlar tus cuentas de ahorro, supervisa inversiones (CDTs, RentaAhorro), manejar tus préstamos a terceros.",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    git: "https://gitlab.com/ssantss/portfolio",
    isComingSoon: true,
  },
];

export default projects;

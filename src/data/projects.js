// Billeder: læg filen i public/ og sæt src til `${import.meta.env.BASE_URL}filnavn.webp`
const projects = [
  {
    slug: "bettor",
    title: "Bettor",
    year: "2025",
    summary:
      "Social app hvor venner holder styr på indbyrdes væddemål og gør op bagefter.",
    description:
      "Social app hvor venner holder styr på indbyrdes væddemål og gør op bagefter. Eksamensprojekt på 2. semester, som jeg fortsatte med efter eksamen: koncept, flere runder på hjem- og vennefanen, UI og build i React og Supabase.",
    tags: ["React", "Supabase"],
    image: `${import.meta.env.BASE_URL}bettor-plakat.png`,
    links: [
      {
        label: "Repo",
        href: "https://github.com/Magecties/bettor-eksamen-2-semester",
      },
    ],
    media: {
      type: "poster",
      src: `${import.meta.env.BASE_URL}bettor-plakat.png`,
      alt: "Bettor — eksamensplakat med research, UX/UI og kode",
    },
  },
  {
    slug: "wanted-archives",
    title: "Wanted Archives",
    year: "2025",
    summary:
      "Tøjbutik i Zalando-format fra 2. semester, hvor vi solgte “wanted” pieces.",
    description:
      "Tøjbutik i Zalando-format fra 2. semester, hvor vi solgte “wanted” pieces. Størstedelen af arbejdet lå i den visuelle identitet og brandingen omkring butikken — navn, tone, farver, typografi og selve shopfladen.",
    tags: ["Identitet", "Branding"],
    image: `${import.meta.env.BASE_URL}wanted-kampagne.jpg`,
    links: [
      {
        label: "Repo",
        href: "https://github.com/Magecties/customer-experience-exam",
      },
    ],
    media: {
      type: "cover",
      src: `${import.meta.env.BASE_URL}wanted-kampagne.jpg`,
      alt: "Wanted Archives — kampagnebillede",
      logo: `${import.meta.env.BASE_URL}wanted-logo.svg`,
      logoAlt: "Wanted-logo",
    },
  },
];

export default projects;

// Billeder: læg filen i public/ og sæt src til `${import.meta.env.BASE_URL}filnavn.webp`
// Selve case-teksten ligger i src/content/case-studies/ — her er kun det,
// som kort, søgning og overblikstabeller har brug for.
const projects = [
  {
    slug: "bettor",
    title: "Bettor",
    semester: "2. semester",
    summary:
      "Social challenge-app, hvor venner holder styr på indbyrdes væddemål — og gør op bagefter.",
    tags: ["React", "Supabase", "UX/UI"],
    image: `${import.meta.env.BASE_URL}bettor-plakat.png`,
    imageAlt: "Bettor — eksamensplakat med research, UX/UI og kode",
    links: [
      {
        label: "Repo",
        href: "https://github.com/Magecties/bettor-eksamen-2-semester",
      },
    ],
  },
  {
    slug: "wanted-archives",
    title: "Wanted Archives",
    semester: "2. semester",
    summary:
      "Tøjbutik i Zalando-format, hvor vi solgte “wanted” pieces. Fokus på visuel identitet og branding.",
    tags: ["Identitet", "Branding"],
    image: `${import.meta.env.BASE_URL}wanted-kampagne.jpg`,
    imageAlt: "Wanted Archives — kampagnebillede",
    logo: `${import.meta.env.BASE_URL}wanted-logo.svg`,
    links: [
      {
        label: "Repo",
        href: "https://github.com/Magecties/customer-experience-exam",
      },
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export default projects;

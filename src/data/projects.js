// Billeder: læg filen i public/ og sæt src til `${import.meta.env.BASE_URL}filnavn.webp`
// Selve case-teksten ligger i src/content/case-studies/ — her er kun det,
// som kort, søgning og overblikstabeller har brug for.
const projects = [
  {
    slug: "mellemrum",
    title: "Mellemrum",
    semester: "3. semester",
    summary:
      "Jeg overtog en React-prototype til en kulturplatform, gennemgik den systematisk og fik tilmeldingsflow, datamodel og deployment til at virke.",
    tags: ["React", "Supabase", "Teknisk audit"],
    image: `${import.meta.env.BASE_URL}mellemrum-live.webp`,
    imageAlt: "Mellemrums forside med overskriften »Find plads til noget nyt.«",
    // Overskriften står i venstre side — beskær ikke den væk på kortet.
    imagePosition: "left center",
    links: [
      { label: "Live site", href: "https://smmathias.github.io/mellemrum/" },
      { label: "Repo", href: "https://github.com/SMMathias/mellemrum" },
      {
        label: "Findings",
        href: "https://docs.google.com/document/d/1xjkcMrrX0OprvXAvNsEQFyyF4Clc-YiF0nSeFXHdU88/edit?usp=sharing",
      },
    ],
  },
  {
    slug: "vuuh",
    title: "Vuuh onboarding",
    semester: "3. semester",
    summary:
      "Vi undersøgte Vuuhs onboarding for nye Shopify-butikker med heuristisk evaluering og cognitive walkthrough og redesignede den til et guidet flow i tre trin.",
    tags: ["UX-audit", "Figma", "Prototype"],
    image: `${import.meta.env.BASE_URL}vuuh-dashboard-efter.webp`,
    imageAlt: "Det redesignede Vuuh-dashboard med trinindikator øverst",
    links: [
      {
        label: "Prototype",
        href: "https://www.figma.com/proto/reqZjXUxZJj8l2q5l9sjf9/Case-2---3.-Semester?page-id=2137%3A198&node-id=2428-9026&viewport=603%2C167%2C0.11&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2681%3A1421",
      },
      {
        label: "UX-audit",
        href: "https://docs.google.com/document/d/1xMWak6JJUOwpH6UraUwWLLUfdy2qO3d2c07Wth8BKzI/edit?usp=sharing",
      },
      {
        label: "Designfil",
        href: "https://www.figma.com/design/reqZjXUxZJj8l2q5l9sjf9/Case-2---3.-Semester?node-id=2137-198",
      },
      { label: "Præsentation", href: "https://www.figma.com/deck/Fg2N624IMB5Grf1ESC9aNj" },
    ],
  },
  {
    slug: "again-by-la-rouge",
    title: "AGAIN by LA RŌUGE",
    semester: "3. semester",
    summary:
      "Vi udviklede et re-commerce-subbrand til modebrandet LA RŌUGE, så brugt tøj får sit eget sted med brand, tone og køb- og sælgerflow.",
    tags: ["Branding", "Figma", "Prototype"],
    image: `${import.meta.env.BASE_URL}again-saelgerflow.webp`,
    imageAlt: "AGAINs sælgerflow: fem mobilskærme i aubergine og sandsten",
    links: [
      {
        label: "Prototype",
        href: "https://www.figma.com/design/P3Hvb9XDy080R7zP5iuDq7/Magnus-og-Matty-designproject-la-rouge?node-id=148-2807",
      },
      {
        label: "Branddeck",
        href: "https://www.figma.com/slides/zchYm1dFnKPVZ3AzpuNgAQ/AGAIN-by-LA-R%25C5%258CUGE-%25E2%2580%2593-Branddeck--Copy-?node-id=2-2",
      },
    ],
  },
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

import CaseStudies from "./content/CaseStudies";
import Changelog from "./content/Changelog";
import Introduction from "./content/Introduction";
import NotFound from "./content/NotFound";
import Quickstart from "./content/Quickstart";
import Bettor from "./content/case-studies/Bettor";
import WantedArchives from "./content/case-studies/WantedArchives";
import Contact, { ContactExample } from "./content/reference/Contact";
import Profile, { ProfileExample } from "./content/reference/Profile";
import Stack, { StackExample } from "./content/reference/Stack";
import { getProject } from "./data/projects";

/* Hele sitets struktur. Rækkefølgen her styrer sidebar, forrige/næste og søgning.
   - nav:      kortere titel i sidebaren (valgfri)
   - hero:     siden tegner selv sin header (kun introduktionen)
   - method/endpoint: API-badge i sidebaren og endpoint under titlen
   - aside:    kodeeksempel i højre kolonne i stedet for "På denne side"
   - keywords: ekstra ord, som søgningen matcher på */
const GROUPS = [
  {
    title: "Kom i gang",
    pages: [
      {
        path: "/",
        title: "Introduktion",
        description:
          "Mathias Skyum Moeslund — multimediedesigner på EAAA og designer & builder hos Strømm i Aarhus.",
        component: Introduction,
        hero: true,
        keywords: "forside om mig hvem",
      },
      {
        path: "/quickstart",
        title: "Quickstart",
        description: "Fra nul til samarbejde på tre trin. Det tager omkring to minutter.",
        component: Quickstart,
        keywords: "kom i gang kort tldr overblik",
      },
    ],
  },
  {
    title: "Case studies",
    pages: [
      {
        path: "/case-studies",
        title: "Case studies",
        nav: "Overblik",
        description:
          "Udvalgte projekter fra Multimediedesign på EAAA — fra brief til færdigt resultat.",
        component: CaseStudies,
        keywords: "projekter arbejde portfolio",
      },
      {
        path: "/case-studies/bettor",
        title: "Bettor",
        description: getProject("bettor").summary,
        component: Bettor,
        keywords:
          "react supabase app væddemål research ux ui ooux think aloud tree sort lottie figma",
      },
      {
        path: "/case-studies/wanted-archives",
        title: "Wanted Archives",
        description: getProject("wanted-archives").summary,
        component: WantedArchives,
        keywords: "branding identitet tøj webshop zalando logo kampagne",
      },
    ],
  },
  {
    title: "Reference",
    pages: [
      {
        path: "/reference/profil",
        title: "Profil",
        method: "GET",
        endpoint: "/mathias",
        description:
          "Profil-objektet samler de vigtigste fakta om mig i ét svar: rolle, uddannelse, felt og stack.",
        component: Profile,
        aside: ProfileExample,
        keywords: "om mig cv uddannelse eaaa strømm job",
      },
      {
        path: "/reference/stack",
        title: "Stack",
        method: "GET",
        endpoint: "/mathias/stack",
        description: "Værktøjerne jeg designer og bygger med — og hvor ofte de er i brug.",
        component: Stack,
        aside: StackExample,
        keywords: "værktøjer react figma supabase kompetencer discipliner metoder",
      },
      {
        path: "/reference/kontakt",
        title: "Kontakt",
        method: "POST",
        endpoint: "/mathias/kontakt",
        description: "Sådan når du mig. Skriv om projekter, jobs — eller bare for at sige hej.",
        component: Contact,
        aside: ContactExample,
        keywords: "mail email github linkedin aarhus",
      },
    ],
  },
  {
    title: "Ressourcer",
    pages: [
      {
        path: "/changelog",
        title: "Changelog",
        description: "Hvad der er sket, semester for semester. Nyeste øverst.",
        component: Changelog,
        keywords: "historik tidslinje semester nyheder versioner",
      },
    ],
  },
];

export const groups = GROUPS.map((group) => ({
  ...group,
  pages: group.pages.map((page) => ({ ...page, group: group.title })),
}));

export const pages = groups.flatMap((group) => group.pages);

export const notFoundPage = {
  path: null,
  title: "Siden findes ikke",
  group: "404",
  description: "Den side, du leder efter, er ikke en del af dokumentationen.",
  component: NotFound,
};

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function searchPages(query) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) {
    return pages;
  }

  return pages
    .map((page) => {
      const title = normalize(`${page.title} ${page.nav ?? ""}`);
      const haystack = normalize(
        [page.group, page.title, page.nav, page.description, page.keywords].join(" "),
      );
      if (!terms.every((term) => haystack.includes(term))) {
        return null;
      }
      const score = terms.reduce((sum, term) => sum + (title.includes(term) ? 3 : 1), 0);
      return { page, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.page);
}

import {
  Callout,
  CodeBlock,
  Fact,
  Facts,
  Figure,
  Gallery,
  H2,
  H3,
  LinkList,
  Stat,
  Stats,
  TableWrap,
} from "../../components/docs";
import { getProject } from "../../data/projects";

const project = getProject("mellemrum");
const base = import.meta.env.BASE_URL;
const findingsUrl = project.links.find((link) => link.label === "Findings").href;

const CHECKS = [
  { test: "Ny tilmelding via formularen", result: "Vises med det samme på /tilmeldinger med status Ny" },
  { test: "/events/999", result: "Fejlbesked med link i stedet for en blank side" },
  { test: "Slukket netværk", result: "Fejlbesked på forsiden" },
  { test: "Det deployede site", result: "Henter alle 9 events" },
];

function Mellemrum() {
  return (
    <>
      <Facts>
        <Fact label="Kontekst">Soloprojekt, 3. semester · overtaget prototype</Fact>
        <Fact label="Stack">React, Supabase, CSS Modules, GitHub Pages</Fact>
        <Fact label="Links">
          <LinkList links={project.links} />
        </Fact>
      </Facts>

      <Figure
        alt={project.imageAlt}
        caption="Det deployede site."
        height={622}
        src={project.image}
        width={1247}
      />

      <H2>Udfordring</H2>
      <p>
        Mellemrum er en lokal kultur- og eventplatform, hvor brugere i Aarhus kan finde og
        tilmelde sig arrangementer. Prototypen var bygget hurtigt for at teste idéen. Den var
        svær at videreudvikle og håndterede ikke fejl eller langsomme svar. Kernefunktionen,
        tilmeldingen, gemte desuden ingenting.
      </p>
      <p>
        Jeg overtog koden alene og stod for audit, prioritering, implementering, verifikation
        og deploy.
      </p>

      <H2 number="01">Undersøgelse og prioritering</H2>
      <p>
        Jeg kørte løsningen lokalt, gennemførte de centrale flows og dokumenterede ni fund i et
        teknisk audit. For hvert fund beskrev jeg konsekvens, forslag, prioritet og plan for
        verifikation.
      </p>
      <Stats>
        <Stat label="fund i det tekniske audit" value="9" />
        <Stat label="linjer CSS i én fil" value="898" />
        <Stat label="kopier af footeren" value="5" />
      </Stats>

      <p>Jeg prioriterede efter effekt sat over for indsats:</p>
      <ol>
        <li>
          <strong>Først det, der blokerede produktet:</strong> tilmelding og deploy.
        </li>
        <li>
          <strong>Dernæst det, brugeren mærker:</strong> fejl- og loading-states.
        </li>
        <li>
          <strong>Til sidst vedligeholdelsen</strong> af koden.
        </li>
      </ol>

      <p>
        Hele auditten ligger i{" "}
        <a href={findingsUrl} rel="noopener noreferrer" target="_blank">
          findings-dokumentet ↗
        </a>
        .
      </p>

      <H2 number="02">Løsning og faglige valg</H2>

      <H3>Tilmelding, der virker og hænger sammen med eventet</H3>
      <p>
        Formularen skrev kun til konsollen. Tabellen <code>registrations</code> gemte eventets
        titel og dato som tekst uden kobling til eventet. Jeg tilføjede via en migration
        kolonnen <code>eventId</code> med en fremmednøgle til <code>events</code> (
        <code>on delete set null</code>) og lavede en <code>createRegistration</code>-funktion,
        som formularen kalder.
      </p>
      <Figure
        alt="Datamodellen: registrations.eventId peger på events.id"
        caption="registrations er nu koblet til events via eventId."
        height={686}
        src={`${base}mellemrum-datamodel.webp`}
        width={948}
      />
      <CodeBlock lang="js" title="EventPage.jsx">{`
async function handleSubmit(eventSubmit) {
  eventSubmit.preventDefault();
  setStatus("saving");

  try {
    await createRegistration({
      name,
      email,
      eventTitle: event.title,
      eventDate: event.date,
      eventLocation: event.venueName,
      eventId: event.id,
    });
    setName("");
    setEmail("");
    setStatus("success");
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
}
`}</CodeBlock>
      <p>
        Knappen deaktiveres under afsendelse, e-mailfeltet bruger <code>{'type="email"'}</code>,
        og brugeren får en kvittering. Den interne side linker nu hver tilmelding til det
        rigtige event.
      </p>

      <H3>Ingen blanke sider</H3>
      <p>
        Siderne returnerede <code>null</code> under indlæsning eller viste en tom side, når
        Supabase fejlede. Fejlen gik kun til konsollen. Jeg gav alle tre sider samme mønster
        med <code>isLoading</code>- og <code>error</code>-state og en delt klasse til beskeder
        om indlæsning, fejl og tom tilstand.
      </p>
      <Gallery
        caption="Forsiden, når Supabase ikke svarer."
        cols={1}
        items={[
          {
            label: "Før",
            src: `${base}mellemrum-forside-foer.webp`,
            alt: "Forsiden uden events og uden besked — bare et tomt område under søgefeltet",
            width: 1247,
            height: 575,
          },
          {
            label: "Efter",
            src: `${base}mellemrum-forside-efter.webp`,
            alt: "Forsiden med beskeden »Kunne ikke hente events. Prøv igen senere.«",
            width: 1247,
            height: 575,
          },
        ]}
      />

      <H3>Kode, der kan overtages</H3>
      <p>
        Fetch-logikken var kopieret ind i hver side. Footeren lå i fem kopier med forskellige
        årstal. Al CSS stod i én fil på 898 linjer med hårdkodede farver. Jeg samlede
        datakaldene i en service-fil, udtrak en Footer-komponent og delte CSS&apos;en op i
        variabler og CSS Modules pr. komponent. Rettelser skal nu kun laves ét sted.
      </p>
      <CodeBlock lang="js" title="src/lib/service.js">{`
import { supabase } from "./supabaseClient";

export async function getEvents() {
  const { data, error } = await supabase
    .from("events")
    .select()
    .order("date", { ascending: true });

  if (error) throw error;

  return data;
}

export async function getEventById(eventId) {
  const { data, error } = await supabase
    .from("events")
    .select()
    .eq("id", eventId)
    .single();

  if (error) throw error;

  return data;
}
`}</CodeBlock>

      <H2 number="03">Resultat og verifikation</H2>
      <p>
        Forbedringerne blev lavet i syv navngivne feature branches (fx <code>tilmelding</code>,{" "}
        <code>fejltilstande</code> og <code>eventId</code>), verificeret og derefter merget til{" "}
        <code>main</code>. Rettelserne til selve deployment lavede jeg direkte på main.
      </p>
      <Figure
        alt="Git-grafen med feature branches som tilmelding, fejltilstande og eventId merget ind i main"
        caption="Feature branches merget til main."
        height={992}
        src={`${base}mellemrum-git-graf.webp`}
        width={1247}
        zoom
      />

      <H3>To fejl, der ikke kunne ses lokalt</H3>
      <ul>
        <li>
          <strong>Dobbelt /rest/v1.</strong> Supabase-URL&apos;en endte på{" "}
          <code>/rest/v1</code>, som README foreskrev. Da supabase-js selv tilføjer{" "}
          <code>/rest/v1</code>, gik alle kald til <code>/rest/v1/rest/v1</code>.
        </li>
        <li>
          <strong>Forkert base-sti.</strong> Base-stien passede ikke til det omdøbte repo, så
          sitet var blankt.
        </li>
      </ul>
      <CodeBlock lang="http" title="Supabase-URL'en — før og efter">{`
# Som README foreskrev
VITE_SUPABASE_URL=https://{projekt}.supabase.co/rest/v1
GET /rest/v1/rest/v1/events

# Rettet: supabase-js tilføjer selv /rest/v1
VITE_SUPABASE_URL=https://{projekt}.supabase.co
GET /rest/v1/events
`}</CodeBlock>
      <p>
        Jeg rettede begge og opdaterede <code>.env.example</code>, så næste udvikler ikke
        falder i samme fælde.
      </p>

      <H3>Sådan verificerede jeg resultatet</H3>
      <TableWrap>
        <thead>
          <tr>
            <th>Test</th>
            <th>Resultat</th>
          </tr>
        </thead>
        <tbody>
          {CHECKS.map((check) => (
            <tr key={check.test}>
              <td>{check.test}</td>
              <td>{check.result}</td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <H2 number="04">Refleksion</H2>
      <p>
        Mit vigtigste valg var ikke at ændre mest muligt. Jeg rørte kun det visuelle
        udtryk, hvor det gav konsistens eller korrekt metadata. Performance arbejdede jeg ikke
        med, fordi jeg prioriterede de fund, der blokerede tilmelding og deploy. Jeg lod også
        datamodellens gentagne venue-oplysninger stå: navn, adresse og by gentages på hvert
        event i stedet for at ligge i en egen tabel.
      </p>
      <Callout title="Indsigt" type="insight">
        <p>
          Deploy-fejlene lærte mig at verificere i det publicerede miljø og ikke kun lokalt. De
          viste mig også, at dokumentation i sig selv kan være en fejlkilde.
        </p>
      </Callout>

      <H2 number="05">Forretningspotentiale</H2>
      <ul>
        <li>
          <strong>For brugerne:</strong> Tilmeldingen virker og giver tydelig feedback. Det bør
          give flere gennemførte tilmeldinger og færre, der giver op på en blank side.
        </li>
        <li>
          <strong>For arrangørerne:</strong> Tilmeldinger er koblet til events og kan følges.
        </li>
        <li>
          <strong>For Mellemrum:</strong> Datakald og styles ligger ét sted, så nye features er
          hurtigere og billigere at bygge.
        </li>
      </ul>
      <Callout type="info">
        <p>Vurderingen bygger på fundene i min audit, ikke på målte brugsdata.</p>
      </Callout>
    </>
  );
}

export default Mellemrum;

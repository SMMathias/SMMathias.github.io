import {
  Badge,
  Button,
  ButtonRow,
  Callout,
  Fact,
  Facts,
  Flow,
  Gallery,
  H2,
  H3,
  LinkList,
  Stat,
  Stats,
  TableWrap,
} from "../../components/docs";
import { getProject } from "../../data/projects";

const project = getProject("vuuh");
const base = import.meta.env.BASE_URL;
const linkTo = (label) => project.links.find((link) => link.label === label).href;

const FINDINGS = [
  {
    title: "Ingen retning mellem trinnene",
    priority: "High",
    detail:
      "Installationssiden sendte ikke brugeren videre. »Connect to Shopify« førte til en Outputs-side, hvor Shopify skulle vælges igen.",
  },
  {
    title: "Manglende feedback på systemstatus",
    priority: "High",
    detail:
      "Successiden lignede en fejlside, og dashboardet havde ingen fejl- eller tomme tilstande.",
  },
  {
    title: "Uklar sammenhæng mellem Shopify, brands og demoprodukt",
    priority: "Medium",
    detail:
      "Det var ikke forklaret, hvad et demoprodukt er. Brugeren kunne frygte, at det lægger rigtige varer i butikken.",
  },
];

function Vuuh() {
  return (
    <>
      <Facts>
        <Fact label="Kontekst">
          Gruppeprojekt, 3. semester · med Martin, Magnus, Sebastian og Daniel
        </Fact>
        <Fact label="Kunde">Vuuh</Fact>
        <Fact label="Min rolle">Primært prototypen i Figma</Fact>
        <Fact label="Links">
          <LinkList links={project.links} />
        </Fact>
      </Facts>

      <H2>Udfordring</H2>
      <p>
        Vuuh er en Shopify-app, der henter produktdata og billeder fra brands direkte ind i
        butikkens webshop. En ny bruger skal installere appen, forbinde sin Shopify-butik og se
        et demoprodukt, før værdien giver mening.
      </p>
      <p>
        Det flow var svært at gennemføre for en butiksejer uden integrationsviden. Efter
        installationen kom man til en side, der lignede en fejl, og derfra skulle brugeren selv
        finde vej.
      </p>

      <H2 number="01">Undersøgelse og prioritering</H2>
      <p>
        Vi brugte heuristisk evaluering af de enkelte skærme og en cognitive walkthrough af
        flowets ni trin, set fra en ny bruger med Shopify-erfaring, men uden integrationsviden.
      </p>
      <Stats>
        <Stat label="trin i cognitive walkthrough" value="9" />
        <Stat label="findings" value="3" />
        <Stat label="med prioritet High" value="2" />
      </Stats>
      <p>
        Fra installationen til brands var svarene overvejende <em>unclear</em> eller{" "}
        <em>unlikely</em>. Først da produktet kunne ses i Shopify, var alle svar{" "}
        <em>likely</em>.
      </p>
      <p>
        Vi samlede fundene i tre findings og prioriterede efter, hvor kritiske de var for, at
        brugeren når frem til værdien:
      </p>
      <TableWrap>
        <thead>
          <tr>
            <th>Finding</th>
            <th>Prioritet</th>
          </tr>
        </thead>
        <tbody>
          {FINDINGS.map((finding, index) => (
            <tr key={finding.title}>
              <td>
                <strong>
                  {index + 1}. {finding.title}.
                </strong>{" "}
                {finding.detail}
              </td>
              <td>
                <Badge tone={finding.priority === "High" ? "red" : "amber"}>
                  {finding.priority}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <Callout type="note">
        <p>Vuuh bekræftede, at vores diagnose og prioritering ramte rigtigt.</p>
      </Callout>

      <H2 number="02">Løsning og faglige valg</H2>
      <p>
        Redesignet samler onboardingen i tre tydelige trin. Hvert trin svarer på et konkret
        finding.
      </p>
      <Flow steps={["Install Vuuh", "Connect to Shopify", "See the Magic"]} />

      <H3>En installation, der føles som en succes</H3>
      <p>
        Installationssiden siger nu »Vuuh is installed successfully«, viser de tre trin og har
        én primær knap, »Open Vuuh«. Brugeren ved, at det virkede, og hvad der sker bagefter
        (finding 1 og 2).
      </p>
      <Gallery
        caption="Fra installationssiden til dashboardet."
        cols={1}
        items={[
          {
            label: "Før",
            src: `${base}vuuh-installation-foer.webp`,
            alt: "Den gamle installationsside med »Start receiving product data« og det gamle dashboard",
            width: 1247,
            height: 351,
          },
          {
            label: "Efter",
            src: `${base}vuuh-installation-efter.webp`,
            alt: "Den nye installationsside med »Vuuh is installed successfully«, tre trin og knappen »Open Vuuh«",
            width: 1247,
            height: 348,
          },
        ]}
        zoom
      />

      <H3>Et dashboard, der viser vejen</H3>
      <p>
        Velkomstwidgeten er erstattet af en trinindikator øverst og to kort: »Connect to
        Shopify« og »See the Magic in Action«. Færdige trin streges over og får et flueben
        (finding 1).
      </p>
      <Gallery
        cols={1}
        items={[
          {
            label: "Før",
            src: `${base}vuuh-dashboard-foer.webp`,
            alt: "Det gamle dashboard med velkomstwidget, Shopify-kort og demoprodukt side om side",
            width: 1018,
            height: 622,
          },
          {
            label: "Efter",
            src: `${base}vuuh-dashboard-efter.webp`,
            alt: "Det nye dashboard med trinindikator øverst og kortene »Connect to Shopify« og »See the Magic in Action«",
            width: 1046,
            height: 590,
          },
        ]}
        zoom
      />

      <H3>Shopify-opsætning direkte i en modal</H3>
      <p>
        Knappen åbner nu opsætningen direkte i stedet for at sende brugeren via Outputs-siden.
        Tekniske felter som »Shop name« og »Option names« har forklarende tekst og et link til
        en guide (finding 1 og heuristikken <em>Match between system and the real world</em>).
      </p>

      <H3>Demoproduktet forklaret og bekræftet</H3>
      <p>
        Kortet forklarer, at demoproduktet viser, hvordan Vuuh genererer produktdata. Mens
        produktet oprettes, vises de enkelte delskridt. Bagefter bekræfter en besked, at
        produktet er klar, med en knap til at se det i Shopify (finding 3 og 2).
      </p>
      <Gallery
        items={[
          {
            label: "Undervejs",
            src: `${base}vuuh-demoprodukt-opretter.webp`,
            alt: "»Creating your demo product…« med tre delskridt: produktdata, beskrivelse og billeder",
            width: 550,
            height: 463,
          },
          {
            label: "Færdig",
            src: `${base}vuuh-demoprodukt-klar.webp`,
            alt: "»Your demo product is ready« med tre overstregede trin og knappen »View product in Shopify«",
            width: 550,
            height: 714,
          },
        ]}
      />

      <H3>Kvalificeret gennem accessibility</H3>
      <p>
        I accessibility-checket spurgte vi, hvad flowet kræver af brugeren at forstå og huske.
        Svaret var: for meget. Brugeren skulle selv holde styr på, hvor de var, og om en
        handling var lykkedes.
      </p>
      <p>
        Derfor tilføjede vi animeret feedback med Lottie-animationer ved de vigtigste
        overgange: et flueben, når et trin er gennemført, en indlæsning, mens demoproduktet
        oprettes, og en fejring, når alt er klar.
      </p>
      <Callout title="Animationen står aldrig alene" type="tip">
        <p>
          Hver animation følges af en tekst som »Shopify connected« og en opdateret
          trinindikator, så beskeden også kan forstås uden animationen.
        </p>
      </Callout>

      <H2 number="03">Resultat og dokumentation</H2>
      <p>
        Resultatet er en klikbar Figma-prototype af hele flowet, fra installation til
        demoproduktet i Shopify. Vi gennemgik den systematisk for at finde friktion og
        præsenterede den for Vuuh, som var meget positive.
      </p>
      <ButtonRow>
        <Button href={linkTo("Prototype")} icon="arrow-up-right" variant="solid">
          Åbn prototypen
        </Button>
        <Button href={linkTo("Præsentation")}>Se præsentationen</Button>
      </ButtonRow>

      <H2 number="04">Refleksion</H2>
      <p>
        Vi prioriterede retning og feedback frem for at rydde op i hele dashboardet, fordi det
        var der, brugeren faldt af. Jeg lærte meget af at arbejde tæt med en rigtig kunde, der
        stiller reelle krav. Fundene bygger på ekspertmetoder, så næste skridt er en brugertest
        med nye brugere og at lade animationerne respektere indstillingen for reduceret
        bevægelse.
      </p>

      <H2 number="05">Forretningspotentiale</H2>
      <ul>
        <li>
          <strong>For butiksejerne:</strong> De når hurtigere frem til at se et færdigt produkt
          i deres egen butik og forstår, hvad Vuuh gør for dem.
        </li>
        <li>
          <strong>For Vuuh:</strong> Flere installationer kan blive til aktive, betalende
          brugere.
        </li>
      </ul>
    </>
  );
}

export default Vuuh;

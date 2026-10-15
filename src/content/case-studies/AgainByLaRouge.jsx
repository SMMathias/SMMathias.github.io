import {
  Badge,
  BadgeList,
  Callout,
  Fact,
  Facts,
  Figure,
  H2,
  H3,
  LinkList,
  Swatches,
  TableWrap,
} from "../../components/docs";
import { getProject } from "../../data/projects";

const project = getProject("again-by-la-rouge");
const base = import.meta.env.BASE_URL;

const SEGMENTS = [
  {
    name: "Den prisbevidste kvalitetsjæger",
    motivation:
      "Vil have premium mode uden at betale fuld pris og forventer et trygt flow, ikke et loppemarked.",
    prioritized: true,
  },
  {
    name: "Den loyale LA RŌUGE-kunde",
    motivation:
      "Kender pasformen og vil både finde udsolgte styles og sælge uden selv at oprette en annonce.",
    prioritized: true,
  },
  {
    name: "Archive hunteren",
    motivation: "Motiveres af det unikke, fx tidligere kollektioner og one-offs.",
    prioritized: false,
  },
];

function AgainByLaRouge() {
  return (
    <>
      <Facts>
        <Fact label="Kontekst">Gruppeprojekt med Magnus, 3. semester · 2 uger</Fact>
        <Fact label="Fokus">Koncept, brandarkitektur, visuel identitet, Figma</Fact>
        <Fact label="Min rolle">Primært prototypen i Figma</Fact>
        <Fact label="Links">
          <LinkList links={project.links} />
        </Fact>
      </Facts>

      <H2>Udfordring</H2>
      <p>
        LA RŌUGE sælger allerede brugt tøj via platformen create2STAY, men kun som en kategori
        i menuen. Motoren findes, men der er intet brand ovenpå.
      </p>
      <p>
        Opgaven var at udvikle et koncept og et subbrand, hvor kunderne både kan købe og sælge
        brugt LA RŌUGE, og som står selvstændigt uden at miste forbindelsen til hovedbrandet.
      </p>

      <H2 number="01">Undersøgelse og prioritering</H2>
      <p>
        Vores vigtigste indsigt kom fra desk research om, hvorfor folk køber brugt tøj:
        Kunderne køber brugt, fordi det er billigere. Bæredygtighed er en bonus, ikke motivet.
      </p>
      <blockquote>Brugt tøj, men ikke en brugt oplevelse.</blockquote>
      <p>
        Det blev princippet for resten af projektet: Prisen skal være lav, men oplevelsen skal
        føles som LA RŌUGE.
      </p>

      <H3>Målgruppe efter motivation</H3>
      <p>
        Vi inddelte målgruppen efter motivation i stedet for demografi og prioriterede de to
        første, fordi de bærer både køb og salg.
      </p>
      <TableWrap>
        <thead>
          <tr>
            <th>Segment</th>
            <th>Motivation</th>
            <th>Fokus</th>
          </tr>
        </thead>
        <tbody>
          {SEGMENTS.map((segment) => (
            <tr key={segment.name}>
              <td>
                <strong>{segment.name}</strong>
              </td>
              <td>{segment.motivation}</td>
              <td>
                {segment.prioritized ? (
                  <Badge tone="green">Prioriteret</Badge>
                ) : (
                  <Badge>Ikke prioriteret</Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <H2 number="02">Løsning og faglige valg</H2>

      <H3>Et sted, ikke en kategori</H3>
      <p>
        Navnet AGAIN gør secondhand til et sted, kunden opsøger, i stedet for et menupunkt. Vi
        valgte en endorsed brandarkitektur tæt på branded house, så LA RŌUGE er synligt hele
        vejen. Det skaber tillid hos begge målgrupper.
      </p>

      <H3>Tone: brugt som en kvalitet</H3>
      <p>
        Personligheden blander arv fra LA RŌUGE (selvsikker, varm) med noget nyt (kurateret,
        ligefrem). Ordet »again« er selve systemet:
      </p>
      <BadgeList items={["Found again", "Back again", "Loved again", "Sell it again"]} />
      <p>
        Fordi pris er motivet, fravalgte vi skyldfølelse som »køb secondhand for planetens
        skyld« og skriver i stedet:
      </p>
      <blockquote>Good style deserves to be worn again.</blockquote>

      <H3>Visuel identitet: bro og brud</H3>
      <p>
        AGAIN låner logoets streg over et bogstav, den mørke røde farve, typografien og
        layoutet fra LA RŌUGE. Bruddet er en ny sandstensfarve, hentet fra murene i LA RŌUGEs
        egne billeder, og produktbilleder, hvor tøjet står alene. Så kan kunden genkende
        brandet og samtidig se, at det er noget andet.
      </p>
      <Figure
        alt="Farvefordelingen 60-30-10: 60 % lys sandsten, 30 % aubergine, 10 % accent i sandsten og rød"
        caption="Farvefordelingen 60-30-10."
        height={702}
        src={`${base}again-farver.webp`}
        width={1247}
      />
      <Swatches
        colors={[
          { name: "Sandsten lys", value: "#EFEBE3" },
          { name: "Aubergine", value: "#3B1123" },
          { name: "Sandsten", value: "#AF9C74" },
          { name: "Rød", value: "#DB4231" },
        ]}
      />

      <H3>Prototype: to flows med to broer</H3>
      <p>
        I Figma designede vi 11 skærme: et købsflow på fem trin og et sælgerflow på seks. De to
        flows er forbundet: Kvitteringen efter et køb foreslår »Sælg noget igen«, og voucheren
        efter et salg kan bruges i AGAIN.
      </p>
      <Figure
        alt="Købsflowet: forside, Found again-oversigt, produktside, kurv og kvittering med »Sælg noget igen«"
        caption="Købsflowet."
        height={1178}
        src={`${base}again-koebsflow.webp`}
        width={1068}
        zoom
      />
      <Figure
        alt="Sælgerflowet: vælg tøj, estimat, send ind, status og voucher"
        caption="Sælgerflowet."
        height={794}
        src={project.image}
        width={1247}
        zoom
      />
      <p>
        Standskalaen bruger de samme ord, når sælgeren vælger, og når køberen læser. Det skaber
        tillid uden et loppemarkedspræg.
      </p>
      <BadgeList items={["Som ny", "Meget god", "God"]} />

      <H2 number="03">Resultat og dokumentation</H2>
      <p>
        Resultatet er et branddeck og en klikbar Figma-prototype af begge flows, præsenteret som
        en pitch.
      </p>
      <Callout title="Feedback på pitchen" type="note">
        <p>
          Designet lå tæt op ad det originale brand, og vinklen på at konkurrere mod Vinted var
          stærk.
        </p>
      </Callout>

      <H2 number="04">Refleksion</H2>
      <p>
        Vores største valg var at bygge brandet på pris og kvalitet i stedet for
        bæredygtighed. Det går imod de fleste secondhand-brands, men følger det, kunderne
        faktisk motiveres af.
      </p>
      <Callout title="Indsigt" type="insight">
        <p>
          Et subbrand handler om at vælge, hvad der skal lånes, og hvad der skal brydes. For
          lidt brud, og det bliver en kategori igen. For meget, og forbindelsen til LA RŌUGE
          forsvinder.
        </p>
      </Callout>
      <p>
        Indsigten bygger kun på desk research, så næste skridt er at bekræfte den med
        interviews og teste sælgerflowet og standskalaen med rigtige LA RŌUGE-kunder.
      </p>

      <H2 number="05">Forretningspotentiale</H2>
      <ul>
        <li>
          <strong>For LA RŌUGE:</strong> En ny indgang for prisbevidste kunder, der ellers ikke
          ville købe til fuld pris.
        </li>
        <li>
          <strong>For sælgerne:</strong> Vouchers gør salget til en grund til at handle igen,
          så pengene bliver i universet.
        </li>
        <li>
          <strong>For forretningen:</strong> Brandet bygger på en platform, der allerede kører,
          så investeringen er lav.
        </li>
      </ul>
      <Callout type="info">
        <p>Vurderingen bygger på vores indsigter og konceptet, ikke på målte salgsdata.</p>
      </Callout>
    </>
  );
}

export default AgainByLaRouge;

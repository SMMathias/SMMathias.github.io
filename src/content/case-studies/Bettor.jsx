import {
  BadgeList,
  Callout,
  CodeBlock,
  Fact,
  Facts,
  Figure,
  Flow,
  H2,
  H3,
  LinkList,
  Stat,
  Stats,
  Swatches,
  TableWrap,
} from "../../components/docs";
import { getProject } from "../../data/projects";

const project = getProject("bettor");

function Bettor() {
  return (
    <>
      <Facts>
        <Fact label="Type">Web application</Fact>
        <Fact label="Kontekst">Eksamensprojekt, 2. semester · Expo 2026</Fact>
        <Fact label="Målgruppe">16–25 år</Fact>
        <Fact label="Stack">React, Supabase, Figma, Lottie</Fact>
        <Fact label="Links">
          <LinkList links={project.links} />
        </Fact>
      </Facts>

      <Figure
        alt={project.imageAlt}
        caption="Eksamensplakaten: research, UX/UI og kode på én side."
        height={801}
        src={project.image}
        width={1172}
        zoom
      />

      <H2>Problemet</H2>
      <blockquote>»Hvis jeg ikke gør det, giver jeg en kande øl i byen«</blockquote>
      <p>
        Den slags løfter forsvinder i gruppechatten. Bettor gemmer aftalen, deltagerne,
        indsatsen og beviset — så ingen kan løbe fra den.
      </p>
      <Callout title="Ikke gambling" type="note">
        <p>
          Bettor er en social challenge-app. Indsatsen er kaffe, opvask eller en sjov
          straf, og et bet er først aktivt, når begge parter har godkendt det.
        </p>
      </Callout>

      <H3>Målgruppe</H3>
      <p>
        Studerende, roomies og vennegrupper på 16–25 år — som persona-Monrad (21), der
        laver spontane aftaler på Snap og Messenger og hader, når de bliver glemt eller
        diskuteret bagefter.
      </p>

      <H3>Min rolle</H3>
      <p>
        Bettor startede som eksamensprojekt på 2. semester, men jeg fortsatte med det
        efter eksamen: koncept, flere runder på hjem- og vennefanen, UI og build i React
        og Supabase.
      </p>

      <H2 number="01">Research</H2>
      <Stats>
        <Stat label="i tree sort-testen" value="24" />
        <Stat label="i think aloud" value="8" />
        <Stat label="missede mic-knappen" value="5/8" />
      </Stats>

      <H3>Value Proposition Canvas</H3>
      <p>Canvasset endte i fire behov, som resten af projektet blev målt op mod:</p>
      <ul>
        <li>
          Lave aftaler <strong>hurtigt</strong>.
        </li>
        <li>
          Holde styr på <strong>hvem der skylder hvad</strong>.
        </li>
        <li>
          Bevare <strong>det sjove</strong>.
        </li>
        <li>Undgå diskussion om, hvad der blev sagt.</li>
      </ul>

      <H3>Closed tree sort</H3>
      <p>
        Tolv scenarier. Navigationen holdt — men to funktioner blev{" "}
        <strong>splittet</strong> mellem faner:
      </p>
      <TableWrap>
        <thead>
          <tr>
            <th>Funktion</th>
            <th>Placeret under</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hvem skylder hvad?</td>
            <td>Hjem / Venner</td>
          </tr>
          <tr>
            <td>Godkend et bet</td>
            <td>Hjem / Bets</td>
          </tr>
        </tbody>
      </TableWrap>

      <H3>Think aloud</H3>
      <p>
        Fem opgaver. Alle forstod FAB-knappen som »opret« — men to ting drillede:
      </p>
      <ul>
        <li>
          <strong>Tryk → hold.</strong> 5/8 trykkede på mikrofonen i stedet for at holde
          den nede.
        </li>
        <li>
          <strong>»Afgør bet«.</strong> CTA&apos;en forvirrede — det var ikke målgruppens
          sprog.
        </li>
      </ul>
      <Callout title="Indsigt" type="insight">
        <p>
          Skriv som vennegruppen taler — og lad vigtige funktioner kunne findes flere
          steder.
        </p>
      </Callout>

      <H2 number="02">UX/UI</H2>

      <H3>OOUX: objekter før skærme</H3>
      <p>Appens kerne er kortlagt som seks objekter med relationer og handlinger:</p>
      <BadgeList items={["Bet", "Bruger", "Indsats", "Gruppe", "Afgørelse", "Notifikation"]} />

      <H3>User flows: tre handlinger, nul friktion</H3>
      <p>
        Skriv eller indtal bettet, vælg indsats — og bettet er aktivt, når modparten
        siger ja.
      </p>
      <Flow steps={["Opret", "Godkend", "Afgør"]} />

      <H3>Designsystem i Figma</H3>
      <p>
        Tre farver, én typografi og en lille UI-kit: »Opret bet«-knappen, status-badges
        som <em>Aktiv</em> og <em>Afgjort</em>, og bet-kort med »Din tur«.
      </p>
      <Swatches
        colors={[
          { name: "Sort", value: "#080808" },
          { name: "Gul", value: "#F4F52A" },
          { name: "Offwhite", value: "#F5F1E8" },
        ]}
      />
      <p>
        Typografien er <strong>Bricolage Grotesque</strong>.
      </p>

      <H3>Lottie: social feedback</H3>
      <p>
        Maskotten Blobbo (idle, wink og splash) og en emoji-explosion gør systemfeedback
        til en del af gruppens interne humor.
      </p>
      <Callout title="Indsigt" type="insight">
        <p>Design ud fra brugerens handlinger — objekter og flows — ikke ud fra skærme.</p>
      </Callout>

      <H2 number="03">Kode</H2>

      <H3>React: komponenter og tilstand</H3>
      <ul>
        <li>Routing med URL-params og 404-fallback.</li>
        <li>
          <code>useState</code> til søgning og filtre.
        </li>
        <li>Conditional rendering til opret-flowets steps og »din tur«-logikken.</li>
      </ul>

      <H3>Supabase REST: CRUD med fetch</H3>
      <p>
        React-appen taler med Supabase via <code>fetch</code> og <code>async/await</code>{" "}
        — tre tabeller plus Auth. Ét bet er en <code>POST</code> i tre tabeller, en{" "}
        <code>GET</code> henter relationerne i ét kald, og godkendelse er en{" "}
        <code>PATCH</code>:
      </p>
      <CodeBlock lang="http" title="Godkend et bet">{`
PATCH /bets?id=eq.{betId}
{ "status": "accepted" }
`}</CodeBlock>

      <H3>Robusthed og tilgængelighed</H3>
      <ul>
        <li>Sender-state forhindrer dobbelt-bets.</li>
        <li>
          Ruter er beskyttet med <code>&lt;Navigate&gt;</code>.
        </li>
        <li>Supabase Auth ejer alle passwords.</li>
        <li>
          Semantisk HTML, labels og <code>aria-label</code> gør appen tilgængelig.
        </li>
      </ul>
      <Callout title="Indsigt" type="insight">
        <p>
          Ingen <code>DELETE</code> — afviste bets soft-deletes med <code>PATCH</code>,
          for historikken <em>er</em> produktet.
        </p>
      </Callout>
    </>
  );
}

export default Bettor;

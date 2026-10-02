import { Link } from "react-router";
import {
  Button,
  ButtonRow,
  Callout,
  Card,
  CardGroup,
  CodeBlock,
  H2,
  Step,
  Steps,
} from "../components/docs";
import projects from "../data/projects";

function Quickstart() {
  return (
    <>
      <Callout title="Forudsætninger" type="info">
        <p>Ingen. Du skal bare have noget, der skal designes, bygges — eller begge dele.</p>
      </Callout>

      <H2>Tre trin</H2>
      <Steps>
        <Step title="Lær mig at kende">
          <p>
            Jeg er multimediedesigner på 3. semester på EAAA og designer & builder hos
            Strømm i Aarhus. Mit felt er interface, branding og frontend.
          </p>
          <CodeBlock lang="js" title="hej.js">{`
import { mathias } from "smmathias.github.io";

mathias.role;     // "Designer & builder"
mathias.stack;    // ["React", "Supabase", "Figma"]
mathias.approach; // "Spec først, så build"
mathias.location; // "Aarhus, Danmark"
`}</CodeBlock>
          <p>
            Hele objektet står i <Link to="/reference/profil">Profil-referencen</Link>.
          </p>
        </Step>

        <Step title="Se arbejdet">
          <p>
            Den hurtigste vej ind er case studies. Bettor viser hele vejen fra research
            over UX til kode; Wanted Archives handler om identitet og branding.
          </p>
          <CardGroup cols={2}>
            {projects.map((project) => (
              <Card key={project.slug} title={project.title} to={`/case-studies/${project.slug}`}>
                {project.summary}
              </Card>
            ))}
          </CardGroup>
        </Step>

        <Step title="Tag kontakt">
          <p>Skriv en mail — det er den direkte vej. Du finder mig også på GitHub og LinkedIn.</p>
          <CodeBlock lang="js" title="kontakt.js">{`
await mathias.contact({
  via: "mail",
  to: "mathias08102004@gmail.com",
  subject: "Et projekt, der skal fra idé til deployet produkt",
});
`}</CodeBlock>
          <ButtonRow>
            <Button href="mailto:mathias08102004@gmail.com" icon="mail" variant="solid">
              Skriv en mail
            </Button>
            <Button to="/reference/kontakt">Alle kanaler</Button>
          </ButtonRow>
        </Step>
      </Steps>

      <H2>Næste skridt</H2>
      <CardGroup cols={2}>
        <Card icon="braces" title="Reference" to="/reference/profil">
          Profil, stack og kontakt i struktureret form.
        </Card>
        <Card icon="history" title="Changelog" to="/changelog">
          Fra 1. semester til i dag — nyeste øverst.
        </Card>
      </CardGroup>
    </>
  );
}

export default Quickstart;

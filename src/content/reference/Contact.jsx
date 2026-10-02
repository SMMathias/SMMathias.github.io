import { Button, Channel, CodeBlock, Field, Fields, H2 } from "../../components/docs";

const EMAIL = "mathias08102004@gmail.com";
const SUBJECT = "Projekt — fra idé til deployet produkt";

function Contact() {
  return (
    <>
      <H2>Kanaler</H2>
      <div className="channels">
        <Channel href={`mailto:${EMAIL}`} method="MAIL" name="Mail" value={EMAIL}>
          <p>Den direkte vej — projekter, jobs og spørgsmål.</p>
        </Channel>
        <Channel href="https://github.com/SMMathias" method="GET" name="GitHub" value="github.com/SMMathias">
          <p>Kode og repos.</p>
        </Channel>
        <Channel
          href="https://www.linkedin.com/in/mathias-skyum-moeslund-438799344/"
          method="GET"
          name="LinkedIn"
          value="Mathias Skyum Moeslund"
        >
          <p>Erfaring og netværk.</p>
        </Channel>
      </div>

      <H2>Parametre</H2>
      <p>En god første mail har typisk de her tre ting med:</p>
      <Fields>
        <Field name="subject" required type="string">
          <p>Hvad det handler om — gerne på én linje.</p>
        </Field>
        <Field name="from" required type="string">
          <p>Hvem du er, så jeg ved, hvem jeg svarer.</p>
        </Field>
        <Field name="context" type="string">
          <p>Projektet, tidsrammen og hvad du har brug for: design, build eller begge dele.</p>
        </Field>
      </Fields>

      <H2>Lokation</H2>
      <p>Jeg bor og arbejder i Aarhus, Danmark.</p>
    </>
  );
}

export function ContactExample() {
  return (
    <>
      <CodeBlock lang="mail" title="Anmodning" wrap>{`
Til: ${EMAIL}
Emne: ${SUBJECT}

Hej Mathias,

Jeg hedder [navn] og arbejder på [projekt].
Vi har brug for hjælp til [design, build eller begge].

Tidsramme: [hvornår]
`}</CodeBlock>
      <Button
        href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
        icon="mail"
        variant="solid"
      >
        Åbn i din mail
      </Button>
    </>
  );
}

export default Contact;

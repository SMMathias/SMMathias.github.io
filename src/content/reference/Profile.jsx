import { Link } from "react-router";
import { Callout, CodeBlock, Expandable, Field, Fields, H2 } from "../../components/docs";

function Profile() {
  return (
    <>
      <H2>Felter</H2>
      <Fields>
        <Field name="name" type="string">
          <p>
            Fulde navn: <code>Mathias Skyum Moeslund</code>.
          </p>
        </Field>
        <Field name="role" type="string">
          <p>Nuværende rolle. Jeg designer og bygger — begge dele.</p>
        </Field>
        <Field name="employer" type="object">
          <p>Hvor jeg arbejder til daglig.</p>
          <Expandable>
            <Field name="employer.name" type="string">
              <p>
                <code>Strømm</code>
              </p>
            </Field>
            <Field name="employer.city" type="string">
              <p>
                <code>Aarhus</code>
              </p>
            </Field>
          </Expandable>
        </Field>
        <Field name="education" type="object">
          <p>Uddannelsen ved siden af.</p>
          <Expandable>
            <Field name="education.school" type="string">
              <p>
                <code>Erhvervsakademi Aarhus</code> (EAAA)
              </p>
            </Field>
            <Field name="education.program" type="string">
              <p>
                <code>Multimediedesign</code>
              </p>
            </Field>
            <Field name="education.semester" type="integer">
              <p>
                <code>3</code>
              </p>
            </Field>
          </Expandable>
        </Field>
        <Field name="fields" type="string[]">
          <p>Fagområder: interface, branding og frontend.</p>
        </Field>
        <Field name="stack" type="string[]">
          <p>
            Primære værktøjer. Se <Link to="/reference/stack">Stack</Link> for detaljer.
          </p>
        </Field>
        <Field name="approach" type="string">
          <p>
            Arbejdsgangen: Jeg udtænker specen først og bygger derefter — fra idé til
            deployet produkt.
          </p>
        </Field>
        <Field name="location" type="string">
          <p>
            <code>Aarhus, Danmark</code>
          </p>
        </Field>
      </Fields>

      <Callout type="info">
        <p>
          Profilen følger <Link to="/changelog">changelogen</Link>. Når noget ændrer sig —
          nyt job, nyt semester — bliver det logget dér.
        </p>
      </Callout>
    </>
  );
}

export function ProfileExample() {
  return (
    <CodeBlock lang="json" status="200" title="Svar">{`
{
  "name": "Mathias Skyum Moeslund",
  "role": "Designer & builder",
  "employer": {
    "name": "Strømm",
    "city": "Aarhus"
  },
  "education": {
    "school": "Erhvervsakademi Aarhus",
    "program": "Multimediedesign",
    "semester": 3
  },
  "fields": [
    "Interface",
    "Branding",
    "Frontend"
  ],
  "stack": ["React", "Supabase", "Figma"],
  "approach": "Spec først, så build",
  "location": "Aarhus, Danmark"
}
`}</CodeBlock>
  );
}

export default Profile;

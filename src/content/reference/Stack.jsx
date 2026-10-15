import { Link } from "react-router";
import { Badge, BadgeList, CodeBlock, H2, TableWrap } from "../../components/docs";
import { getProject } from "../../data/projects";

const TOOLS = [
  { name: "React", use: "Komponenter og frontend", frequency: "Dagligt" },
  { name: "Figma", use: "Design, prototyper og designsystemer", frequency: "Dagligt" },
  { name: "Supabase", use: "Database og auth", frequency: "Ugentligt" },
];

const DISCIPLINES = [
  "Interfacedesign",
  "UX & IA",
  "Prototyping",
  "Frontend",
  "Identitet",
  "Copywriting",
];

const METHODS = [
  { name: "Teknisk audit", phase: "Analyse", project: "mellemrum" },
  { name: "Heuristisk evaluering", phase: "Research", project: "vuuh" },
  { name: "Cognitive walkthrough", phase: "Research", project: "vuuh" },
  { name: "Desk research", phase: "Research", project: "again-by-la-rouge" },
  { name: "Value Proposition Canvas", phase: "Research", project: "bettor" },
  { name: "Closed tree sort", phase: "Research", project: "bettor" },
  { name: "Think aloud", phase: "Test", project: "bettor" },
  { name: "Accessibility-check", phase: "Test", project: "vuuh" },
  { name: "OOUX", phase: "UX", project: "bettor" },
  { name: "User flows", phase: "UX", project: "bettor" },
  { name: "Brandarkitektur", phase: "Branding", project: "again-by-la-rouge" },
  { name: "Designsystem i Figma", phase: "UI", project: "bettor" },
  { name: "Lottie-animationer", phase: "UI", project: "bettor" },
];

function Stack() {
  return (
    <>
      <H2>Værktøjer</H2>
      <TableWrap>
        <thead>
          <tr>
            <th>Værktøj</th>
            <th>Bruges til</th>
            <th>Frekvens</th>
          </tr>
        </thead>
        <tbody>
          {TOOLS.map((tool) => (
            <tr key={tool.name}>
              <td>
                <strong>{tool.name}</strong>
              </td>
              <td>{tool.use}</td>
              <td>
                <Badge tone={tool.frequency === "Dagligt" ? "green" : "blue"}>
                  {tool.frequency}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <H2>Discipliner</H2>
      <BadgeList items={DISCIPLINES} />

      <H2>Metoder i praksis</H2>
      <p>Metoder jeg har brugt i rigtige projekter — med casen, hvor de er i brug.</p>
      <TableWrap>
        <thead>
          <tr>
            <th>Metode</th>
            <th>Fase</th>
            <th>Case</th>
          </tr>
        </thead>
        <tbody>
          {METHODS.map((method) => (
            <tr key={method.name}>
              <td>{method.name}</td>
              <td>{method.phase}</td>
              <td>
                <Link to={`/case-studies/${method.project}`}>
                  {getProject(method.project).title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
    </>
  );
}

export function StackExample() {
  return (
    <CodeBlock lang="json" status="200" title="Svar">{`
{
  "tools": {
    "React": "daily",
    "Figma": "daily",
    "Supabase": "weekly"
  },
  "disciplines": [
    "Interfacedesign",
    "UX & IA",
    "Prototyping",
    "Frontend",
    "Identitet",
    "Copywriting"
  ]
}
`}</CodeBlock>
  );
}

export default Stack;

import { Link } from "react-router";
import { Badge, BadgeList, CodeBlock, H2, TableWrap } from "../../components/docs";

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
  { name: "Value Proposition Canvas", phase: "Research" },
  { name: "Closed tree sort", phase: "Research" },
  { name: "Think aloud", phase: "Test" },
  { name: "OOUX", phase: "UX" },
  { name: "User flows", phase: "UX" },
  { name: "Designsystem i Figma", phase: "UI" },
  { name: "Lottie-animationer", phase: "UI" },
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
      <p>
        Metoder jeg har brugt i rigtige projekter — alle sammen fra{" "}
        <Link to="/case-studies/bettor">Bettor</Link>.
      </p>
      <TableWrap>
        <thead>
          <tr>
            <th>Metode</th>
            <th>Fase</th>
          </tr>
        </thead>
        <tbody>
          {METHODS.map((method) => (
            <tr key={method.name}>
              <td>{method.name}</td>
              <td>{method.phase}</td>
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

import { Link } from "react-router";
import { Card, CardGroup, H2, LinkList, TableWrap } from "../components/docs";
import projects from "../data/projects";

function CaseStudies() {
  return (
    <>
      <CardGroup cols={2}>
        {projects.map((project) => (
          <Card
            image={project.image}
            imageAlt={project.imageAlt}
            imagePosition={project.imagePosition}
            key={project.slug}
            logo={project.logo}
            meta={[project.semester, ...project.tags]}
            title={project.title}
            to={`/case-studies/${project.slug}`}
          >
            {project.summary}
          </Card>
        ))}
      </CardGroup>

      <H2>Overblik</H2>
      <TableWrap>
        <thead>
          <tr>
            <th>Projekt</th>
            <th>Semester</th>
            <th>Fokus</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.slug}>
              <td>
                <Link to={`/case-studies/${project.slug}`}>{project.title}</Link>
              </td>
              <td>{project.semester}</td>
              <td>{project.tags.join(", ")}</td>
              <td>
                <LinkList links={project.links} />
              </td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
    </>
  );
}

export default CaseStudies;

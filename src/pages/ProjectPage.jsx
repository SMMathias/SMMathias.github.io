import { Link, useParams } from "react-router";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page">
        <p className="kicker">404</p>
        <h1>Projekt ikke fundet</h1>
        <p className="lead">Det projekt findes ikke i listen endnu.</p>
        <div className="detail-actions">
          <Link className="button solid" to="/projects">
            Tilbage til arbejdet
          </Link>
        </div>
      </div>
    );
  }

  const media = project.media;

  return (
    <article className="page">
      <Link className="back-link" to="/projects">
        ← Tilbage til arbejdet
      </Link>

      <p className="kicker">
        {project.tags.join(" · ")} · {project.year}
      </p>
      <h1>{project.title}</h1>
      <p className="case-detail-text">{project.description}</p>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      {project.links.length ? (
        <div className="detail-actions">
          {project.links.map((link) => (
            <a
              className="button solid"
              href={link.href}
              key={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      ) : null}

      {media ? (
        <div className="detail-media">
          {media.type === "cover" ? (
            <div className="case-media cover">
              <img alt={media.alt} src={media.src} />
              {media.logo ? (
                <img alt={media.logoAlt} className="cover-logo" src={media.logo} />
              ) : null}
            </div>
          ) : (
            <div className="case-media">
              <img alt={media.alt} src={media.src} />
            </div>
          )}
        </div>
      ) : null}
    </article>
  );
}

export default ProjectPage;

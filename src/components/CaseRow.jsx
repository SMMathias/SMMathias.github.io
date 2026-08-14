import { Fragment } from "react";
import { Link } from "react-router";

function CaseRow({ index, project }) {
  const number = String(index + 1).padStart(2, "0");
  const media = project.media;

  return (
    <article className="case-row" data-reveal>
      <span className="case-num">{number}</span>

      <div className="case-info">
        <h3 className="case-title">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="case-text">{project.description}</p>
        <span className="case-meta">
          {project.tags.join(" · ")}
          {project.links.map((link) => (
            <Fragment key={link.href}>
              {" · "}
              <a href={link.href} rel="noopener noreferrer" target="_blank">
                {link.label} ↗
              </a>
            </Fragment>
          ))}
        </span>
      </div>

      {media ? (
        media.type === "cover" ? (
          <div className="case-media cover">
            <img alt={media.alt} loading="lazy" src={media.src} />
            {media.logo ? (
              <img
                alt={media.logoAlt}
                className="cover-logo"
                loading="lazy"
                src={media.logo}
              />
            ) : null}
          </div>
        ) : (
          <div className="case-media">
            <img alt={media.alt} loading="lazy" src={media.src} />
          </div>
        )
      ) : null}
    </article>
  );
}

export default CaseRow;

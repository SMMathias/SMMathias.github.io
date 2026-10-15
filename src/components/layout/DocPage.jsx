import { useEffect } from "react";
import { Link } from "react-router";
import { pages } from "../../docs";
import { Endpoint } from "../docs/Api";
import Icon from "../Icon";
import TableOfContents from "./TableOfContents";

const SITE_NAME = "Mathias Skyum Moeslund";

function PageNav({ path }) {
  const index = pages.findIndex((page) => page.path === path);
  if (index === -1) {
    return null;
  }

  const prev = pages[index - 1];
  const next = pages[index + 1];

  return (
    <nav aria-label="Forrige og næste side" className="page-nav">
      {prev ? (
        <Link className="page-nav-link prev" to={prev.path}>
          <span className="page-nav-label">Forrige</span>
          <span className="page-nav-title">
            <Icon name="arrow-left" size={15} />
            {prev.nav ?? prev.title}
          </span>
        </Link>
      ) : null}
      {next ? (
        <Link className="page-nav-link next" to={next.path}>
          <span className="page-nav-label">Næste</span>
          <span className="page-nav-title">
            {next.nav ?? next.title}
            <Icon name="arrow-right" size={15} />
          </span>
        </Link>
      ) : null}
    </nav>
  );
}

function DocPage({ page }) {
  const Content = page.component;
  const Aside = page.aside;

  useEffect(() => {
    document.title = page.path === "/" ? `${SITE_NAME} — Docs` : `${page.title} · ${SITE_NAME}`;
  }, [page]);

  return (
    <div className={Aside ? "doc doc-api" : "doc"}>
      <article className="doc-main">
        {page.hero ? null : (
          <header className="doc-header">
            <p className="doc-eyebrow">{page.group}</p>
            <h1 className="doc-title">{page.title}</h1>
            {page.description ? <p className="doc-lead">{page.description}</p> : null}
            {page.endpoint ? <Endpoint method={page.method} path={page.endpoint} /> : null}
          </header>
        )}
        <div className="doc-content prose">
          <Content />
        </div>
      </article>

      <aside className="doc-aside">
        {Aside ? (
          <div className="api-aside">
            <Aside />
          </div>
        ) : (
          <TableOfContents />
        )}
      </aside>

      <footer className="doc-footer">
        <PageNav path={page.path} />
        <div className="site-footer">
          <span>© 2026 {SITE_NAME}</span>
          <span className="site-footer-links">
            <a aria-label="Mail" className="icon-button" href="mailto:mathias08102004@gmail.com">
              <Icon name="mail" size={16} />
            </a>
            <a
              aria-label="GitHub"
              className="icon-button"
              href="https://github.com/SMMathias"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="github" size={16} />
            </a>
            <a
              aria-label="LinkedIn"
              className="icon-button"
              href="https://www.linkedin.com/in/mathias-skyum-moeslund-438799344/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="linkedin" size={16} />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default DocPage;

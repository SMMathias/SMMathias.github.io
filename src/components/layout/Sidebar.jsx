import { NavLink } from "react-router";
import { groups } from "../../docs";
import { Method } from "../docs/Api";
import Icon from "../Icon";

function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        aria-hidden="true"
        className={open ? "sidebar-backdrop open" : "sidebar-backdrop"}
        onClick={onClose}
      />
      <nav aria-label="Dokumentation" className={open ? "sidebar open" : "sidebar"} id="sidebar">
        {groups.map((group) => (
          <div className="nav-group" key={group.title}>
            <p className="nav-group-title">{group.title}</p>
            <ul>
              {group.pages.map((page) => (
                <li key={page.path}>
                  <NavLink className="nav-link" end onClick={onClose} to={page.path}>
                    {page.method ? <Method method={page.method} small /> : null}
                    <span>{page.nav ?? page.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Header-ikonerne er skjult på mobil, så de bor her i stedet. */}
        <div className="sidebar-footer">
          <a href="mailto:mathias08102004@gmail.com">
            <Icon name="mail" size={16} />
            Mail
          </a>
          <a href="https://github.com/SMMathias" rel="noopener noreferrer" target="_blank">
            <Icon name="github" size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mathias-skyum-moeslund-438799344/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="linkedin" size={16} />
            LinkedIn
          </a>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;

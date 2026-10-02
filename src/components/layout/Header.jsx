import { Link } from "react-router";
import Icon from "../Icon";
import ThemeToggle from "./ThemeToggle";

const IS_MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

function Header({ menuOpen, onMenuToggle, onSearchOpen }) {
  return (
    <header className="header">
      <div className="header-inner">
        <Link aria-label="Mathias Skyum Moeslund — til forsiden" className="brand" to="/">
          <span aria-hidden="true" className="brand-mark">
            MS
          </span>
          <span className="brand-name">Mathias Skyum Moeslund</span>
          <span className="brand-tag">Docs</span>
        </Link>

        <button
          aria-label="Søg i dokumentationen"
          className="search-trigger"
          onClick={onSearchOpen}
          type="button"
        >
          <Icon name="search" size={16} />
          <span className="search-trigger-text">Søg i docs…</span>
          <kbd>{IS_MAC ? "⌘K" : "Ctrl K"}</kbd>
        </button>

        <div className="header-actions">
          <a
            aria-label="GitHub"
            className="icon-button header-social"
            href="https://github.com/SMMathias"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="github" size={17} />
          </a>
          <a
            aria-label="LinkedIn"
            className="icon-button header-social"
            href="https://www.linkedin.com/in/mathias-skyum-moeslund-438799344/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="linkedin" size={17} />
          </a>
          <ThemeToggle />
          <Link className="button button-solid button-sm header-cta" to="/reference/kontakt">
            Kontakt
          </Link>
          <button
            aria-controls="sidebar"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
            className="icon-button menu-button"
            onClick={onMenuToggle}
            type="button"
          >
            <Icon name={menuOpen ? "x" : "menu"} size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { searchPages } from "../../docs";
import Icon from "../Icon";

/* Panelet mountes kun, mens det er åbent, så query og markering
   nulstilles af sig selv hver gang. */
function SearchPanel({ onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const results = useMemo(() => searchPages(query), [query]);

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, []);

  useEffect(() => {
    document.getElementById(`search-result-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  function open(page) {
    onClose();
    navigate(page.path);
  }

  function onKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (results[active]) {
        open(results[active]);
      }
    } else if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  }

  return (
    <div
      className="search-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div aria-label="Søg i dokumentationen" aria-modal="true" className="search-dialog" role="dialog">
        <div className="search-input-row">
          <Icon name="search" size={18} />
          <input
            aria-activedescendant={results.length ? `search-result-${active}` : undefined}
            aria-autocomplete="list"
            aria-controls="search-results"
            aria-expanded="true"
            autoComplete="off"
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Søg efter sider, projekter, værktøjer…"
            ref={inputRef}
            role="combobox"
            spellCheck="false"
            type="text"
            value={query}
          />
          <button className="search-close" onClick={onClose} type="button">
            <kbd>Esc</kbd>
          </button>
        </div>

        {results.length ? (
          <ul className="search-results" id="search-results" role="listbox">
            {results.map((page, index) => (
              <li
                aria-selected={index === active}
                className="search-result"
                id={`search-result-${index}`}
                key={page.path}
                onClick={() => open(page)}
                onMouseMove={() => setActive(index)}
                role="option"
              >
                <span className="search-result-group">{page.group}</span>
                <span className="search-result-title">{page.title}</span>
                <span className="search-result-desc">{page.description}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="search-empty">Ingen resultater for “{query}”.</p>
        )}

        <div className="search-footer">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> naviger
          </span>
          <span>
            <kbd>↵</kbd> åbn
          </span>
          <span>
            <kbd>esc</kbd> luk
          </span>
        </div>
      </div>
    </div>
  );
}

function SearchDialog({ open, onClose }) {
  return open ? <SearchPanel onClose={onClose} /> : null;
}

export default SearchDialog;

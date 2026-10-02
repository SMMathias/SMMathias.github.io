import Badge from "./Badge";

/* Et changelog-opslag: version og periode til venstre (sticky på desktop),
   indholdet til højre. */
export function Update({ version, label, current = false, children }) {
  return (
    <section className="update">
      <div className="update-meta">
        <span className="update-version">{version}</span>
        <span className="update-label">{label}</span>
        {current ? <Badge tone="green">Nu</Badge> : null}
      </div>
      <div className="update-body">{children}</div>
    </section>
  );
}

const CHANGE_TONES = {
  Ny: "green",
  Ændret: "blue",
};

export function Changes({ children }) {
  return <ul className="changes">{children}</ul>;
}

export function Change({ type = "Ny", children }) {
  return (
    <li className="change">
      <Badge tone={CHANGE_TONES[type]}>{type}</Badge>
      <div className="change-text">{children}</div>
    </li>
  );
}

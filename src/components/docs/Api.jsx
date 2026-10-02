import Icon from "../Icon";

export function Method({ method, small = false }) {
  const className = `method method-${method.toLowerCase()}`;
  return <span className={small ? `${className} method-sm` : className}>{method}</span>;
}

export function Endpoint({ method, path }) {
  return (
    <div className="endpoint">
      <Method method={method} />
      <span className="endpoint-path">{path}</span>
    </div>
  );
}

export function Fields({ children }) {
  return <div className="fields">{children}</div>;
}

export function Field({ name, type, required = false, children }) {
  return (
    <div className="field">
      <div className="field-head">
        <span className="field-name">{name}</span>
        <span className="field-type">{type}</span>
        {required ? <span className="field-required">påkrævet</span> : null}
      </div>
      <div className="field-body">{children}</div>
    </div>
  );
}

export function Expandable({ title = "Vis underfelter", children }) {
  return (
    <details className="expandable">
      <summary>
        <Icon name="chevron-right" size={14} />
        {title}
      </summary>
      <div className="expandable-body">{children}</div>
    </details>
  );
}

/* En kontaktkanal, skrevet som et endpoint: metode, navn og værdi. */
export function Channel({ method, name, href, value, children }) {
  const external = !href.startsWith("mailto:");

  return (
    <div className="channel">
      <div className="channel-head">
        <Method method={method} />
        <span className="channel-name">{name}</span>
      </div>
      <a
        className="channel-value"
        href={href}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        {value}
        <Icon name="arrow-up-right" size={14} />
      </a>
      <div className="channel-body">{children}</div>
    </div>
  );
}

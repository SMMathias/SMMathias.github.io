import { Link } from "react-router";
import Icon from "../Icon";

export function Button({ to, href, variant = "outline", icon, children }) {
  const className = `button button-${variant}`;
  const content = (
    <>
      {children}
      {icon ? <Icon name={icon} size={16} /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      className={className}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}

export function ButtonRow({ children }) {
  return <div className="button-row">{children}</div>;
}

/* Nøgle/værdi-tabel — til overblik øverst i cases og på introduktionen. */
export function Facts({ children }) {
  return <dl className="facts">{children}</dl>;
}

export function Fact({ label, children }) {
  return (
    <>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </>
  );
}

/* Eksterne links til en case — i Facts og i overbliktabellen. */
export function LinkList({ links }) {
  return (
    <span className="link-list">
      {links.map((link) => (
        <a href={link.href} key={link.href} rel="noopener noreferrer" target="_blank">
          {link.label} ↗
        </a>
      ))}
    </span>
  );
}

export function Stats({ children }) {
  return <dl className="stats">{children}</dl>;
}

export function Stat({ value, label }) {
  return (
    <div className="stat">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export function Flow({ steps }) {
  return (
    <ol className="flow">
      {steps.map((step, index) => (
        <li className="flow-item" key={step}>
          {index > 0 ? <Icon className="flow-arrow" name="arrow-right" size={16} /> : null}
          <span className="flow-step">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function Swatches({ colors }) {
  return (
    <ul className="swatches">
      {colors.map((color) => (
        <li className="swatch" key={color.value}>
          <span className="swatch-chip" style={{ background: color.value }} />
          <span>{color.name}</span>
          <span className="swatch-value">{color.value}</span>
        </li>
      ))}
    </ul>
  );
}

/* zoom: billedet linker til den fulde fil — godt til plakater med småt tekst. */
function Frame({ src, alt, width, height, zoom = false }) {
  const image = <img alt={alt} height={height} loading="lazy" src={src} width={width} />;

  if (zoom) {
    return (
      <a className="figure-frame zoomable" href={src} rel="noopener" target="_blank">
        {image}
        <span className="figure-zoom">
          Åbn i fuld størrelse <Icon name="arrow-up-right" size={13} />
        </span>
      </a>
    );
  }

  return <div className="figure-frame">{image}</div>;
}

export function Figure({ caption, ...image }) {
  return (
    <figure className="figure">
      <Frame {...image} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/* Flere billeder med én fælles billedtekst. Hvert billede kan få en label
   over sig, fx »Før« og »Efter«. cols={1} stabler dem — til før/efter-par,
   hvor billederne er for brede til at stå side om side. */
export function Gallery({ items, caption, cols = 2, zoom = false }) {
  return (
    <figure className="figure">
      <div className="gallery" style={{ "--cols": cols }}>
        {items.map(({ label, ...image }) => (
          <div key={image.src}>
            {label ? <span className="gallery-label">{label}</span> : null}
            <Frame zoom={zoom} {...image} />
          </div>
        ))}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function TableWrap({ children }) {
  return (
    <div className="table-wrap">
      <table>{children}</table>
    </div>
  );
}

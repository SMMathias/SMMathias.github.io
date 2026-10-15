import { Link } from "react-router";
import Icon from "../Icon";
import Badge from "./Badge";

export function CardGroup({ cols = 2, children }) {
  return (
    <div className="card-group" style={{ "--cols": cols }}>
      {children}
    </div>
  );
}

export function Card({
  title,
  icon,
  to,
  href,
  image,
  imageAlt,
  imagePosition,
  logo,
  meta,
  children,
}) {
  const body = (
    <>
      {image ? (
        <div className="card-image">
          <img
            alt={imageAlt ?? ""}
            loading="lazy"
            src={image}
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
          {logo ? <img alt="" className="card-logo" src={logo} /> : null}
        </div>
      ) : null}
      <div className="card-body">
        {icon ? (
          <span className="card-icon">
            <Icon name={icon} size={18} />
          </span>
        ) : null}
        <p className="card-title">
          {title}
          {to || href ? (
            <Icon
              className="card-arrow"
              name={href ? "arrow-up-right" : "arrow-right"}
              size={15}
            />
          ) : null}
        </p>
        {children ? <div className="card-text">{children}</div> : null}
        {meta?.length ? (
          <div className="card-meta">
            {meta.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );

  if (to) {
    return (
      <Link className="card" to={to}>
        {body}
      </Link>
    );
  }

  if (href) {
    return (
      <a className="card" href={href} rel="noopener noreferrer" target="_blank">
        {body}
      </a>
    );
  }

  return <div className="card">{body}</div>;
}

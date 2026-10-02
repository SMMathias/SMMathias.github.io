import { Children, isValidElement } from "react";
import Icon from "../Icon";

function textOf(node) {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (isValidElement(node)) {
    return textOf(node.props.children);
  }
  return Children.toArray(node).map(textOf).join("");
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* Overskrifter får et id (til TOC og deep links) og et anker, der dukker
   op ved hover. Nummeret ligger i data-number og tegnes med ::before, så
   det ikke kommer med i textContent — og dermed ikke i TOC'en. */
function Heading({ as: Tag, id, number, className, children }) {
  const slug = id ?? slugify(textOf(children));

  return (
    <Tag
      className={className ? `heading ${className}` : "heading"}
      data-number={number}
      id={slug}
    >
      <a aria-label="Link til afsnittet" className="heading-anchor" href={`#${slug}`}>
        <Icon name="link" size={14} />
      </a>
      {children}
    </Tag>
  );
}

export function H2(props) {
  return <Heading as="h2" {...props} />;
}

export function H3(props) {
  return <Heading as="h3" {...props} />;
}

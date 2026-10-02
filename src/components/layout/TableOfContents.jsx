import { useEffect, useState } from "react";
import Icon from "../Icon";

/* Læser h2/h3 med id direkte fra DOM'en, så indholdssiderne ikke skal
   vedligeholde en separat liste. DocPage er keyed på stien, så det her
   kører forfra for hver side. */
function TableOfContents() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll(".doc-content h2[id], .doc-content h3[id]"),
    );
    setItems(
      headings.map((heading) => ({
        id: heading.id,
        text: heading.textContent,
        level: heading.tagName === "H3" ? 3 : 2,
      })),
    );

    let frame = 0;

    function update() {
      frame = 0;
      let current = headings[0]?.id ?? null;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > 120) {
          break;
        }
        current = heading.id;
      }
      /* Helt i bunden kan de sidste afsnit ikke nå toppen — markér det sidste. */
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && headings.length) {
        current = headings[headings.length - 1].id;
      }
      setActiveId(current);
    }

    function onScroll() {
      if (frame === 0) {
        frame = requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame !== 0) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="På denne side" className="toc">
      <p className="toc-title">
        <Icon name="list" size={15} />
        På denne side
      </p>
      <ul>
        {items.map((item) => (
          <li className={item.level === 3 ? "toc-sub" : undefined} key={item.id}>
            <a
              aria-current={item.id === activeId ? "location" : undefined}
              className={item.id === activeId ? "active" : undefined}
              href={`#${item.id}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;

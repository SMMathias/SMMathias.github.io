import { useState } from "react";
import Icon from "../Icon";

/* index.html sætter data-theme før første paint; her skifter vi det bare. */
function ThemeToggle() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Privat vindue o.l. — temaet gælder så bare til næste reload. */
    }
    setTheme(next);
  }

  return (
    <button
      aria-label={theme === "dark" ? "Skift til lyst tema" : "Skift til mørkt tema"}
      className="icon-button"
      onClick={toggle}
      type="button"
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} size={17} />
    </button>
  );
}

export default ThemeToggle;

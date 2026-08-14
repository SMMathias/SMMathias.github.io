import { NavLink, useLocation } from "react-router";
import ScrollProgress from "./ScrollProgress";

const NAV_ITEMS = [
  { id: "arbejde", label: "Arbejde" },
  { id: "vaerktoejer", label: "Værktøjer" },
  { id: "kontakt", label: "Kontakt" },
];

function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <>
      <ScrollProgress />

      <header className="site-header">
        {onHome ? (
          <a className="brand" href="#top">
            Mathias Skyum Moeslund
          </a>
        ) : (
          <NavLink className="brand" end to="/">
            Mathias Skyum Moeslund
          </NavLink>
        )}

        <nav aria-label="Primær navigation" className="site-nav">
          {NAV_ITEMS.map((item) =>
            onHome ? (
              <a href={`#${item.id}`} key={item.id}>
                {item.label}
              </a>
            ) : (
              <NavLink key={item.id} to={`/#${item.id}`}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;

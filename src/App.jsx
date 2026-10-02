import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import DocPage from "./components/layout/DocPage";
import Header from "./components/layout/Header";
import SearchDialog from "./components/layout/SearchDialog";
import Sidebar from "./components/layout/Sidebar";
import { notFoundPage, pages } from "./docs";

/* Links til den gamle portefølje (/projects/bettor osv.) skal stadig virke. */
function LegacyProjectRedirect() {
  const { slug } = useParams();
  return <Navigate replace to={`/case-studies/${slug}`} />;
}

function isTyping(target) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
  );
}

function App() {
  const { pathname, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen(false);
        setSearchOpen((open) => !open);
      } else if (event.key === "/" && !isTyping(event.target)) {
        event.preventDefault();
        setMenuOpen(false);
        setSearchOpen(true);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const lastPathname = useRef(null);

  useEffect(() => {
    /* Kun ved sideskift: på samme side har browseren allerede scrollet
       (smooth) til ankeret. Ved sideskift springer vi instant — til ankeret,
       hvis der er et, ellers til toppen. getElementById frem for
       querySelector: et fragment som "#2025" er ikke en gyldig CSS-selektor. */
    if (lastPathname.current === pathname) {
      return;
    }
    lastPathname.current = pathname;

    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView({ behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#indhold">
        Spring til indhold
      </a>

      <Header
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onSearchOpen={() => {
          setMenuOpen(false);
          setSearchOpen(true);
        }}
      />

      <div className="shell">
        <Sidebar onClose={() => setMenuOpen(false)} open={menuOpen} />

        <main className="main" id="indhold">
          <Routes>
            {pages.map((page) => (
              <Route element={<DocPage key={page.path} page={page} />} key={page.path} path={page.path} />
            ))}
            <Route element={<Navigate replace to="/case-studies" />} path="/projects" />
            <Route element={<LegacyProjectRedirect />} path="/projects/:slug" />
            <Route element={<Navigate replace to="/" />} path="/about" />
            <Route element={<Navigate replace to="/reference/kontakt" />} path="/contact" />
            <Route element={<DocPage page={notFoundPage} />} path="*" />
          </Routes>
        </main>
      </div>

      <SearchDialog onClose={() => setSearchOpen(false)} open={searchOpen} />
    </>
  );
}

export default App;

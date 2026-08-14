import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer";
import IntroOverlay from "./components/IntroOverlay";
import Navbar from "./components/Navbar";
import useScrollReveal from "./hooks/useScrollReveal";
import { markIntroPlayed, shouldPlayIntro } from "./introState";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const { pathname, hash } = useLocation();

  /* Introen ligger her — uden for .route-view — fordi dens transform-
     animation ellers gør position: fixed relativ til route-view i stedet
     for viewporten og lader navbaren tegne ovenpå overlayet. */
  const [showIntro] = useState(
    () => window.location.pathname === "/" && shouldPlayIntro(),
  );

  useEffect(() => {
    markIntroPlayed();
  }, []);

  useScrollReveal(pathname);

  useEffect(() => {
    /* Hash-links på tværs af ruter (fx /projects → /#kontakt) skal lande
       på sektionen; almindelige ruteskift starter i toppen — instant,
       fordi html har scroll-behavior: smooth til de interne links. */
    if (hash) {
      /* getElementById frem for querySelector: et fragment som "#2025"
         er ikke en gyldig CSS-selektor og ville kaste og blanke appen. */
      const target = document.getElementById(
        decodeURIComponent(hash.slice(1)),
      );
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <>
      {showIntro ? <IntroOverlay /> : null}

      <Navbar />

      <main>
        {/* Keyed på stien, så enter-animationen afspilles pr. rute. */}
        <div className="route-view" key={pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import ToolsSection from "../components/ToolsSection";
import WorkSection from "../components/WorkSection";
import { shouldPlayIntro } from "../introState";

function HomePage() {
  /* Spiller introen lige nu (første indlæsning), venter hero-animationerne
     på den; ellers starter de næsten med det samme. */
  const [introActive] = useState(() => shouldPlayIntro());

  return (
    <div className={introActive ? undefined : "no-intro"}>
      <Hero />
      <WorkSection />
      <ToolsSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;

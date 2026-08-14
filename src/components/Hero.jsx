import { useEffect, useRef } from "react";

function Hero() {
  const packRef = useRef(null);

  useEffect(() => {
    const pack = packRef.current;
    if (!pack) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    /* Kortet vipper let mod musen — samme matematik som i designet. */
    let frame = 0;
    let clientX = 0;
    let clientY = 0;

    function update() {
      frame = 0;
      const r = pack.getBoundingClientRect();
      const dx = (clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (clientY - (r.top + r.height / 2)) / (r.height / 2);
      const near = Math.abs(dx) < 2 && Math.abs(dy) < 2 ? 1 : 0;
      pack.style.transform = `perspective(1600px) rotateY(${(dx * 4 * near).toFixed(2)}deg) rotateX(${(-dy * 3 * near).toFixed(2)}deg)`;
    }

    function onMove(event) {
      clientX = event.clientX;
      clientY = event.clientY;
      if (frame === 0) {
        frame = requestAnimationFrame(update);
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      if (frame !== 0) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-visual">
        {/* Tilt ligger på en wrapper: .pack's bobble-animation fylder
            transform: none permanent og ville overtrumfe inline-tiltet. */}
        <div className="pack-tilt" ref={packRef}>
          <div className="pack">
          <div className="pack-head">
            <span className="pack-logo">MSM</span>
            <span className="pack-sub">
              Multimediedesigner
              <br />
              3. semester, EAAA
            </span>
          </div>

          <div className="pack-field">
            <div aria-hidden="true" className="pack-glare" />
            <div aria-hidden="true" className="pack-ground" />
            <img
              alt="Mathias som figur med iPad"
              className="pack-figure"
              height={1300}
              src={`${import.meta.env.BASE_URL}mathias-figur-ipad.webp`}
              width={402}
            />
            <div aria-hidden="true" className="pack-sheen-wrap">
              <span className="pack-sheen" />
            </div>
          </div>

          <div className="pack-bar">
            <span>Stack</span>
            <span className="pack-bar-right">AARHUS</span>
          </div>

          <div className="pack-stack">
            <span className="pack-row">
              React<span className="pack-freq">Dagligt</span>
            </span>
            <span className="pack-row">
              Figma<span className="pack-freq">Dagligt</span>
            </span>
            <span className="pack-row">
              Supabase<span className="pack-freq">Ugentligt</span>
            </span>
          </div>

          <p className="pack-note">
            Designer og builder hos Strømm. Udtænker specen først&nbsp;og
            bygger derefter. Fra idé til deployet produkt.
          </p>
          </div>
        </div>
      </div>

      <div className="hero-copy">
        <h1 className="hero-title">
          <span className="hero-word">Jeg</span>
          <br />
          <span className="hero-word">designer</span>
          <br />
          <span className="hero-word">og</span> <span className="hero-word">bygger</span>
        </h1>

        <p className="hero-intro">
          Jeg elsker at designe interfaces og bygge dem færdigt. Til daglig
          designer og builder jeg hos Strømm i Aarhus, hvor jeg går fra spec
          til deployet produkt uden at aflevere halvvejs.
        </p>

        <div className="hero-facts">
          <span className="fact-label">Felt</span>
          <span>Interface, branding, frontend</span>
          <span className="fact-label">Stack</span>
          <span>React, Supabase, Figma</span>
          <span className="fact-label">Base</span>
          <span>Aarhus, Danmark</span>
        </div>

        <div className="hero-actions">
          <a className="button solid" href="#arbejde">
            Se arbejdet
          </a>
          <a className="button outline" href="#kontakt">
            Kontakt mig
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

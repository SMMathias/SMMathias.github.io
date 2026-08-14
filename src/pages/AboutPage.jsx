function AboutPage() {
  return (
    /* no-intro: hero-facts' bobble-delay er stemt efter intro-overlayet,
       som aldrig spiller her — uden klassen var gridet blankt i 3s. */
    <div className="page no-intro">
      <p className="kicker">Om mig</p>
      <h1>
        Jeg designer
        <br />
        og bygger
      </h1>
      <p className="lead">
        Jeg elsker at designe interfaces og bygge dem færdigt. Jeg læser
        multimediedesign på 3. semester på EAAA, og til daglig designer og
        builder jeg hos Strømm i Aarhus, hvor jeg går fra spec til deployet
        produkt uden at aflevere halvvejs.
      </p>

      <div className="hero-facts" style={{ marginTop: 40, maxWidth: 520 }}>
        <span className="fact-label">Felt</span>
        <span>Interface, branding, frontend</span>
        <span className="fact-label">Stack</span>
        <span>React, Supabase, Figma</span>
        <span className="fact-label">Base</span>
        <span>Aarhus, Danmark</span>
      </div>

      <img
        alt="Figur af Mathias siddende med en bærbar"
        className="page-figure"
        height={1434}
        loading="lazy"
        src={`${import.meta.env.BASE_URL}mathias-figur-laptop.webp`}
        width={640}
      />
    </div>
  );
}

export default AboutPage;

import {
  Button,
  ButtonRow,
  Callout,
  Card,
  CardGroup,
  Fact,
  Facts,
  H2,
} from "../components/docs";

function Introduction() {
  return (
    <>
      <section className="intro-hero">
        <div className="intro-hero-copy">
          <p className="doc-eyebrow">Introduktion</p>
          <h1 className="intro-title">Jeg designer interfaces og bygger dem færdigt.</h1>
          <p className="doc-lead">
            Mathias Skyum Moeslund — multimediedesigner på 3. semester på EAAA og
            designer & builder hos Strømm i Aarhus. Det her er dokumentationen.
          </p>
          <ButtonRow>
            <Button icon="arrow-right" to="/quickstart" variant="solid">
              Quickstart
            </Button>
            <Button to="/case-studies">Se case studies</Button>
          </ButtonRow>
        </div>

        <div className="intro-stage">
          <span className="intro-stage-label">fig. 1 — Mathias</span>
          <img
            alt="Mathias som figur med en iPad under armen"
            height={1300}
            src={`${import.meta.env.BASE_URL}mathias-figur-ipad.webp`}
            width={402}
          />
        </div>
      </section>

      <H2>Hvad du finder her</H2>
      <CardGroup cols={2}>
        <Card icon="rocket" title="Quickstart" to="/quickstart">
          Hvem jeg er, hvad jeg laver, og hvordan du fanger mig — på tre trin.
        </Card>
        <Card icon="layers" title="Case studies" to="/case-studies">
          Udvalgte projekter, fra første research til færdigt build.
        </Card>
        <Card icon="braces" title="Reference" to="/reference/profil">
          Profil, stack og kontakt — struktureret og til at slå op i.
        </Card>
        <Card icon="history" title="Changelog" to="/changelog">
          Hvad der er sket, semester for semester.
        </Card>
      </CardGroup>

      <H2>Hvad jeg laver</H2>
      <p>
        Jeg elsker at designe interfaces og bygge dem færdigt. Til daglig designer og
        builder jeg hos Strømm i Aarhus, hvor jeg går fra spec til deployet produkt
        uden at aflevere halvvejs.
      </p>
      <Facts>
        <Fact label="Felt">Interface, branding, frontend</Fact>
        <Fact label="Stack">React, Supabase, Figma</Fact>
        <Fact label="Job">Designer & builder, Strømm</Fact>
        <Fact label="Uddannelse">Multimediedesign, EAAA — 3. semester</Fact>
        <Fact label="Base">Aarhus, Danmark</Fact>
      </Facts>

      <H2>Om denne side</H2>
      <p>
        Porteføljen er skrevet som dokumentation, fordi det er sådan, jeg arbejder: Jeg
        udtænker specen først og bygger derefter. Siden er bygget fra bunden i React og
        deployet på GitHub Pages.
      </p>
      <Callout title="Find hurtigt rundt" type="tip">
        <p>
          Tryk <kbd>⌘</kbd> <kbd>K</kbd> (eller <kbd>Ctrl</kbd> <kbd>K</kbd>) for at
          søge på tværs af alle sider.
        </p>
      </Callout>
    </>
  );
}

export default Introduction;

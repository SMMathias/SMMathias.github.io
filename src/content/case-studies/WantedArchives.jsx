import { Fact, Facts, Flow, H2, LinkList } from "../../components/docs";
import { getProject } from "../../data/projects";

const project = getProject("wanted-archives");

function WantedArchives() {
  return (
    <>
      <Facts>
        <Fact label="Type">Webshop i Zalando-format</Fact>
        <Fact label="Kontekst">Gruppeprojekt, 2. semester</Fact>
        <Fact label="Fokus">Visuel identitet og branding</Fact>
        <Fact label="Links">
          <LinkList links={project.links} />
        </Fact>
      </Facts>

      <H2>Briefen</H2>
      <p>
        En tøjbutik i Zalando-format, hvor vi solgte “wanted” pieces. Størstedelen af
        arbejdet lå i den visuelle identitet og brandingen omkring butikken.
      </p>

      <H2>Identiteten</H2>
      <p>Brandet blev bygget i lag — fra navnet og helt ud til selve shopfladen:</p>
      <Flow steps={["Navn", "Tone", "Farver", "Typografi", "Shopflade"]} />

      <H2>Kampagnen</H2>
      <p>Kampagnebilledet og logoet viser identiteten i brug.</p>
      <div className="media-pair">
        <figure className="figure">
          <div className="figure-frame portrait">
            <img alt={project.imageAlt} height={1030} loading="lazy" src={project.image} width={685} />
          </div>
          <figcaption>Kampagnebillede</figcaption>
        </figure>
        <figure className="figure">
          <div className="figure-frame logo-panel">
            <img alt="Wanted-logoet" height={75} loading="lazy" src={project.logo} width={150} />
          </div>
          <figcaption>Logo</figcaption>
        </figure>
      </div>
    </>
  );
}

export default WantedArchives;

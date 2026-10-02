import { Link } from "react-router";
import { Change, Changes, H2, Update } from "../components/docs";

/* Nyeste øverst. Hvert semester er en major-version. */
function Changelog() {
  return (
    <>
      <Update current label="3. semester" version="v3">
        <H2 id="v3">Strømm og en ny portefølje</H2>
        <Changes>
          <Change>Designer & builder hos Strømm i Aarhus — fra spec til deployet produkt.</Change>
          <Change>3. semester på Multimediedesign, EAAA.</Change>
          <Change>Første version af porteføljen gik i luften i august 2026.</Change>
          <Change type="Ændret">
            Porteføljen er bygget om fra bunden som dokumentation, med quickstart, case
            studies, reference og den her changelog (oktober 2026).
          </Change>
        </Changes>
      </Update>

      <Update label="2. semester" version="v2">
        <H2 id="v2">Bettor og Wanted Archives</H2>
        <Changes>
          <Change>
            <Link to="/case-studies/bettor">Bettor</Link> — social challenge-app i React
            og Supabase. Vist på Expo 2026 og videreudviklet efter eksamen.
          </Change>
          <Change>
            <Link to="/case-studies/wanted-archives">Wanted Archives</Link> — identitet
            og branding til en tøjbutik i Zalando-format.
          </Change>
          <Change>
            Nye metoder i værktøjskassen: Value Proposition Canvas, closed tree sort,
            think aloud og OOUX.
          </Change>
        </Changes>
      </Update>

      <Update label="1. semester" version="v1">
        <H2 id="v1">Hello, world</H2>
        <Changes>
          <Change>Start på Multimediedesign på Erhvervsakademi Aarhus.</Change>
        </Changes>
      </Update>
    </>
  );
}

export default Changelog;

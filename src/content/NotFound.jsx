import { Button, ButtonRow } from "../components/docs";

function NotFound() {
  return (
    <div className="not-found">
      <img
        alt="Mathias som figur, der sidder med en bærbar"
        className="not-found-figure"
        height={1434}
        src={`${import.meta.env.BASE_URL}mathias-figur-laptop.webp`}
        width={640}
      />
      <div>
        <p>
          Siden ligger ikke i dokumentationen — måske er den flyttet, da porteføljen blev
          bygget om. Tryk <kbd>⌘</kbd> <kbd>K</kbd> for at søge.
        </p>
        <ButtonRow>
          <Button icon="arrow-right" to="/" variant="solid">
            Gå til introduktionen
          </Button>
          <Button to="/case-studies">Case studies</Button>
        </ButtonRow>
      </div>
    </div>
  );
}

export default NotFound;

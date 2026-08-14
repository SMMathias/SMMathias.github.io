/* Blåt intro-cover fra designet: navnetræk, ring og skær, der klipper
   sig selv væk efter 3,2s. HomePage sørger for, at det kun spiller ved
   første indlæsning — ikke ved intern navigation. */
function IntroOverlay() {
  return (
    <div aria-hidden="true" className="intro">
      <span className="intro-bg" />
      <span className="intro-disc" />
      <span className="intro-shine" />
      <span className="intro-ring" />
      <span className="intro-name">
        Mathias
        <br />
        Skyum
        <br />
        Moeslund
      </span>
    </div>
  );
}

export default IntroOverlay;

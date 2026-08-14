const LINKS = [
  {
    kicker: "Mail",
    value: "mathias08102004@gmail.com",
    href: "mailto:mathias08102004@gmail.com",
    external: false,
  },
  {
    kicker: "GitHub",
    value: "SMMathias",
    href: "https://github.com/SMMathias",
    external: true,
  },
  {
    kicker: "LinkedIn",
    value: "Mathias Skyum Moeslund",
    href: "https://www.linkedin.com/in/mathias-skyum-moeslund-438799344/",
    external: true,
  },
];

function ContactSection() {
  return (
    <section className="contact" id="kontakt">
      <div className="contact-left">
        <h2 className="contact-title">
          Kontakt
          <br />
          mig
        </h2>
        <span className="contact-loc">Aarhus, Danmark</span>
      </div>

      <div className="contact-links">
        {LINKS.map((link) => (
          <a
            className="contact-link"
            href={link.href}
            key={link.kicker}
            rel={link.external ? "noopener noreferrer" : undefined}
            target={link.external ? "_blank" : undefined}
          >
            <span className="contact-link-text">
              <span className="contact-kicker">{link.kicker}</span>
              <span className="contact-value">{link.value}</span>
            </span>
            <span aria-hidden="true" className="contact-arrow">
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;

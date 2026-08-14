import { Link } from "react-router";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-links">
        <Link to="/projects">Projekter</Link>
        <Link to="/about">Om mig</Link>
        <Link to="/contact">Kontakt</Link>
      </span>
      <span>© 2026 Mathias Skyum Moeslund</span>
    </footer>
  );
}

export default Footer;

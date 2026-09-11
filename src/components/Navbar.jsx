import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO OFFICIEL */}
        <a
          href="#accueil"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="NSAMFE - Accueil"
        >
          <img
            src="/logo-nsamfe.jpg"
            alt="NSAMFE - Nkongsamba en Fête"
          />
        </a>

        {/* NAVIGATION */}
        <nav
          className={`navbar-menu ${
            menuOpen ? "navbar-menu-open" : ""
          }`}
        >
          <a href="#accueil" onClick={closeMenu}>
            Accueil
          </a>

          <a href="#theme" onClick={closeMenu}>
            Thème
          </a>

          <a href="#galerie" onClick={closeMenu}>
            Galerie
          </a>

          <a href="#videos" onClick={closeMenu}>
            Vidéos
          </a>

          <a href="#programme" onClick={closeMenu}>
            Programme
          </a>

          <a href="#invites" onClick={closeMenu}>
            Invités
          </a>

          <a href="#lieu" onClick={closeMenu}>
            Lieu
          </a>

          {/* NSAMFE AI */}
          <a
            href="#nsamfe-ai"
            className="navbar-ai"
            onClick={closeMenu}
          >
            <span className="ai-spark">✦</span>
            NSAMFE AI
          </a>

          {/* NOUS CONTACTER */}
          <a
            href="#contact"
            className="navbar-contact"
            onClick={closeMenu}
          >
            Nous contacter
          </a>
        </nav>

        {/* MENU MOBILE */}
        <button
          type="button"
          className={`navbar-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Fermer le menu"
              : "Ouvrir le menu"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}

export default Navbar;

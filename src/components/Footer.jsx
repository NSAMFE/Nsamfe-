import "./Footer.css";

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* IDENTITÉ */}
        <div className="footer-brand">
          <h2>NSAMFE</h2>

          <div className="footer-flag">
            <span className="green"></span>
            <span className="red"></span>
            <span className="yellow"></span>
          </div>

          <p>
            Une célébration de la culture, de la jeunesse,
            du patrimoine et du développement de Nkongsamba.
          </p>

          <p className="footer-location">
            📍 Club Municipal de Nkongsamba, Cameroun
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-column">
          <h3>Navigation</h3>

          <button onClick={() => scrollToSection("accueil")}>
            Accueil
          </button>

          <button onClick={() => scrollToSection("programme")}>
            Programme
          </button>

          <button onClick={() => scrollToSection("invites")}>
            Invités
          </button>

          <button onClick={() => scrollToSection("lieu")}>
            Lieu
          </button>

          <button onClick={() => scrollToSection("galerie")}>
            Galerie
          </button>

          <button onClick={() => scrollToSection("videos")}>
            Vidéos
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h3>Contact</h3>

          <p>
            Les informations officielles de contact seront
            prochainement disponibles.
          </p>

          <div className="footer-contact">
            <span>📞 Téléphone : À venir</span>
            <span>✉️ Email : À venir</span>
          </div>
        </div>

        {/* RÉSEAUX */}
        <div className="footer-column">
          <h3>Suivez NSAMFE</h3>

          <p>
            Retrouvez prochainement toutes les actualités
            de la foire sur nos réseaux sociaux.
          </p>

          <div className="social-links">

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="TikTok">
              TikTok
            </a>

            <a href="#" aria-label="YouTube">
              YouTube
            </a>

          </div>
        </div>

      </div>

      {/* BAS DU FOOTER */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} NSAMFE — Foire de Nkongsamba.
          Tous droits réservés.
        </p>

        <div className="footer-bottom-links">
          <button onClick={() => scrollToSection("accueil")}>
            Haut de page ↑
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

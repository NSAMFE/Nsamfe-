import "./Theme.css";

function Theme() {
  return (
    <section className="nsamfe-theme section" id="theme">
      {/* Lueurs colorées */}
      <div
        className="nsamfe-theme-glow nsamfe-theme-glow-one"
        aria-hidden="true"
      />

      <div
        className="nsamfe-theme-glow nsamfe-theme-glow-two"
        aria-hidden="true"
      />

      <div
        className="nsamfe-theme-glow nsamfe-theme-glow-three"
        aria-hidden="true"
      />

      {/* Éléments graphiques */}
      <div
        className="nsamfe-theme-pattern pattern-one"
        aria-hidden="true"
      />

      <div
        className="nsamfe-theme-pattern pattern-two"
        aria-hidden="true"
      />

      <div className="container nsamfe-theme-container">
        {/* Petit titre */}
        <div className="nsamfe-theme-label">
          <span className="nsamfe-theme-star">✦</span>

          <span>Thème de la foire</span>

          <span className="nsamfe-theme-line" />
        </div>

        {/* Contenu principal */}
        <div className="nsamfe-theme-content">
          {/* Édition */}
          <div className="nsamfe-theme-edition">
            <span>NSAMFE</span>

            <span className="edition-separator">•</span>

            <span>7ᵉ édition</span>

            <span className="edition-separator">•</span>

            <span>2026</span>
          </div>

          {/* Thème */}
          <h2 className="nsamfe-theme-title">
            <span className="theme-main">
              Consolidons les acquis
            </span>

            <span className="theme-separator">✦</span>

            <span className="theme-innovation">
              et innovation artistique
            </span>

            <span className="theme-color">
              haute en couleur
            </span>
          </h2>

          {/* Texte d'accompagnement */}
          <p className="nsamfe-theme-description">
            Une célébration du savoir-faire, de la créativité et de
            l’innovation, où les acquis se renforcent et où
            l’expression artistique prend vie dans toute sa richesse
            et sa diversité.
          </p>

          {/* Palette artistique */}
          <div
            className="nsamfe-theme-colors"
            aria-hidden="true"
          >
            <span className="theme-color-dot green" />
            <span className="theme-color-dot yellow" />
            <span className="theme-color-dot red" />
            <span className="theme-color-dot orange" />
            <span className="theme-color-dot turquoise" />
            <span className="theme-color-dot purple" />
            <span className="theme-color-dot pink" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Theme;

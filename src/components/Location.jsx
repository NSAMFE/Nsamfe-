import "./Location.css";

function Location() {
  const openGoogleMaps = () => {
    const mapsUrl =
      "https://www.google.com/maps/search/?api=1&query=Club+Municipal+Nkongsamba";

    window.open(
      mapsUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="lieu" className="location-section">
      <div className="location-container">

        <div className="location-header">
          <span className="location-label">
            LE LIEU
          </span>

          <h2>
            Rendez-vous à
            <br />
            <span>Nkongsamba.</span>
          </h2>

          <p>
            Retrouvez-nous au Club Municipal de Nkongsamba
            pour vivre pleinement l’expérience NSAMFE.
          </p>
        </div>

        <div className="location-card">

          <div className="location-information">

            <div className="location-icon">
              ⌖
            </div>

            <span className="location-category">
              LIEU DE LA FOIRE
            </span>

            <h3>
              Club Municipal de Nkongsamba
            </h3>

            <p>
              Le point de rendez-vous de la Foire de
              Nkongsamba, où visiteurs, exposants,
              artistes et participants pourront se retrouver.
            </p>

            <div className="location-details">

              <div>
                <span>VILLE</span>
                <strong>Nkongsamba</strong>
              </div>

              <div>
                <span>PAYS</span>
                <strong>Cameroun</strong>
              </div>

            </div>

            <button
              type="button"
              className="location-button"
              onClick={openGoogleMaps}
            >
              <span>Voir sur Google Maps</span>
              <span>↗</span>
            </button>

          </div>

          <div className="location-map">

            <div className="location-map-grid"></div>

            <div className="location-map-card">

              <div className="location-marker">
                ★
              </div>

              <h3>
                Club Municipal
              </h3>

              <p>
                Nkongsamba, Cameroun
              </p>

              <button
                type="button"
                onClick={openGoogleMaps}
              >
                Itinéraire →
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Location;

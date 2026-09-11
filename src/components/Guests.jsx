import "./Guests.css";

const guests = [
  {
    id: 1,
    type: "INVITÉ D’HONNEUR",
    name: "À confirmer",
    description:
      "La personnalité invitée d’honneur de cette édition sera présentée prochainement.",
  },
  {
    id: 2,
    type: "ARTISTES & TALENTS",
    name: "Talents de la région",
    description:
      "Découvrez les artistes, créateurs et talents qui participeront à la foire.",
  },
  {
    id: 3,
    type: "ENTREPRENEURS",
    name: "Acteurs économiques",
    description:
      "Des entrepreneurs et acteurs économiques viendront partager leur expérience et leur savoir-faire.",
  },
];

function Guest() {
  return (
    <section id="invites" className="guest-section">
      <div className="guest-container">

        <div className="guest-header">
          <span className="guest-label">
            NOS INVITÉS
          </span>

          <h2>
            Ceux qui font
            <br />
            <span>l’événement.</span>
          </h2>

          <p>
            Artistes, entrepreneurs, personnalités et
            acteurs locaux : découvrez ceux qui participeront
            à NSAMFE.
          </p>
        </div>

        <div className="guest-grid">
          {guests.map((guest, index) => (
            <article
              className="guest-card"
              key={guest.id}
            >
              <div className="guest-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="guest-star">
                ★
              </div>

              <span className="guest-type">
                {guest.type}
              </span>

              <h3>{guest.name}</h3>

              <p>{guest.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Guest;

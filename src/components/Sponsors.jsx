import "./Sponsors.css";

const sponsors = [
  {
    id: 1,
    name: "Sponsor 1",
    logo: "/sponsors/sponsor1.png",
  },
  {
    id: 2,
    name: "Sponsor 2",
    logo: "/sponsors/sponsor2.png",
  },
  {
    id: 3,
    name: "Sponsor 3",
    logo: "/sponsors/sponsor3.png",
  },
  {
    id: 4,
    name: "Sponsor 4",
    logo: "/sponsors/sponsor4.png",
  },
  {
    id: 5,
    name: "Sponsor 5",
    logo: "/sponsors/sponsor5.png",
  },
  {
    id: 6,
    name: "Sponsor 6",
    logo: "/sponsors/sponsor6.png",
  },
];

function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-section">
      <div className="sponsors-container">

        <div className="sponsors-header">
          <span className="sponsors-label">
            NOS PARTENAIRES
          </span>

          <h2>
            Ils soutiennent
            <br />
            <span>NSAMFE.</span>
          </h2>

          <p>
            Découvrez les partenaires et sponsors officiels
            qui accompagnent la Foire de Nkongsamba.
          </p>
        </div>

        <div className="sponsors-grid">
          {sponsors.map((sponsor) => (
            <div
              className="sponsor-card"
              key={sponsor.id}
            >
              <img
                src={sponsor.logo}
                alt={`Logo ${sponsor.name}`}
                className="sponsor-logo"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Sponsors;

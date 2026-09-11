import { useState } from "react";
import "./Contact.css";

const EMAIL = "nsamfe@outlook.fr";
const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61594089782030";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Contact NSAMFE - ${formData.name}`;

    const body = `Bonjour,

Nom : ${formData.name}
E-mail : ${formData.email}

Message :
${formData.message}

Cordialement,
${formData.name}`;

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Impossible de copier l'adresse e-mail :", error);
    }
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="contact-background" aria-hidden="true">
        <span className="contact-orb contact-orb-one" />
        <span className="contact-orb contact-orb-two" />
        <span className="contact-orb contact-orb-three" />
      </div>

      <div className="container contact-container">
        {/* INTRODUCTION */}
        <div className="contact-header">
          <span className="contact-label">
            <span className="contact-label-star">✦</span>
            CONTACT
          </span>

          <h2>
            Parlons
            <br />
            <span>NSAMFE.</span>
          </h2>

          <p>
            Une question, une proposition, un partenariat ou simplement
            envie d'en savoir plus sur la Foire de Nkongsamba ?
          </p>
        </div>

        <div className="contact-grid">
          {/* INFORMATIONS */}
          <div className="contact-information">
            <div className="contact-accent-line" />

            <div className="contact-info-title">
              <span>✦</span>
              <h3>Restons en contact</h3>
            </div>

            <p className="contact-info-description">
              L'équipe NSAMFE est à votre écoute pour toute demande
              d'information concernant la foire.
            </p>

            {/* EMAIL */}
            <div className="contact-detail">
              <div className="contact-detail-icon">✉</div>

              <div className="contact-detail-content">
                <span className="contact-detail-label">E-mail officiel</span>

                <a href={`mailto:${EMAIL}`} className="contact-detail-value">
                  {EMAIL}
                </a>

                <button
                  type="button"
                  className="contact-copy-button"
                  onClick={handleCopyEmail}
                >
                  {copied ? "✓ E-mail copié" : "Copier l'adresse"}
                </button>
              </div>
            </div>

            {/* FACEBOOK */}
            <div className="contact-detail">
              <div className="contact-detail-icon contact-facebook-icon">
                f
              </div>

              <div className="contact-detail-content">
                <span className="contact-detail-label">
                  Page Facebook officielle
                </span>

                <span className="contact-detail-value">
                  NSAMFE-Nkongsamba en Fête officiel
                </span>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-facebook-link"
                >
                  Visiter la page
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="contact-info-footer">
              <span className="contact-footer-star">★</span>
              <p>
                <strong>NSAMFE</strong>
                <br />
                7ᵉ édition · 2026
              </p>
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="contact-form-container">
            <div className="contact-form-header">
              <span>✦</span>
              <div>
                <h3>Envoyez-nous un message</h3>
                <p>Nous vous répondrons par e-mail.</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {/* NOM */}
              <div className="contact-form-group">
                <label htmlFor="name">Nom complet</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="contact-form-group">
                <label htmlFor="email">Adresse e-mail</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vous@example.com"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="contact-form-group">
                <label htmlFor="message">Votre message</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écrivez votre message..."
                  rows="6"
                  required
                />
              </div>

              {/* BOUTON */}
              <button type="submit" className="contact-submit">
                <span>Envoyer le message</span>
                <span className="contact-submit-icon">↗</span>
              </button>

              {submitted && (
                <div className="contact-success">
                  <span>✓</span>
                  <p>
                    Votre messagerie va s'ouvrir pour envoyer le message à
                    l'équipe NSAMFE.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

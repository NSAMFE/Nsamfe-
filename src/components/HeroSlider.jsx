import { useEffect, useState } from "react";
import "./HeroSlider.css";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";

const slides = [
  {
    id: 1,
    image: hero1,
    subtitle: "FOIRE DE NKONGSAMBA",
    title: "Bienvenue à NSAMFE",
    description:
      "Une rencontre unique autour de la culture, de l’innovation, du commerce et du savoir-faire.",
  },
  {
    id: 2,
    image: hero2,
    subtitle: "CULTURE • TRADITION • CRÉATIVITÉ",
    title: "Célébrons notre richesse",
    description:
      "Découvrez les talents, les traditions et les initiatives qui font la richesse de notre région.",
  },
  {
    id: 3,
    image: hero3,
    subtitle: "NKONGSAMBA",
    title: "Une ville en mouvement",
    description:
      "Un événement pensé pour créer des rencontres, partager des idées et mettre en lumière nos talents.",
  },
  {
    id: 4,
    image: hero4,
    subtitle: "VIVEZ L’EXPÉRIENCE",
    title: "L’expérience NSAMFE",
    description:
      "Plongez au cœur d’une expérience festive, moderne et authentiquement camerounaise.",
  },
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, [paused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const scrollToGallery = () => {
    const gallery = document.getElementById("galerie");

    if (gallery) {
      gallery.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="accueil"
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-slide-image"
            />

            <div className="hero-overlay"></div>

            <div className="hero-content">
              <span className="hero-subtitle">
                {slide.subtitle}
              </span>

              <h1>{slide.title}</h1>

              <p>{slide.description}</p>

              <button
                type="button"
                className="hero-explore"
                onClick={scrollToGallery}
              >
                <span>Explorer la foire</span>
                <span className="hero-explore-icon">↓</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Image précédente"
      >
        ←
      </button>

      <button
        type="button"
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Image suivante"
      >
        →
      </button>

      <div className="hero-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-indicator ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Afficher la diapositive ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-counter">
        <span>
          {String(currentSlide + 1).padStart(2, "0")}
        </span>

        <span className="hero-counter-line"></span>

        <span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="hero-cameroon-line">
        <span className="green"></span>
        <span className="red"></span>
        <span className="yellow"></span>
      </div>

      <div className="hero-scroll">
        <span>Défiler</span>
        <span className="hero-scroll-arrow">↓</span>
      </div>
    </section>
  );
}

export default HeroSlider;

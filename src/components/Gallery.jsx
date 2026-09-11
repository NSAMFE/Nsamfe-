import { useEffect, useState } from "react";
import "./Gallery.css";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";

const images = [
  {
    src: image1,
    title: "NSAMFE",
    description: "La Foire de Nkongsamba",
  },
  {
    src: image2,
    title: "Moments forts",
    description: "Les moments forts de la foire.",
  },
  {
    src: image3,
    title: "Culture",
    description: "Culture et créativité.",
  },
  {
    src: image4,
    title: "Innovation",
    description: "Créativité et innovation.",
  },
  {
    src: image5,
    title: "Rencontres",
    description: "Des rencontres autour de la foire.",
  },
  {
    src: image6,
    title: "Ensemble",
    description: "Une célébration haute en couleur.",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrevious = (event) => {
    event.stopPropagation();

    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage - 1 + images.length) % images.length
    );
  };

  const showNext = (event) => {
    event.stopPropagation();

    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage + 1) % images.length
    );
  };

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (selectedImage === null) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage(
          (selectedImage - 1 + images.length) % images.length
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedImage(
          (selectedImage + 1) % images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section className="gallery-section section" id="galerie">
      <div className="gallery-background-glow gallery-glow-one" />
      <div className="gallery-background-glow gallery-glow-two" />

      <div className="container gallery-container">

        {/* HEADER */}
        <div className="gallery-header">
          <div className="gallery-label">
            <span className="gallery-star">✦</span>
            <span>Galerie</span>
            <span className="gallery-line" />
          </div>

          <h2 className="gallery-title">
            Les couleurs de <span>la NSAMFE</span>
          </h2>

          <p className="gallery-description">
            Retrouvez en images l'univers de la Foire de Nkongsamba,
            entre culture, créativité, rencontres et innovation.
          </p>
        </div>

        {/* GALERIE */}
        <div className="gallery-grid">
          {images.map((image, index) => (
            <button
              className={`gallery-card gallery-card-${index + 1}`}
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`Ouvrir ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.title}
                loading={index < 2 ? "eager" : "lazy"}
              />

              <div className="gallery-overlay">
                <div className="gallery-overlay-content">

                  <span className="gallery-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>

                  <span className="gallery-open">
                    ↗
                  </span>

                </div>
              </div>
            </button>
          ))}
        </div>

        {/* FOOTER */}
        <div className="gallery-footer">
          <span className="gallery-footer-star">✦</span>

          <span>
            NSAMFE • 7ᵉ édition • 2026
          </span>

          <span className="gallery-footer-star">✦</span>
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImage !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse de la galerie"
        >

          {/* FERMER */}
          <button
            className="gallery-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            className="gallery-navigation gallery-prev"
            type="button"
            onClick={showPrevious}
            aria-label="Image précédente"
          >
            ‹
          </button>

          {/* IMAGE */}
          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
            />

            <div className="gallery-lightbox-caption">
              <div>

                <span>
                  {String(selectedImage + 1).padStart(2, "0")}
                  {" / "}
                  {String(images.length).padStart(2, "0")}
                </span>

                <h3>
                  {images[selectedImage].title}
                </h3>

                <p>
                  {images[selectedImage].description}
                </p>

              </div>
            </div>
          </div>

          {/* NEXT */}
          <button
            className="gallery-navigation gallery-next"
            type="button"
            onClick={showNext}
            aria-label="Image suivante"
          >
            ›
          </button>

        </div>
      )}
    </section>
  );
}

export default Gallery;

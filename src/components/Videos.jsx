import { useEffect, useState } from "react";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

import "./Videos.css";

const videos = [
  {
    src: video1,
    title: "La NSAMFE en vidéo",
    description: "Découvrez l'univers de la Foire de Nkongsamba.",
  },
  {
    src: video2,
    title: "Moments forts",
    description: "Revivez les moments forts de la foire.",
  },
  {
    src: video3,
    title: "Culture et innovation",
    description: "Une célébration artistique haute en couleur.",
  },
];

function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (!selectedVideo) return;

      if (event.key === "Escape") {
        closeVideo();
      }
    };

    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [selectedVideo]);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <section className="videos-section section" id="videos">
      {/* DECORATION */}
      <div
        className="videos-background-glow videos-glow-one"
        aria-hidden="true"
      />

      <div
        className="videos-background-glow videos-glow-two"
        aria-hidden="true"
      />

      <div className="container videos-container">
        {/* HEADER */}
        <header className="videos-header">
          <div className="videos-label">
            <span className="videos-star">✦</span>

            <span>Vidéos</span>

            <span className="videos-line" />
          </div>

          <h2 className="videos-title">
            Vivez la NSAMFE
            <span> en vidéo</span>
          </h2>

          <p className="videos-description">
            Découvrez l'ambiance, les activités et les moments forts
            de la Foire de Nkongsamba.
          </p>
        </header>

        {/* VIDEOS */}
        <div className="videos-grid">
          {videos.map((video, index) => (
            <article
              className={`video-card video-card-${index + 1}`}
              key={video.src}
            >
              <button
                type="button"
                className="video-preview"
                onClick={() => openVideo(video)}
                aria-label={`Voir ${video.title} en grand`}
              >
                <video
                  className="video-player"
                  src={video.src}
                  preload="metadata"
                  muted
                  playsInline
                />

                <div className="video-overlay">
                  <span className="video-play-button">
                    ▶
                  </span>

                  <span className="video-watch-text">
                    Voir en grand
                  </span>
                </div>

                <span className="video-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>

              <div className="video-card-content">
                <h3>{video.title}</h3>

                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <div className="videos-footer">
          <span className="videos-footer-star">✦</span>

          <span>NSAMFE • 7ᵉ édition • 2026</span>

          <span className="videos-footer-star">✦</span>
        </div>
      </div>

      {/* GRANDE VISIONNEUSE */}
      {selectedVideo && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse vidéo"
          onClick={closeVideo}
        >
          <button
            type="button"
            className="video-modal-close"
            onClick={closeVideo}
            aria-label="Fermer la vidéo"
          >
            ×
          </button>

          <div
            className="video-modal-container"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="video-modal-player-wrapper">
              <video
                className="video-modal-player"
                src={selectedVideo.src}
                controls
                autoPlay
                playsInline
              />
            </div>

            <div className="video-modal-info">
              <span className="video-modal-label">
                NSAMFE • VIDÉO
              </span>

              <h3>{selectedVideo.title}</h3>

              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Videos;

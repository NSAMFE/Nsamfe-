import { useEffect, useState } from "react";
import "./NsamfeAI.css";

const suggestions = [
  "Parle-moi de l’histoire de Nkongsamba",
  "Parle-moi de la Foire de Nkongsamba",
  "Qu’est-ce que NSAMFE ?",
  "Quelles sont les richesses de Nkongsamba ?",
];

function NsamfeAI({ isOpen, onClose }) {
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setAnswer(
        "La reconnaissance vocale n’est pas disponible sur ce navigateur."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "fr-FR";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setQuestion("");
      setAnswer("");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setQuestion(transcript);

      askAI(transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);
      setAnswer(
        "Je n’ai pas réussi à comprendre votre question. Réessayez."
      );
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const askAI = async (userQuestion) => {
    setIsThinking(true);
    setAnswer("");

    /*
      POUR L’INSTANT :

      Le moteur IA n’est pas encore connecté.

      Cette fonction sera ensuite reliée à notre
      API NSAMFE AI / Cloudflare Workers AI.
    */

    setTimeout(() => {
      setIsThinking(false);

      setAnswer(
        `Votre question : « ${userQuestion} »\n\nNSAMFE AI est en cours de connexion à son moteur d’intelligence artificielle.`
      );
    }, 1200);
  };

  const selectSuggestion = (text) => {
    setQuestion(text);
    askAI(text);
  };

  return (
    <div className="nsamfe-ai-overlay" onClick={onClose}>
      <div
        className="nsamfe-ai-window"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="nsamfe-ai-close"
          onClick={onClose}
          aria-label="Fermer NSAMFE AI"
        >
          ×
        </button>

        <div className="nsamfe-ai-header">
          <div className="nsamfe-ai-logo">
            <span>✦</span>
          </div>

          <div>
            <span className="nsamfe-ai-label">ASSISTANT OFFICIEL</span>

            <h2>NSAMFE AI</h2>
          </div>
        </div>

        <div className="nsamfe-ai-intro">
          <h3>
            Votre guide intelligent
            <br />
            <span>de Nkongsamba.</span>
          </h3>

          <p>
            Posez vos questions sur Nkongsamba, la foire, sa culture,
            son histoire et ses richesses.
          </p>
        </div>

        <div className="nsamfe-ai-orb">
          <div className="nsamfe-ai-orb-inner">
            <div className="nsamfe-ai-mic">
              {isListening ? "●" : "🎙"}
            </div>
          </div>
        </div>

        <div className="nsamfe-ai-status">
          {isListening && (
            <>
              <span className="status-dot listening"></span>
              Je vous écoute...
            </>
          )}

          {!isListening && isThinking && (
            <>
              <span className="status-dot thinking"></span>
              NSAMFE AI réfléchit...
            </>
          )}

          {!isListening && !isThinking && !answer && (
            <>
              <span className="status-dot"></span>
              Appuyez sur le microphone pour parler
            </>
          )}

          {!isListening && !isThinking && answer && (
            <>
              <span className="status-dot ready"></span>
              NSAMFE AI
            </>
          )}
        </div>

        <button
          type="button"
          className={`nsamfe-ai-talk ${
            isListening ? "active" : ""
          }`}
          onClick={startListening}
          disabled={isThinking}
        >
          <span>{isListening ? "Je vous écoute..." : "Parler à NSAMFE AI"}</span>
          <span className="talk-icon">🎙</span>
        </button>

        {question && (
          <div className="nsamfe-ai-question">
            <span>Vous</span>
            <p>{question}</p>
          </div>
        )}

        {answer && (
          <div className="nsamfe-ai-answer">
            <div className="answer-header">
              <span>✦</span>
              <strong>NSAMFE AI</strong>
            </div>

            <p>{answer}</p>
          </div>
        )}

        {!question && !answer && (
          <div className="nsamfe-ai-suggestions">
            <span>Essayez par exemple</span>

            <div className="suggestions-list">
              {suggestions.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  onClick={() => selectSuggestion(suggestion)}
                >
                  {suggestion}
                  <span>→</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="nsamfe-ai-footer">
          <span className="green"></span>
          <span className="red"></span>
          <span className="yellow"></span>

          <p>NSAMFE • Nkongsamba • Cameroun</p>
        </div>
      </div>
    </div>
  );
}

export default NsamfeAI;

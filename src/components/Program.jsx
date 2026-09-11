import { useState } from "react";
import "./Program.css";

const programme = [
  {
    date: "18 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "19 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "20 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "21 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "22 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "23 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "24 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "25 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "26 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "27 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "28 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "29 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "30 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "31 décembre 2026",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "1er janvier 2027",
    activities: [
      "Activité à définir",
    ],
  },
  {
    date: "2 janvier 2027",
    activities: [
      "Activité à définir",
    ],
  },
];

function Program() {
  const [selectedDate, setSelectedDate] = useState(0);

  const currentDay = programme[selectedDate];

  return (
    <section className="program section" id="programme">
      <div className="program-background" aria-hidden="true">
        <span className="program-shape shape-one" />
        <span className="program-shape shape-two" />
        <span className="program-shape shape-three" />
      </div>

      <div className="container program-container">
        {/* En-tête */}
        <div className="program-header">
          <span className="program-eyebrow">
            <span>✦</span>
            Programme officiel
          </span>

          <h2>
            18 décembre 2026
            <span> — </span>
            2 janvier 2027
          </h2>

          <p>
            Découvrez les différentes activités prévues tout au long
            de la 7ᵉ édition de la NSAMFE.
          </p>
        </div>

        {/* Dates */}
        <div className="program-dates">
          {programme.map((day, index) => (
            <button
              key={day.date}
              type="button"
              className={`program-date ${
                selectedDate === index ? "active" : ""
              }`}
              onClick={() => setSelectedDate(index)}
            >
              <span className="date-number">
                {index < 14
                  ? 18 + index
                  : index === 14
                  ? "01"
                  : "02"}
              </span>

              <span className="date-label">
                {index < 14 ? "Décembre" : "Janvier"}
              </span>
            </button>
          ))}
        </div>

        {/* Activités */}
        <div className="program-content">
          <div className="program-selected-date">
            <span className="selected-icon">📅</span>

            <div>
              <span className="selected-small">
                Programme du
              </span>

              <h3>{currentDay.date}</h3>
            </div>
          </div>

          <div className="program-activities">
            {currentDay.activities.map((activity, index) => (
              <div
                className="program-activity"
                key={`${activity}-${index}`}
              >
                <span className="activity-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="activity-text">
                  {activity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Période */}
        <div className="program-period">
          <span className="period-line" />
          <span>7ᵉ édition • 2026</span>
          <span className="period-line" />
        </div>
      </div>
    </section>
  );
}

export default Program;

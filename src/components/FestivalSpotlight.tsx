import "./FestivalSpotlight.css";
import { getNextFestival } from "../utils/festivalRotation";

export default function FestivalSpotlight() {
  const festival = getNextFestival();

  const formattedDate = new Date(festival.date).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <section className="festival-spotlight">
      <div className="festival-card">
        <div className="festival-icon">
          {festival.emoji}
        </div>

        <p className="festival-label">
          Festival Spotlight
        </p>

        <h2>
          {festival.name}
        </h2>

        <p className="festival-date">
          {formattedDate}
        </p>

        <div className="festival-meta">
          <span>
            📍 {festival.region}
          </span>

          <span>
            ✨ {festival.tradition}
          </span>
        </div>

        <p className="festival-description">
          {festival.description}
        </p>

        <div className="moon-highlight">
          <h3>
            🌙 Moon Connection
          </h3>

          <p>
            {festival.moonConnection}
          </p>
        </div>

        <a
          className="festival-button"
          href={`https://www.google.com/search?q=${encodeURIComponent(
            festival.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More →
        </a>
      </div>
    </section>
  );
}
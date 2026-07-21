import type { MoonData } from "../types/moon";

type HeroProps = {
  moon: MoonData;
};

function getViewingMessage(moon: MoonData) {
  const altitude = (moon.altitude * 180) / Math.PI;

  if (altitude > 30 && moon.illumination > 25) {
    return "⭐ Great Moon viewing conditions";
  }

  if (altitude > 10 && moon.illumination > 10) {
    return "🌙 The Moon is visible in your sky";
  }

  if (altitude <= 10 && moon.moonrise) {
    return "🌅 The Moon is low on the horizon";
  }

  if (!moon.moonrise && !moon.moonset) {
    return "🌑 The Moon is below the horizon";
  }

  return "🌙 Limited Moon visibility right now";
}

export default function Hero({ moon }: HeroProps) {
  return (
    <section
      style={{
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          fontSize: "8rem",
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        {moon.emoji}
      </div>

      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        {moon.phaseName}
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#cbd5e1",
          marginBottom: "1rem",
        }}
      >
        {moon.illumination}% Illuminated
      </p>

      <p
        style={{
          color: "#cbd5e1",
          marginBottom: "1rem",
        }}
      >
        Lunar age: {moon.age.toFixed(1)} days
      </p>

      <div
        style={{
          display: "inline-block",
          background: "#24304f",
          padding: "0.75rem 1.25rem",
          borderRadius: "999px",
          color: "#fde68a",
          fontWeight: 600,
        }}
      >
        {getViewingMessage(moon)}
      </div>
    </section>
  );
}
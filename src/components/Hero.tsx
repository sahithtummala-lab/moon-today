import type { MoonData } from "../types/moon";

type HeroProps = {
  moon: MoonData;
};

function getViewingMessage(moon: MoonData) {
  const altitude = (moon.altitude * 180) / Math.PI;

  if (altitude > 10 && moon.illumination > 15) {
    return "⭐ Excellent Viewing Tonight";
  }

  if (moon.moonrise && moon.moonset) {
    return "🌙 Moon is visible tonight";
  }

  return "🌑 Limited moon visibility tonight";
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
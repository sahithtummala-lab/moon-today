import { moonLocations } from "../utils/moonLocations";
import { getMoonData } from "../utils/moonData";

export default function MoonAroundWorld() {
  return (
    <section className="feature-card">
      <h3 style={{ textAlign: "center" }}>
        🌎 Moon Around the World
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        {moonLocations.map((location) => {
          const moon = getMoonData(
            new Date(),
            location.latitude,
            location.longitude
          );

          const altitude =
            (moon.altitude * 180) / Math.PI;

          return (
            <div
              key={location.city}
              style={{
                background: "#1e293b",
                padding: "1rem",
                borderRadius: "1rem",
                textAlign: "center",
              }}
            >
              <h4>
                {location.city}
              </h4>

              <p
                style={{
                  color: "#cbd5e1",
                }}
              >
                {location.country}
              </p>

              <div
                style={{
                  fontSize: "2.5rem",
                  margin: "0.5rem",
                }}
              >
                {moon.emoji}
              </div>

              <p>
                {moon.phaseName}
              </p>

              <p>
                ⬆️ Moonrise
                <br />
                {moon.moonrise
                  ? moon.moonrise.toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      timeZone: location.timezone,
                    })
                  : "Not visible"}
              </p>

              <p>
                ⬇️ Moonset
                <br />
                {moon.moonset
                  ? moon.moonset.toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      timeZone: location.timezone,
                    })
                  : "Not visible"}
              </p>

              <p
                style={{
                  color: "#cbd5e1",
                }}
              >
                🌌 Altitude
                <br />
                {altitude.toFixed(0)}° above horizon
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
import { moonLocations } from "../utils/moonLocations";
import { getMoonData } from "../utils/moonData";

export default function MoonAroundWorld() {
  return (
    <section className="feature-card">
      <h3>Moon Around the World</h3>

      {moonLocations.map((location) => {
        const moon = getMoonData(
          new Date(),
          location.latitude,
          location.longitude
        );

        return (
          <div key={location.city}>
            <p>
              🌎 {location.city}, {location.country}
            </p>

            <p>
              {moon.emoji} {moon.phaseName} ({moon.illumination}%)
            </p>

            <p>
              Moonrise:{" "}
              {moon.moonrise
                ? moon.moonrise.toLocaleTimeString()
                : "Not visible"}
            </p>
          </div>
        );
      })}
    </section>
  );
}
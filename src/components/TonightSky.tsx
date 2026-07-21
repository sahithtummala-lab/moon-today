import type { MoonData } from "../types/moon";

type TonightSkyProps = {
  moon: MoonData;
};

function getCompassDirection(azimuth: number): string {
  const directions = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];

  return directions[Math.round(azimuth / 45) % 8];
}

function getAltitudeDescription(altitude: number): string {
  if (altitude <= 5) return "The Moon is just above the horizon.";
  if (altitude <= 20) return "The Moon is low in the sky.";
  if (altitude <= 45) return "The Moon is climbing into the sky.";
  if (altitude <= 70) return "The Moon is high in the sky.";
  return "The Moon is nearly overhead.";
}

export default function TonightSky({ moon }: TonightSkyProps) {
  const altitude = (moon.altitude * 180) / Math.PI;
  const azimuth = (moon.azimuth * 180) / Math.PI;

  const direction = getCompassDirection(azimuth);
  const altitudeText = getAltitudeDescription(altitude);

  return (
    <div>
      <h3>🌌 Tonight's Sky</h3>

      <div style={{ marginBottom: "1.5rem" }}>
        <p>
          🌙 <strong>Altitude:</strong> {altitude.toFixed(1)}°
        </p>
        <small>{altitudeText}</small>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <p>
          🧭 <strong>Azimuth:</strong> {azimuth.toFixed(1)}°
        </p>
        <small>
          Look toward the <strong>{direction}</strong> to find the Moon.
        </small>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <p>
          ⬆️ <strong>Moonrise:</strong>{" "}
          {moon.moonrise
            ? moon.moonrise.toLocaleTimeString()
            : "Not visible"}
        </p>
        <small>The time the Moon rises above your horizon.</small>
      </div>

      <div>
        <p>
          ⬇️ <strong>Moonset:</strong>{" "}
          {moon.moonset
            ? moon.moonset.toLocaleTimeString()
            : "Not visible"}
        </p>
        <small>The time the Moon sets below your horizon.</small>
      </div>
    </div>
  );
}
import type { MoonData } from "../utils/moonData";

type TonightSkyProps = {
  moon: MoonData;
};

export default function TonightSky({ moon }: TonightSkyProps) {
  return (
    <div>
      <h3>Tonight's Sky</h3>

      <p>
        🌙 Altitude:{" "}
        {(moon.altitude * 180 / Math.PI).toFixed(1)}°
      </p>

      <p>
        🧭 Azimuth:{" "}
        {(moon.azimuth * 180 / Math.PI).toFixed(1)}°
      </p>

      <p>
        ⬆️ Moonrise:{" "}
        {moon.moonrise
          ? moon.moonrise.toLocaleTimeString()
          : "Not visible"}
      </p>

      <p>
        ⬇️ Moonset:{" "}
        {moon.moonset
          ? moon.moonset.toLocaleTimeString()
          : "Not visible"}
      </p>
    </div>
  );
}
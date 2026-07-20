import type { MoonData } from "../types/moon";

type QuickViewProps = {
  moon: MoonData;
};

export default function QuickView({ moon }: QuickViewProps) {
  return (
    <div>
      <h3>Quick View</h3>

      <p>
        🌕 Illumination: {moon.illumination}%
      </p>

      <p>
        🌙 Age: {moon.age.toFixed(1)} days
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
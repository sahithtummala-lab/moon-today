import type { MoonData } from "../types/moon";

type QuickViewProps = {
  moon: MoonData;
};

export default function QuickView({ moon }: QuickViewProps) {
  const waxingPhases = [
    "Waxing Crescent",
    "First Quarter",
    "Waxing Gibbous",
  ];

  const waningPhases = [
    "Waning Gibbous",
    "Last Quarter",
    "Waning Crescent",
  ];

  let cycle = "🌑 New Moon";

  if (waxingPhases.includes(moon.phaseName)) {
    cycle = "🌒 Waxing";
  } else if (waningPhases.includes(moon.phaseName)) {
    cycle = "🌘 Waning";
  } else if (moon.phaseName === "Full Moon") {
    cycle = "🌕 Full Moon";
  }

  return (
    <div>
      <h3>🌙 Quick View</h3>

      <div className="info-row">
        <div className="info-header">
          <span className="info-label">Current Phase</span>
          <span className="info-value">{moon.phaseName}</span>
        </div>

        <div className="info-description">
          The Moon's current appearance as seen from Earth.
        </div>
      </div>

      <div className="info-row">
        <div className="info-header">
          <span className="info-label">Illumination</span>
          <span className="info-value">
            {moon.illumination}%
          </span>
        </div>

        <div className="info-description">
          The percentage of the Moon's visible surface illuminated by sunlight.
        </div>
      </div>

      <div className="info-row">
        <div className="info-header">
          <span className="info-label">Lunar Age</span>
          <span className="info-value">
            {moon.age.toFixed(1)} days
          </span>
        </div>

        <div className="info-description">
          Time since the last New Moon. A complete lunar cycle takes about
          29.5 days.
        </div>
      </div>

      <div className="info-row">
        <div className="info-header">
          <span className="info-label">Current Cycle</span>
          <span className="info-value">
            {cycle}
          </span>
        </div>

        <div className="info-description">
          {cycle.includes("Waxing")
            ? "The illuminated portion of the Moon is growing each night."
            : cycle.includes("Waning")
            ? "The illuminated portion of the Moon is shrinking each night."
            : cycle === "🌕 Full Moon"
            ? "The Moon is fully illuminated and opposite the Sun in our sky."
            : "The Moon is beginning a new lunar cycle."}
        </div>
      </div>
    </div>
  );
}
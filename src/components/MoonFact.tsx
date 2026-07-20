import type { MoonData } from "../utils/moonData";

type MoonFactProps = {
  moon: MoonData;
};

export default function MoonFact({ moon }: MoonFactProps) {
  return (
    <div>
      <h3>Moon Facts</h3>

      <p>
        The Moon is currently in its{" "}
        <strong>{moon.phaseName}</strong> phase.
      </p>

      <p>
        It is{" "}
        <strong>{moon.illumination}% illuminated</strong>.
      </p>

      <p>
        The lunar age is{" "}
        <strong>{moon.age.toFixed(1)} days</strong>.
      </p>
    </div>
  );
}
import InfoRow from "./InfoRow";

type MoonFactProps = {
  moon: {
    phaseName: string;
    emoji: string;
    illumination: number;
    age: number;
  };
};

function MoonFact({ moon }: MoonFactProps) {
  return (
    <>
      <h3>🌙 Moon Facts</h3>

      <InfoRow
        label="Phase"
        value={`${moon.emoji} ${moon.phaseName}`}
        description="The Moon's current phase in its 29.5-day lunar cycle."
      />

      <InfoRow
        label="Illumination"
        value={`${moon.illumination}%`}
        description="The percentage of the Moon's visible face currently lit by the Sun."
      />

      <InfoRow
        label="Lunar Age"
        value={`${moon.age.toFixed(1)} days`}
        description="The number of days since the last New Moon."
      />
    </>
  );
}

export default MoonFact;
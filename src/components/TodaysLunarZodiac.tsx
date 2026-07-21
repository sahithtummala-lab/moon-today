import { getCurrentLunarZodiac } from "../utils/lunarZodiac";

export default function TodaysLunarZodiac() {
  const zodiac = getCurrentLunarZodiac();

  return (
    <div>
      <h3>✨ Today's Lunar Zodiac</h3>

      <div className="info-row">
        <div className="info-header">
          <span className="info-label">Current Sign</span>
          <span className="info-value">
            {zodiac.current.symbol} {zodiac.current.name}
          </span>
        </div>

        <div className="info-description">
          In Western astrology, the Moon is currently in{" "}
          <strong>{zodiac.current.name}</strong>.
        </div>
      </div>

      <div className="info-row">
        <div className="info-header">
          <span className="info-label">Next Sign</span>
          <span className="info-value">
            {zodiac.next.symbol} {zodiac.next.name}
          </span>
        </div>

        <div className="info-description">
          The Moon enters a new zodiac sign approximately every 2–3 days as it
          orbits Earth.
        </div>
      </div>

      <p
        style={{
          marginTop: "1.25rem",
          fontSize: "0.9rem",
          color: "#94a3b8",
          lineHeight: 1.5,
        }}
      >
        <strong>About Lunar Zodiac</strong>
        <br />
        Astrology divides the sky into 12 zodiac signs based on the Moon's
        apparent path through the heavens. This section is provided for
        educational and cultural interest and is separate from the scientific
        astronomy content featured throughout Moon Today.
      </p>
    </div>
  );
}
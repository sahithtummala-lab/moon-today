import "./MoonAroundWorld.css";

export default function MoonAroundWorld() {
  return (
    <section className="moon-world">
      <div className="section-header">
        <p className="section-label">Moon Around the World</p>
        <h2>Featured Culture: Telugu</h2>
        <p>
          The Moon has inspired language, poetry, music, and traditions across
          generations. Today we explore how it is celebrated in Telugu culture.
        </p>
      </div>

      <div className="culture-card">
        <div className="word">
          <h3>చంద్రుడు</h3>
          <span>Chandrudu</span>
          <p>The formal Telugu word for the Moon.</p>
        </div>

        <div className="word">
          <h3>జాబిల్లి</h3>
          <span>Jabilli</span>
          <p>A beloved poetic name often heard in songs and stories.</p>
        </div>

        <div className="word">
          <h3>చందమామ</h3>
          <span>Chandamama</span>
          <p>A warm, affectionate name commonly used with children.</p>
        </div>
      </div>
    </section>
  );
}
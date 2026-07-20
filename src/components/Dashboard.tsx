import MoonFact from "./MoonFact";
import TonightSky from "./TonightSky";
import QuickView from "./QuickView";

type DashboardProps = {
  moon: {
    phaseName: string;
    emoji: string;
    illumination: number;
    age: number;
  };
};

function Dashboard({ moon }: DashboardProps) {
  return (
    <section className="feature-grid">
      <div className="feature-card">
        <MoonFact moon={moon} />
      </div>

      <div className="feature-card">
        <TonightSky />
      </div>

      <div className="feature-card">
        <QuickView moon={moon} />
      </div>
    </section>
  );
}

export default Dashboard;
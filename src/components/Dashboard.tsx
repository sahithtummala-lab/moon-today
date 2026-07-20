import MoonFact from "./MoonFact";
import TonightSky from "./TonightSky";
import QuickView from "./QuickView";
import type { MoonData } from "../utils/moonData";

type DashboardProps = {
  moon: MoonData;
};

function Dashboard({ moon }: DashboardProps) {
  return (
    <section className="feature-grid">
      <div className="feature-card">
        <MoonFact moon={moon} />
      </div>

      <div className="feature-card">
        <TonightSky moon={moon} />
      </div>

      <div className="feature-card">
        <QuickView moon={moon} />
      </div>
    </section>
  );
}

export default Dashboard;
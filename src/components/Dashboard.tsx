import MoonFact from "./MoonFact";
import TonightSky from "./TonightSky";
import QuickView from "./QuickView";
import TodaysLunarZodiac from "./TodaysLunarZodiac";
import type { MoonData } from "../types/moon";

type DashboardProps = {
  moon: MoonData;
};

function Dashboard({ moon }: DashboardProps) {
  return (
    <section className="feature-grid">
      <div className="feature-card">
        <QuickView moon={moon} />
      </div>

      <div className="feature-card">
        <TodaysLunarZodiac />
      </div>

      <div className="feature-card">
        <TonightSky moon={moon} />
      </div>

      <div className="feature-card">
        <MoonFact />
      </div>
    </section>
  );
}

export default Dashboard;
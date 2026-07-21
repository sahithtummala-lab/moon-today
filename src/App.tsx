import "./App.css";

import { getMoonData } from "./utils/moonData";
import { useLocation } from "./hooks/useLocation";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import MoonAroundWorld from "./components/MoonAroundWorld";
import LanguageSpotlight from "./components/LanguageSpotlight";
import UpcomingEvents from "./components/UpcomingEvents";
import FestivalSpotlight from "./components/FestivalSpotlight";
import Starfield from "./components/Starfield";

function App() {
  const { location, loading } = useLocation();

  if (loading || !location) {
    return (
      <div className="app">
        <Starfield />

        <div className="dashboard">
          <h2>🌙 Finding your Moon...</h2>
        </div>
      </div>
    );
  }

  const currentMoon = getMoonData(
    new Date(),
    location.latitude,
    location.longitude
  );

  return (
    <div className="app">
      <Starfield />

      <Header
        date={new Date().toLocaleDateString()}
        locationName={location.name}
      />

      <div className="dashboard">
        <Hero moon={currentMoon} />

        <Dashboard moon={currentMoon} />

        <MoonAroundWorld />

        <LanguageSpotlight />

        <UpcomingEvents />

        <FestivalSpotlight />
      </div>
    </div>
  );
}

export default App;
import "./App.css";

import { getMoonData } from "./utils/moonData";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import MoonAroundWorld from "./components/MoonAroundWorld";
import UpcomingEvents from "./components/UpcomingEvents";
import FestivalSpotlight from "./components/FestivalSpotlight";
import Starfield from "./components/Starfield";

function App() {
  const currentMoon = getMoonData();

  return (
    <div className="app">
      <Starfield />

      <Header date={new Date().toLocaleDateString()} />

      <div className="dashboard">
        <Hero moon={currentMoon} />

        <Dashboard moon={currentMoon} />

        <MoonAroundWorld />

        <UpcomingEvents />

        <FestivalSpotlight />
      </div>
    </div>
  );
}

export default App;
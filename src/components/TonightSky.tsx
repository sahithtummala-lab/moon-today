import useLocation from "../hooks/useLocation";
import { getMoonSky } from "../utils/moonSky";

function TonightSky() {
  const { location, error } = useLocation();

  if (error) {
    return (
      <>
        <h3>🌌 Tonight's Sky</h3>
        <p>{error}</p>
      </>
    );
  }

  if (!location) {
    return (
      <>
        <h3>🌌 Tonight's Sky</h3>
        <p>Finding your location...</p>
      </>
    );
  }

  const sky = getMoonSky(
    location.latitude,
    location.longitude
  );

  return (
    <>
      <h3>🌌 Tonight's Sky</h3>

      <p>
        🌙 Moonrise:{" "}
        {sky.moonrise
          ? sky.moonrise.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            })
          : "Not visible today"}
      </p>

      <p>
        🌅 Moonset:{" "}
        {sky.moonset
          ? sky.moonset.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            })
          : "Not visible today"}
      </p>

      <p>
        📍 Based on your location
      </p>
    </>
  );
}

export default TonightSky;
import { useEffect, useState } from "react";

type Location = {
  latitude: number;
  longitude: number;
};

function useLocation() {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        setError("Location permission denied.");
      }
    );
  }, []);

  return {
    location,
    error,
  };
}

export default useLocation;
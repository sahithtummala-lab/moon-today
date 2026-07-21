import { useEffect, useState } from "react";

type Location = {
  latitude: number;
  longitude: number;
  name: string;
};

export function useLocation() {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        latitude: 37.7749,
        longitude: -122.4194,
        name: "San Francisco, USA",
      });

      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        let name = "Your Location";

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );

          const data = await response.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "";

          const country = data.address.country || "";

          name = city
            ? `${city}, ${country}`
            : country;
        } catch {
          name = "Your Location";
        }

        setLocation({
          latitude,
          longitude,
          name,
        });

        setLoading(false);
      },
      () => {
        setLocation({
          latitude: 37.7749,
          longitude: -122.4194,
          name: "San Francisco, USA",
        });

        setLoading(false);
      }
    );
  }, []);

  return { location, loading };
}
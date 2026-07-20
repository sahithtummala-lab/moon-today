export interface MoonLocation {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export const moonLocations: MoonLocation[] = [
  {
    city: "San Francisco",
    country: "USA",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    city: "London",
    country: "UK",
    latitude: 51.5072,
    longitude: -0.1276,
  },
  {
    city: "Tokyo",
    country: "Japan",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    city: "Mumbai",
    country: "India",
    latitude: 19.076,
    longitude: 72.8777,
  },
];
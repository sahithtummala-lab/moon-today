import * as SunCalc from "suncalc";

export function getMoonSky(
  latitude: number,
  longitude: number
) {
  const now = new Date();

  const times = SunCalc.getMoonTimes(
    now,
    latitude,
    longitude
  );

  const position = SunCalc.getMoonPosition(
    now,
    latitude,
    longitude
  );

  return {
    moonrise: times.rise,
    moonset: times.set,
    altitude: position.altitude,
    azimuth: position.azimuth,
  };
}
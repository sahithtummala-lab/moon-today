import * as SunCalc from "suncalc";
import { getMoonPhase } from "./moonPhase";
import type { MoonPhase } from "./moonPhase";

export interface MoonData extends MoonPhase {
  moonrise: Date | null;
  moonset: Date | null;
  altitude: number;
  azimuth: number;
}

export function getMoonData(
  date = new Date(),
  latitude = 37.7749,
  longitude = -122.4194
): MoonData {
  const phaseData = getMoonPhase(date);

  const moonPosition = SunCalc.getMoonPosition(
    date,
    latitude,
    longitude
  );

  const moonTimes = SunCalc.getMoonTimes(
    date,
    latitude,
    longitude
  );

  return {
    ...phaseData,

    moonrise: moonTimes.rise ?? null,
    moonset: moonTimes.set ?? null,

    altitude: moonPosition.altitude,
    azimuth: moonPosition.azimuth,
  };
}
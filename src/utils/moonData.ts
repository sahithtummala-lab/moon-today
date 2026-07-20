import { getMoonPhase } from "./moonPhase";
import type { MoonPhase } from "./moonPhase";

export interface MoonData extends MoonPhase {}

export function getMoonData(date = new Date()): MoonData {
  return getMoonPhase(date);
}
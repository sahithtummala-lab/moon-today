import {
  MoonPhase as AstronomyMoonPhase,
  SearchMoonQuarter,
  NextMoonQuarter,
} from "astronomy-engine";

export interface MoonPhase {
  phaseName: string;
  emoji: string;
  illumination: number;
  age: number;

  nextNewMoon: Date;
  nextFullMoon: Date;

  daysUntilNewMoon: number;
  daysUntilFullMoon: number;
}

function getPhaseName(phase: number) {
  if (phase < 22.5) return { phaseName: "New Moon", emoji: "🌑" };
  if (phase < 67.5) return { phaseName: "Waxing Crescent", emoji: "🌒" };
  if (phase < 112.5) return { phaseName: "First Quarter", emoji: "🌓" };
  if (phase < 157.5) return { phaseName: "Waxing Gibbous", emoji: "🌔" };
  if (phase < 202.5) return { phaseName: "Full Moon", emoji: "🌕" };
  if (phase < 247.5) return { phaseName: "Waning Gibbous", emoji: "🌖" };
  if (phase < 292.5) return { phaseName: "Last Quarter", emoji: "🌗" };
  if (phase < 337.5) return { phaseName: "Waning Crescent", emoji: "🌘" };

  return { phaseName: "New Moon", emoji: "🌑" };
}

export function getMoonPhase(date = new Date()): MoonPhase {
  const phaseAngle = AstronomyMoonPhase(date);

  const illumination =
    (1 - Math.cos((phaseAngle * Math.PI) / 180)) / 2;

  const age = (phaseAngle / 360) * 29.53058867;

  const currentQuarter = SearchMoonQuarter(date);

  let nextNewMoon = currentQuarter.time.date;
  let nextFullMoon = currentQuarter.time.date;

  let quarter = currentQuarter;

  for (let i = 0; i < 4; i++) {
    if (quarter.quarter === 0) {
      nextNewMoon = quarter.time.date;
    }

    if (quarter.quarter === 2) {
      nextFullMoon = quarter.time.date;
    }

    quarter = NextMoonQuarter(quarter);
  }

  const daysUntilNewMoon =
    Math.ceil(
      (nextNewMoon.getTime() - date.getTime()) /
        (1000 * 60 * 60 * 24)
    );

  const daysUntilFullMoon =
    Math.ceil(
      (nextFullMoon.getTime() - date.getTime()) /
        (1000 * 60 * 60 * 24)
    );

  const { phaseName, emoji } = getPhaseName(phaseAngle);

  return {
    phaseName,
    emoji,
    illumination: Math.round(illumination * 100),
    age,

    nextNewMoon,
    nextFullMoon,

    daysUntilNewMoon,
    daysUntilFullMoon,
  };
}
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

const LUNAR_CYCLE = 29.53058867;
const HALF_CYCLE = LUNAR_CYCLE / 2;

export function getMoonPhase(date = new Date()): MoonPhase {
  const knownNewMoon = new Date("2000-01-06T18:14:00Z");

  const daysSinceNewMoon =
    (date.getTime() - knownNewMoon.getTime()) /
    (1000 * 60 * 60 * 24);

  let phaseAge = daysSinceNewMoon % LUNAR_CYCLE;

  if (phaseAge < 0) {
    phaseAge += LUNAR_CYCLE;
  }

  const illumination =
    (1 - Math.cos((phaseAge / LUNAR_CYCLE) * 2 * Math.PI)) / 2;

  let phaseName = "";
  let emoji = "";

  if (phaseAge < 1.84566) {
    phaseName = "New Moon";
    emoji = "🌑";
  } else if (phaseAge < 5.53699) {
    phaseName = "Waxing Crescent";
    emoji = "🌒";
  } else if (phaseAge < 9.22831) {
    phaseName = "First Quarter";
    emoji = "🌓";
  } else if (phaseAge < 12.91963) {
    phaseName = "Waxing Gibbous";
    emoji = "🌔";
  } else if (phaseAge < 16.61096) {
    phaseName = "Full Moon";
    emoji = "🌕";
  } else if (phaseAge < 20.30228) {
    phaseName = "Waning Gibbous";
    emoji = "🌖";
  } else if (phaseAge < 23.99361) {
    phaseName = "Last Quarter";
    emoji = "🌗";
  } else if (phaseAge < 27.68493) {
    phaseName = "Waning Crescent";
    emoji = "🌘";
  } else {
    phaseName = "New Moon";
    emoji = "🌑";
  }

  const daysUntilNewMoon = LUNAR_CYCLE - phaseAge;

  let daysUntilFullMoon: number;

  if (phaseAge < HALF_CYCLE) {
    daysUntilFullMoon = HALF_CYCLE - phaseAge;
  } else {
    daysUntilFullMoon = LUNAR_CYCLE - phaseAge + HALF_CYCLE;
  }

  const nextNewMoon = new Date(date);
  nextNewMoon.setDate(
    nextNewMoon.getDate() + Math.round(daysUntilNewMoon)
  );

  const nextFullMoon = new Date(date);
  nextFullMoon.setDate(
    nextFullMoon.getDate() + Math.round(daysUntilFullMoon)
  );

  return {
    phaseName,
    emoji,
    illumination: Math.round(illumination * 100),

    age: phaseAge,

    nextNewMoon,
    nextFullMoon,

    daysUntilNewMoon: Math.ceil(daysUntilNewMoon),
    daysUntilFullMoon: Math.ceil(daysUntilFullMoon),
  };
}
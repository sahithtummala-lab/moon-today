export interface FunFact {
  title: string;
  fact: string;
}

export const funFacts: FunFact[] = [
  {
    title: "🌕 The Moon is slowly moving away",
    fact: "The Moon drifts about 3.8 centimeters farther from Earth every year because of tidal interactions between Earth and the Moon.",
  },
  {
    title: "🌑 Eclipse shadows move incredibly fast",
    fact: "During a solar eclipse, the Moon's shadow can race across Earth's surface at thousands of kilometers per hour.",
  },
  {
    title: "🌙 The Moon has moonquakes",
    fact: "Apollo astronauts placed instruments on the Moon that detected vibrations beneath the lunar surface called moonquakes.",
  },
  {
    title: "🪨 Lunar mountains last a long time",
    fact: "Because the Moon has almost no wind or rain, its mountains and craters can remain preserved for billions of years.",
  },
  {
    title: "🌎 The Moon helps Earth",
    fact: "The Moon's gravity helps create ocean tides and contributes to keeping Earth's rotation more stable.",
  },
  {
    title: "✨ The Moon is older than you think",
    fact: "Scientists estimate the Moon formed about 4.5 billion years ago, shortly after Earth formed.",
  },
];

export function getDailyFunFact(): FunFact {
  const today = new Date();
  const dayNumber = Math.floor(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate()
    ) / 86400000
  );

  return funFacts[dayNumber % funFacts.length];
}
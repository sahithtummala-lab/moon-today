import {
  SearchMoonQuarter,
  NextMoonQuarter,
} from "astronomy-engine";

export interface LunarEvent {
  name: string;
  date: Date;
  type: "moon" | "eclipse" | "meteor";
  emoji: string;
  description: string;
  visibility?: string;
  viewingTips?: string;
}

export function getLunarEvents(
  date = new Date()
): LunarEvent[] {
  const events: LunarEvent[] = [];

  let quarter = SearchMoonQuarter(date);

  for (let i = 0; i < 8; i++) {
    let event: LunarEvent | null = null;

    if (quarter.quarter === 0) {
      event = {
        name: "New Moon",
        date: quarter.time.date,
        type: "moon",
        emoji: "🌑",
        description:
          "The Moon is positioned between Earth and the Sun, so the illuminated side faces away from Earth. This creates darker skies ideal for stargazing.",
        viewingTips:
          "Best time for observing stars, galaxies, and faint night sky objects.",
      };
    }

    if (quarter.quarter === 1) {
      event = {
        name: "First Quarter Moon",
        date: quarter.time.date,
        type: "moon",
        emoji: "🌓",
        description:
          "About half of the Moon's visible surface is illuminated as the Moon reaches the first quarter of its orbit around Earth.",
        viewingTips:
          "A great time to view lunar craters because shadows create strong surface detail.",
      };
    }

    if (quarter.quarter === 2) {
      event = {
        name: "Full Moon",
        date: quarter.time.date,
        type: "moon",
        emoji: "🌕",
        description:
          "The Moon appears fully illuminated because the Sun fully lights the side facing Earth.",
        viewingTips:
          "Best viewed shortly after sunset when the Moon rises above the horizon.",
      };
    }

    if (quarter.quarter === 3) {
      event = {
        name: "Last Quarter Moon",
        date: quarter.time.date,
        type: "moon",
        emoji: "🌗",
        description:
          "Half of the Moon's visible surface is illuminated as the lunar cycle moves toward the next New Moon.",
        viewingTips:
          "Best viewed in the early morning hours before sunrise.",
      };
    }

    if (event) {
      events.push(event);
    }

    quarter = NextMoonQuarter(quarter);
  }

  return events;
}
import {
  SearchMoonQuarter,
  NextMoonQuarter,
} from "astronomy-engine";

export interface LunarEvent {
  name: string;
  date: Date;
}

export function getLunarEvents(date = new Date()): LunarEvent[] {
  const events: LunarEvent[] = [];

  let quarter = SearchMoonQuarter(date);

  for (let i = 0; i < 8; i++) {
    let name = "";

    if (quarter.quarter === 0) name = "New Moon";
    if (quarter.quarter === 1) name = "First Quarter";
    if (quarter.quarter === 2) name = "Full Moon";
    if (quarter.quarter === 3) name = "Last Quarter";

    if (name) {
      events.push({
        name,
        date: quarter.time.date,
      });
    }

    quarter = NextMoonQuarter(quarter);
  }

  return events;
}
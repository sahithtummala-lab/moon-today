import { SearchMoonQuarter, NextMoonQuarter } from "astronomy-engine";

export function getUpcomingMoonEvents(date = new Date()) {
  const first = SearchMoonQuarter(date);

  const events = [first];

  let current = first;

  for (let i = 0; i < 3; i++) {
    current = NextMoonQuarter(current);
    events.push(current);
  }

  return events.map((event) => ({
    quarter: event.quarter,
    date: event.time.date,
  }));
}
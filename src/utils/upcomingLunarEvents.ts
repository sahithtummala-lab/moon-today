import { getLunarEvents, type LunarEvent } from "./lunarEvents";
import { eclipseEvents } from "../data/eclipseEvents";
import { meteorEvents } from "../data/meteorEvents";
import { festivals } from "../data/festivals";

export interface UpcomingEvent {
  name: string;
  date: Date;
  type: "moon" | "eclipse" | "meteor" | "culture";
  emoji: string;
  description: string;
  visibility?: string;
  viewingTips?: string;
}

export function getUpcomingLunarEvents(
  date = new Date()
): UpcomingEvent[] {
  const events: UpcomingEvent[] = [];


  // Major lunar events
  eclipseEvents.forEach((event) => {
    const eventDate = new Date(event.date);

    if (eventDate >= date) {
      events.push({
        name: event.name,
        date: eventDate,
        type: "eclipse",
        emoji: event.emoji,
        description: event.description,
        visibility: event.visibility,
      });
    }
  });


  // Meteor showers
  meteorEvents.forEach((event) => {
    const eventDate = new Date(event.date);

    if (eventDate >= date) {
      events.push({
        name: event.name,
        date: eventDate,
        type: "meteor",
        emoji: event.emoji,
        description: event.description,
        visibility: event.visibility,
        viewingTips: event.viewingTips,
      });
    }
  });


  // Moon phases
  const moonEvents = getLunarEvents(date);

  moonEvents.forEach((event: LunarEvent) => {
    events.push({
      name: event.name,
      date: event.date,
      type: event.type,
      emoji: event.emoji,
      description: event.description,
      visibility: event.visibility,
      viewingTips: event.viewingTips,
    });
  });


  // Cultural events
  festivals.forEach((festival) => {
    const festivalDate = new Date(festival.date);

    if (festivalDate >= date) {
      events.push({
        name: festival.name,
        date: festivalDate,
        type: "culture",
        emoji: festival.emoji,
        description: festival.description,
        visibility: festival.region,
      });
    }
  });


  return events
    .sort(
      (a, b) =>
        a.date.getTime() - b.date.getTime()
    )
    .slice(0, 16);
}
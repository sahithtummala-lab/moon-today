export type LunarEventType =
  | "phase"
  | "festival"
  | "eclipse"
  | "meteor";

export interface LunarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  type: LunarEventType;
  description: string;
  region?: string;
}

export const lunarEvents: LunarEvent[] = [
  {
    id: "full-moon",
    title: "Full Moon",
    date: "2026-08-28",
    type: "phase",
    description: "The Moon is fully illuminated."
  },
  {
    id: "ganesh-chaturthi",
    title: "Ganesh Chaturthi",
    date: "2026-09-11",
    type: "festival",
    description:
      "Many traditions observe customs related to viewing (or not viewing) the Moon on this day.",
    region: "India"
  }
];
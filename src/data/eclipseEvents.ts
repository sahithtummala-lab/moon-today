export interface EclipseEvent {
  name: string;
  date: string;
  type: "total" | "partial" | "penumbral";
  emoji: string;
  description: string;
  visibility: string;
}

export const eclipseEvents: EclipseEvent[] = [
  {
    name: "Total Lunar Eclipse",
    date: "2026-03-03",
    type: "total",
    emoji: "🌕",
    description:
      "Earth passes between the Sun and Moon, causing Earth's shadow to completely cover the Moon. The Moon may appear reddish during totality, creating a 'Blood Moon' effect.",
    visibility:
      "Visible from parts of Asia, Australia, the Pacific, and North America. Exact visibility depends on local Moonrise and Moonset times.",
  },

  {
    name: "Partial Lunar Eclipse",
    date: "2026-08-28",
    type: "partial",
    emoji: "🌘",
    description:
      "A partial lunar eclipse occurs when only part of the Moon enters Earth's shadow.",
    visibility:
      "Visible from parts of Asia, Australia, the Pacific, and the Americas. Local visibility depends on location.",
  },
];
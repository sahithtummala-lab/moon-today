export interface MeteorEvent {
  name: string;
  date: string;
  emoji: string;
  description: string;
  visibility: string;
  viewingTips: string;
}

export const meteorEvents: MeteorEvent[] = [
  {
    name: "Perseid Meteor Shower",
    date: "2026-08-12",
    emoji: "☄️",
    description:
      "One of the year's most popular meteor showers, created as Earth passes through debris left behind by Comet Swift-Tuttle.",
    visibility:
      "Visible worldwide, with the best views in the Northern Hemisphere.",
    viewingTips:
      "Look after midnight from a dark location away from city lights.",
  },

  {
    name: "Geminid Meteor Shower",
    date: "2026-12-14",
    emoji: "☄️",
    description:
      "A strong meteor shower produced by debris from asteroid 3200 Phaethon.",
    visibility:
      "Visible worldwide, especially from the Northern Hemisphere.",
    viewingTips:
      "Best viewed late at night and before dawn under dark skies.",
  },

  {
    name: "Lyrid Meteor Shower",
    date: "2026-04-22",
    emoji: "☄️",
    description:
      "A spring meteor shower caused by debris from Comet Thatcher.",
    visibility:
      "Visible mainly from the Northern Hemisphere.",
    viewingTips:
      "Best seen after midnight away from artificial lights.",
  },

  {
    name: "Orionid Meteor Shower",
    date: "2026-10-21",
    emoji: "☄️",
    description:
      "A meteor shower created from debris left behind by Halley's Comet.",
    visibility:
      "Visible worldwide, with good views from both hemispheres.",
    viewingTips:
      "Look toward the eastern sky after midnight.",
  },
];
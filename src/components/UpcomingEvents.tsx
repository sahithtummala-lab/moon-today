import { getLunarEvents } from "../utils/lunarEvents";

export default function UpcomingEvents() {
  const events = getLunarEvents();

  return (
    <section className="feature-card">
      <h3>Upcoming Lunar Events</h3>

      {events.slice(0, 4).map((event) => (
        <p key={event.date.toISOString()}>
          🌙 {event.name}:{" "}
          {event.date.toLocaleDateString()}
        </p>
      ))}
    </section>
  );
}
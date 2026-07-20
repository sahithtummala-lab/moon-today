import "./UpcomingEvents.css";

const events = [
  {
    title: "Next Full Moon",
    date: "Coming soon",
    description: "This section will automatically display the next full moon."
  },
  {
    title: "Next New Moon",
    date: "Coming soon",
    description: "This section will automatically display the next new moon."
  },
  {
    title: "Next Eclipse",
    date: "Coming soon",
    description: "Solar and lunar eclipses will appear here."
  }
];

export default function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <div className="section-header">
        <h2>Upcoming Lunar Events</h2>
        <p>Important celestial events to look forward to.</p>
      </div>

      <div className="event-grid">
        {events.map((event) => (
          <article className="event-card" key={event.title}>
            <h3>{event.title}</h3>
            <span className="event-date">{event.date}</span>
            <p>{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
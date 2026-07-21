import "./UpcomingEvents.css";
import { getUpcomingLunarEvents } from "../utils/upcomingLunarEvents";

export default function UpcomingEvents() {
  const events = getUpcomingLunarEvents();

  const astronomyEvents = events.filter(
    (event) =>
      event.type === "moon" ||
      event.type === "eclipse" ||
      event.type === "meteor"
  );

  const cultureEvents = events.filter(
    (event) => event.type === "culture"
  );

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <section className="upcoming-events">
      <h2>
        Upcoming Lunar Events
      </h2>

      <div className="events-grid">

        <div className="event-column">
          <h3>
            🌙 Astronomy
          </h3>

          {astronomyEvents.slice(0, 4).map((event) => (
            <div
              className="event-card"
              key={`${event.name}-${event.date.toISOString()}`}
            >
              <div className="event-title">
                <span>
                  {event.emoji}
                </span>

                <h4>
                  {event.name}
                </h4>
              </div>

              <p className="event-date">
                {formatDate(event.date)}
              </p>

              <p>
                {event.description}
              </p>

              {event.visibility && (
                <p className="event-detail">
                  🌍 {event.visibility}
                </p>
              )}

              {event.viewingTips && (
                <p className="event-detail">
                  🔭 {event.viewingTips}
                </p>
              )}
            </div>
          ))}
        </div>


        <div className="event-column">
          <h3>
            🌎 Culture
          </h3>

          {cultureEvents.slice(0, 4).map((event) => (
            <div
              className="event-card"
              key={`${event.name}-${event.date.toISOString()}`}
            >
              <div className="event-title">
                <span>
                  {event.emoji}
                </span>

                <h4>
                  {event.name}
                </h4>
              </div>

              <p className="event-date">
                {formatDate(event.date)}
              </p>

              <p>
                {event.description}
              </p>

              {event.visibility && (
                <p className="event-detail">
                  📍 {event.visibility}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
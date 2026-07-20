import InfoRow from "./InfoRow";
import { upcomingEvents } from "../data/events";

interface QuickViewProps {
  moon: {
    age: number;
  };
}

function QuickView({ moon }: QuickViewProps) {
  return (
    <>
      <h3>👁 Quick View</h3>

      {upcomingEvents.map((event) => (
        <InfoRow
          key={event.title}
          label={`${event.icon} ${event.title}`}
          value={event.date}
        />
      ))}

      <InfoRow
        label="Lunar Cycle"
        value={`Day ${moon.age.toFixed(1)} of 29.5`}
        description="Days since the last New Moon."
      />
    </>
  );
}

export default QuickView;
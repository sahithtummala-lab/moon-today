type HeaderProps = {
  date: string;
  locationName: string;
};

export default function Header({
  date,
  locationName,
}: HeaderProps) {
  return (
    <header className="header">
      <div>
        <h1>🌙 Moon Today</h1>

        <p>
          {date}
        </p>

        <p>
          📍 {locationName}
        </p>
      </div>
    </header>
  );
}
type HeaderProps = {
  date: string;
};

export default function Header({ date }: HeaderProps) {
  return (
    <header
      style={{
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "0.5rem",
        }}
      >
        🌙 Moon Today
      </h1>

      <p
        style={{
          color: "#cbd5e1",
          fontSize: "1.1rem",
        }}
      >
        {date}
      </p>
    </header>
  );
}
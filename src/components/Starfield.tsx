import "./Starfield.css";

export default function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      <div className="stars stars-small"></div>
      <div className="stars stars-medium"></div>
      <div className="stars stars-large"></div>
    </div>
  );
}
import "./FestivalSpotlight.css";

export default function FestivalSpotlight() {
  return (
    <section className="festival-spotlight">
      <div className="festival-card">
        <p className="festival-label">Festival Spotlight</p>

        <h2>Ganesh Chaturthi</h2>

        <p className="festival-date">
          Date: Coming soon
        </p>

        <p>
          Ganesh Chaturthi celebrates the birth of Lord Ganesha and follows the
          lunar calendar. In many Hindu traditions, it is respectfully advised
          to avoid looking at the Moon on this day due to a well-known story in
          Hindu mythology. A future page will explore this tradition, its
          history, and regional customs in greater detail.
        </p>

        <button className="festival-button">
          Learn More
        </button>
      </div>
    </section>
  );
}
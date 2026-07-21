import { getDailyFunFact } from "../data/funFacts";

export default function MoonFact() {
  const funFact = getDailyFunFact();

  return (
    <div>
      <h3>🌙 Moon Fact of the Day</h3>

      <div>
        <h4>{funFact.title}</h4>
        <p>{funFact.fact}</p>
      </div>
    </div>
  );
}
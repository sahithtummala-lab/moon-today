import "./LanguageSpotlight.css";
import { languages } from "../data/languages";
import { getDailyLanguageInfo } from "../utils/languageRotation";

export default function LanguageSpotlight() {
  const {
    language,
    tomorrow,
    dayNumber,
    totalLanguages,
  } = getDailyLanguageInfo(languages);


  return (
    <section className="language-spotlight">

      <div className="language-card">

        <p className="language-label">
          🌙 Today's Moon Language
        </p>

        <p className="language-day">
          Day {dayNumber} of {totalLanguages}
        </p>


        <h2>
          {language.language}
        </h2>

        <p className="language-region">
          {language.region}
        </p>


        <div className="moon-word">

          <h3>
            {language.everydayWord}
          </h3>

          <p>
            {language.pronunciation}
          </p>

          <span>
            {language.meaning}
          </span>

        </div>


        <div className="language-cultural-note">

          <h4>
            Cultural Connection
          </h4>

          <p>
            {language.culturalNote}
          </p>

        </div>


        {language.moonSong.youtube && (
          <a
            href={language.moonSong.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="moon-song-link"
          >
            🎵 Listen to Moon Song
          </a>
        )}


        <div className="tomorrow-language">

          <p>
            Tomorrow's spotlight:
          </p>

          <strong>
            {tomorrow.language}
          </strong>

        </div>


      </div>

    </section>
  );
}
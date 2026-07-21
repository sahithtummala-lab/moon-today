import type { LanguageData } from "../data/languages";

export interface DailyLanguageInfo {
  language: LanguageData;
  tomorrow: LanguageData;
  dayNumber: number;
  totalLanguages: number;
}

export function getDailyLanguageInfo(
  languages: LanguageData[],
  date = new Date()
): DailyLanguageInfo {
  // Local midnight today
  const today = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  // Local midnight on January 1 of this year
  const startOfYear = new Date(date.getFullYear(), 0, 1);

  const dayOfYear = Math.floor(
    (today.getTime() - startOfYear.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const index =
    ((dayOfYear % languages.length) + languages.length) %
    languages.length;

  return {
    language: languages[index],
    tomorrow: languages[(index + 1) % languages.length],
    dayNumber: index + 1,
    totalLanguages: languages.length,
  };
}
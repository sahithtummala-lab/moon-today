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
  const startDate = new Date("2026-07-20");

  const difference =
    Math.floor(
      (date.getTime() - startDate.getTime()) /
        (1000 * 60 * 60 * 24)
    );

  const index =
    ((difference % languages.length) + languages.length) %
    languages.length;

  return {
    language: languages[index],
    tomorrow:
      languages[(index + 1) % languages.length],
    dayNumber: index + 1,
    totalLanguages: languages.length,
  };
}
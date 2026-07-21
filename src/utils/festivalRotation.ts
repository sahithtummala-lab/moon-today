import { festivals, type Festival } from "../data/festivals";

function getFestivalDate(festival: Festival, year: number): Date {
  const monthDay = festival.date.slice(5);

  return new Date(`${year}-${monthDay}`);
}

export function getNextFestival(): Festival {
  const today = new Date();
  const currentYear = today.getFullYear();

  const upcomingFestivals = festivals
    .map((festival) => ({
      festival,
      date: getFestivalDate(festival, currentYear),
    }))
    .filter(({ date }) => date >= today)
    .sort(
      (a, b) =>
        a.date.getTime() - b.date.getTime()
    );

  if (upcomingFestivals.length > 0) {
    return upcomingFestivals[0].festival;
  }

  const nextYearFestivals = festivals
    .map((festival) => ({
      festival,
      date: getFestivalDate(festival, currentYear + 1),
    }))
    .sort(
      (a, b) =>
        a.date.getTime() - b.date.getTime()
    );

  return nextYearFestivals[0].festival;
}
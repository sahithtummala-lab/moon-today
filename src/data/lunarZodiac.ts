export interface LunarZodiac {
  name: string;
  symbol: string;
}

export const lunarZodiacSigns: LunarZodiac[] = [
  { name: "Aries", symbol: "♈" },
  { name: "Taurus", symbol: "♉" },
  { name: "Gemini", symbol: "♊" },
  { name: "Cancer", symbol: "♋" },
  { name: "Leo", symbol: "♌" },
  { name: "Virgo", symbol: "♍" },
  { name: "Libra", symbol: "♎" },
  { name: "Scorpio", symbol: "♏" },
  { name: "Sagittarius", symbol: "♐" },
  { name: "Capricorn", symbol: "♑" },
  { name: "Aquarius", symbol: "♒" },
  { name: "Pisces", symbol: "♓" },
];

/**
 * Placeholder implementation.
 * We'll replace this with a real astronomical calculation.
 */
export function getTodaysLunarZodiac() {
  const today = new Date();

  const dayNumber = Math.floor(
    Date.UTC(
      today.getUTCFullYear(),
      today.getUTCMonth(),
      today.getUTCDate()
    ) / 86400000
  );

  const index = dayNumber % 12;

  return {
    current: lunarZodiacSigns[index],
    next: lunarZodiacSigns[(index + 1) % 12],
  };
}
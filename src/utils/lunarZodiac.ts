import { AstroTime, EclipticGeoMoon } from "astronomy-engine";

export interface LunarZodiacSign {
  name: string;
  symbol: string;
}

const zodiacSigns: LunarZodiacSign[] = [
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

export interface CurrentLunarZodiac {
  current: LunarZodiacSign;
  next: LunarZodiacSign;
}

export function getCurrentLunarZodiac(
  date = new Date()
): CurrentLunarZodiac {
  const moon = EclipticGeoMoon(new AstroTime(date));

  let longitude = moon.lon;

  if (longitude < 0) {
    longitude += 360;
  }

  const index = Math.floor(longitude / 30);

  return {
    current: zodiacSigns[index],
    next: zodiacSigns[(index + 1) % 12],
  };
}
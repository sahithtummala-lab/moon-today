export interface Festival {
  name: string;
  date: string;
  dateType: "fixed" | "lunar" | "estimated";
  region: string;
  tradition: string;
  category: string;
  emoji: string;
  description: string;
  moonConnection: string;
}

export const festivals: Festival[] = [
  {
    name: "Lunar New Year",
    date: "2026-02-17",
    dateType: "lunar",
    region: "East Asia",
    tradition: "Chinese, Korean, Vietnamese traditions",
    category: "Lunar Calendar Festival",
    emoji: "🌙",
    description:
      "A celebration marking the beginning of the lunar year with family gatherings, traditions, and cultural celebrations.",
    moonConnection:
      "The festival follows the lunar calendar and begins with the new Moon cycle.",
  },

  {
    name: "Seollal (Korean Lunar New Year)",
    date: "2026-02-17",
    dateType: "lunar",
    region: "Korea",
    tradition: "Korean tradition",
    category: "Lunar New Year Festival",
    emoji: "🌙",
    description:
      "A Korean New Year celebration involving family gatherings, ancestral traditions, and traditional foods.",
    moonConnection:
      "Seollal follows the lunar calendar and begins with the first new Moon of the year.",
  },

  {
    name: "Tết (Vietnamese Lunar New Year)",
    date: "2026-02-17",
    dateType: "lunar",
    region: "Vietnam",
    tradition: "Vietnamese tradition",
    category: "Lunar New Year Festival",
    emoji: "🌙",
    description:
      "Vietnam's most important celebration marking the beginning of the lunar year.",
    moonConnection:
      "Tết follows the lunar calendar and begins with the new Moon cycle.",
  },

  {
    name: "Lantern Festival",
    date: "2026-03-03",
    dateType: "lunar",
    region: "China",
    tradition: "Chinese tradition",
    category: "Full Moon Festival",
    emoji: "🏮",
    description:
      "A celebration featuring lantern displays, performances, riddles, and gatherings.",
    moonConnection:
      "The festival takes place on the first full Moon of the lunar year.",
  },

  {
    name: "Mid-Autumn Festival",
    date: "2026-09-25",
    dateType: "lunar",
    region: "China and East Asia",
    tradition: "Chinese tradition",
    category: "Moon Viewing Festival",
    emoji: "🥮",
    description:
      "A harvest celebration focused on family reunion, gratitude, and appreciation of the Moon.",
    moonConnection:
      "Celebrated on the 15th day of the eighth lunar month when the Moon is traditionally at its fullest.",
  },

  {
    name: "Tsukimi (Moon Viewing Festival)",
    date: "2026-09-25",
    dateType: "lunar",
    region: "Japan",
    tradition: "Japanese tradition",
    category: "Moon Viewing Festival",
    emoji: "🌕",
    description:
      "A celebration dedicated to appreciating the beauty of the autumn Moon.",
    moonConnection:
      "The festival is centered directly around observing the harvest full Moon.",
  },

  {
    name: "Chuseok",
    date: "2026-09-25",
    dateType: "lunar",
    region: "Korea",
    tradition: "Korean tradition",
    category: "Harvest Moon Festival",
    emoji: "🌕",
    description:
      "A Korean harvest celebration involving family gatherings and gratitude.",
    moonConnection:
      "Celebrated during the full Moon of the eighth lunar month.",
  },
    {
    name: "Eid al-Fitr",
    date: "2026-03-21",
    dateType: "estimated",
    region: "Worldwide",
    tradition: "Islamic tradition",
    category: "Lunar Calendar Festival",
    emoji: "🌙",
    description:
      "A celebration marking the end of Ramadan with prayers, charity, family gatherings, and community celebrations.",
    moonConnection:
      "The festival begins after the sighting of the crescent Moon marking the start of Shawwal.",
  },

  {
    name: "Eid al-Adha",
    date: "2026-05-27",
    dateType: "estimated",
    region: "Worldwide",
    tradition: "Islamic tradition",
    category: "Lunar Calendar Festival",
    emoji: "🌙",
    description:
      "A major Islamic festival involving prayer, charity, and community gatherings.",
    moonConnection:
      "Its date is determined by the Islamic lunar calendar and the cycle of lunar months.",
  },

  {
    name: "Mid-Sha'ban (Night of Bara'ah)",
    date: "2026-01-25",
    dateType: "estimated",
    region: "Middle East and South Asia",
    tradition: "Islamic tradition",
    category: "Moon Night Tradition",
    emoji: "🌙",
    description:
      "A night of prayer and reflection observed in many Muslim communities.",
    moonConnection:
      "Observed on the 15th night of the lunar month of Sha'ban.",
  },

  {
    name: "Holi",
    date: "2026-03-04",
    dateType: "lunar",
    region: "India and South Asia",
    tradition: "Hindu tradition",
    category: "Full Moon Festival",
    emoji: "🌕",
    description:
      "The festival of colors celebrating spring, renewal, and the victory of good over evil.",
    moonConnection:
      "Holi is celebrated on Phalguna Purnima, the full Moon day of the Hindu lunar month of Phalguna.",
  },

  {
    name: "Ganesh Chaturthi",
    date: "2026-09-14",
    dateType: "lunar",
    region: "India",
    tradition: "Hindu tradition",
    category: "Moon Mythology",
    emoji: "🐘",
    description:
      "A festival celebrating the birth of Lord Ganesha through prayers, art, music, and community celebrations.",
    moonConnection:
      "The festival takes place during the waxing Moon and is connected to the traditional story of Ganesha and the Moon.",
  },

  {
    name: "Karva Chauth",
    date: "2026-10-29",
    dateType: "lunar",
    region: "India",
    tradition: "Hindu tradition",
    category: "Moon Ritual Festival",
    emoji: "🌕",
    description:
      "A traditional fasting festival where participants wait for the Moon to rise before completing the ritual.",
    moonConnection:
      "The rising Moon is central to the ceremony and marks the completion of the fast.",
  },

  {
    name: "Diwali",
    date: "2026-11-08",
    dateType: "lunar",
    region: "India and South Asia",
    tradition: "Hindu, Jain, Sikh traditions",
    category: "New Moon Festival",
    emoji: "🪔",
    description:
      "The festival of lights celebrating the victory of light over darkness.",
    moonConnection:
      "Diwali takes place on Amavasya, the new Moon night of the Hindu month of Kartika.",
  },

  {
    name: "Shivaratri",
    date: "2026-02-15",
    dateType: "lunar",
    region: "India",
    tradition: "Hindu tradition",
    category: "Moon Cycle Tradition",
    emoji: "🌑",
    description:
      "A night of devotion honoring Lord Shiva through prayer and meditation.",
    moonConnection:
      "Observed on the 14th night of the waning Moon before the new Moon.",
  },

  {
    name: "Vesak",
    date: "2026-05-01",
    dateType: "lunar",
    region: "South and Southeast Asia",
    tradition: "Buddhist tradition",
    category: "Full Moon Festival",
    emoji: "🌕",
    description:
      "A sacred Buddhist observance honoring important events in Buddha's life.",
    moonConnection:
      "Vesak is traditionally observed during the full Moon of the lunar month of Vesak.",
  },

  {
    name: "Poya Day",
    date: "2026-05-01",
    dateType: "lunar",
    region: "Sri Lanka",
    tradition: "Buddhist tradition",
    category: "Full Moon Observance",
    emoji: "🌕",
    description:
      "Monthly Buddhist observances held on full Moon days with prayer and reflection.",
    moonConnection:
      "Each Poya Day occurs on the full Moon and follows the Buddhist lunar calendar.",
  },
    {
    name: "Passover",
    date: "2026-04-02",
    dateType: "lunar",
    region: "Worldwide Jewish communities",
    tradition: "Jewish tradition",
    category: "Lunar Calendar Festival",
    emoji: "🌕",
    description:
      "A festival commemorating the Exodus story through family gatherings and traditional meals.",
    moonConnection:
      "Passover begins on the 15th day of the Hebrew lunar month of Nisan, near the full Moon.",
  },

  {
    name: "Sukkot",
    date: "2026-09-26",
    dateType: "lunar",
    region: "Worldwide Jewish communities",
    tradition: "Jewish tradition",
    category: "Lunar Calendar Festival",
    emoji: "🌕",
    description:
      "A harvest festival involving outdoor shelters, gatherings, and reflection.",
    moonConnection:
      "Sukkot begins during the full Moon period of the Hebrew lunar calendar.",
  },

  {
    name: "Rosh Hashanah",
    date: "2026-09-12",
    dateType: "lunar",
    region: "Worldwide Jewish communities",
    tradition: "Jewish tradition",
    category: "Lunar Calendar Festival",
    emoji: "🌙",
    description:
      "The Jewish New Year, marked by prayer, reflection, and traditional celebrations.",
    moonConnection:
      "The date follows the Hebrew lunisolar calendar and begins near the new Moon.",
  },

  {
    name: "Loy Krathong",
    date: "2026-11-24",
    dateType: "lunar",
    region: "Thailand",
    tradition: "Thai tradition",
    category: "Moon Festival",
    emoji: "🌕",
    description:
      "A festival where people float decorated baskets on rivers to show gratitude and release negativity.",
    moonConnection:
      "Celebrated on the full Moon night of the twelfth lunar month.",
  },

  {
    name: "Yi Peng Lantern Festival",
    date: "2026-11-24",
    dateType: "lunar",
    region: "Northern Thailand",
    tradition: "Thai Lanna tradition",
    category: "Moon Festival",
    emoji: "🏮",
    description:
      "A lantern festival where thousands of lanterns are released into the night sky.",
    moonConnection:
      "The festival is traditionally celebrated during the full Moon period of the lunar calendar.",
  },

  {
    name: "Raksha Bandhan",
    date: "2026-08-28",
    dateType: "lunar",
    region: "India and South Asia",
    tradition: "Hindu tradition",
    category: "Full Moon Festival",
    emoji: "🌕",
    description:
      "A celebration honoring the bond between siblings through traditional ceremonies.",
    moonConnection:
      "Celebrated on Shravana Purnima, the full Moon day of the lunar month of Shravana.",
  },

  {
    name: "Guru Purnima",
    date: "2026-07-29",
    dateType: "lunar",
    region: "India and Nepal",
    tradition: "Hindu and Buddhist traditions",
    category: "Full Moon Festival",
    emoji: "🌕",
    description:
      "A day honoring teachers, mentors, and spiritual guides.",
    moonConnection:
      "Celebrated on the full Moon day of Ashadha.",
  },

  {
    name: "Kartik Purnima",
    date: "2026-11-24",
    dateType: "lunar",
    region: "India",
    tradition: "Hindu, Sikh, Jain traditions",
    category: "Full Moon Festival",
    emoji: "🌕",
    description:
      "A sacred full Moon celebration associated with prayers and spiritual observances.",
    moonConnection:
      "Observed on the full Moon day of the Hindu month of Kartika.",
  },

  {
    name: "Maramataka Moon Traditions",
    date: "2026-01-01",
    dateType: "lunar",
    region: "Aotearoa New Zealand",
    tradition: "Māori tradition",
    category: "Lunar Calendar Tradition",
    emoji: "🌙",
    description:
      "Traditional Māori knowledge systems use the Moon cycle to guide fishing, planting, harvesting, and community life.",
    moonConnection:
      "The Māori maramataka is a lunar calendar that follows the phases and qualities of the Moon.",
  },

  {
    name: "Harvest Moon Celebrations",
    date: "2026-09-25",
    dateType: "lunar",
    region: "Global",
    tradition: "Various cultural traditions",
    category: "Full Moon Celebration",
    emoji: "🌕",
    description:
      "Communities around the world celebrate the harvest season under the light of the full Moon.",
    moonConnection:
      "The Harvest Moon is the full Moon closest to the autumn equinox.",
  },
];
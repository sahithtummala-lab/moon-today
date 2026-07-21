export interface AlternateWord {
  word: string;
  pronunciation: string;
  meaning: string;
}

export interface MoonSong {
  title: string;
  artist: string;
  youtube?: string;
  spotify?: string;
}

export interface LanguageData {
  id: string;

  language: string;
  region: string;

  everydayWord: string;
  pronunciation: string;
  meaning: string;

  alternateWords: AlternateWord[];

  culturalNote: string;

  moonSong: MoonSong;
}

function createYouTubeSearch(title: string, artist: string) {
  if (!title || !artist) return undefined;

  const query = encodeURIComponent(
    `${title} ${artist} moon song`
  );

  return `https://www.youtube.com/results?search_query=${query}`;
}

export const languages: LanguageData[] = [
  {
    id: "japanese",
    language: "Japanese",
    region: "Japan",

    everydayWord: "月",
    pronunciation: "Tsuki",
    meaning: "Moon",

    alternateWords: [
      {
        word: "お月様",
        pronunciation: "O-tsukisama",
        meaning: "Respectful and affectionate way to refer to the moon."
      },
      {
        word: "月夜",
        pronunciation: "Tsukiyo",
        meaning: "Moonlit night; poetic moon imagery."
      },
      {
        word: "望月",
        pronunciation: "Mochizuki",
        meaning: "Full moon; classical literary term."
      }
    ],

    culturalNote:
      "The moon has been central to Japanese poetry, art, and seasonal traditions for centuries. Tsukimi, the traditional moon-viewing festival, celebrates the beauty of the autumn full moon.",

    moonSong: {
      title: "Moonlight Densetsu",
      artist: "DALI",
      youtube: createYouTubeSearch(
        "Moonlight Densetsu",
        "DALI"
      )
    }
  },

  {
    id: "telugu",
    language: "Telugu",
    region: "Andhra Pradesh and Telangana, India",

    everydayWord: "చంద్రుడు",
    pronunciation: "Chandrudu",
    meaning: "Moon",

    alternateWords: [
      {
        word: "చందమామ",
        pronunciation: "Chandamāma",
        meaning: "Affectionate name for the moon, especially common in children's stories and songs."
      },
      {
        word: "జాబిల్లి",
        pronunciation: "Jābilli",
        meaning: "Poetic Telugu word for the moon."
      },
      {
        word: "శశి",
        pronunciation: "Shashi",
        meaning: "Classical poetic name for the moon."
      }
    ],

    culturalNote:
      "The moon has a cherished place in Telugu culture. Chandamāma appears in children's literature and lullabies, while Jābilli is strongly associated with poetic descriptions of moonlight and beauty.",

    moonSong: {
      title: "చందమామ రావే (Chandamama Raave)",
      artist: "Traditional Telugu lullaby",
      youtube: createYouTubeSearch(
        "చందమామ రావే Chandamama Raave",
        "Traditional Telugu lullaby"
      )
    }
  },

  {
    id: "arabic",
    language: "Arabic",
    region: "Arab world",

    everydayWord: "قمر",
    pronunciation: "Qamar",
    meaning: "Moon",

    alternateWords: [
      {
        word: "بدر",
        pronunciation: "Badr",
        meaning: "Full moon; a classical symbol of beauty."
      },
      {
        word: "هلال",
        pronunciation: "Hilāl",
        meaning: "Crescent moon."
      },
      {
        word: "قمري",
        pronunciation: "Qamarī",
        meaning: "Lunar or moon-like; poetic adjective."
      }
    ],

    culturalNote:
      "The moon is deeply significant in Arabic poetry and culture. The full moon is often used as a metaphor for beauty, while the crescent moon has importance in calendars and traditions throughout the Arab world.",

    moonSong: {
      title: "Qamarun",
      artist: "Mesut Kurtis",
      youtube: createYouTubeSearch(
        "Qamarun",
        "Mesut Kurtis"
      )
    }
  },

  {
    id: "spanish",
    language: "Spanish",
    region: "Spain and Spanish-speaking communities worldwide",

    everydayWord: "luna",
    pronunciation: "Luna",
    meaning: "Moon",

    alternateWords: [
      {
        word: "luna llena",
        pronunciation: "Luna llena",
        meaning: "Full moon."
      },
      {
        word: "plenilunio",
        pronunciation: "Plenilunio",
        meaning: "Full moon; literary and astronomical term."
      },
      {
        word: "lunita",
        pronunciation: "Lunita",
        meaning: "Little moon; affectionate diminutive."
      }
    ],

    culturalNote:
      "The moon is one of the strongest images in Spanish poetry, music, and folklore. Writers such as Federico García Lorca used the moon as a symbol of mystery, beauty, and longing.",

    moonSong: {
      title: "Hijo de la Luna",
      artist: "Mecano",
      youtube: createYouTubeSearch(
        "Hijo de la Luna",
        "Mecano"
      )
    }
  },

  {
    id: "mandarin-chinese",
    language: "Mandarin Chinese",
    region: "China and Chinese-speaking communities worldwide",

    everydayWord: "月亮",
    pronunciation: "Yuèliàng",
    meaning: "Moon",

    alternateWords: [
      {
        word: "月儿",
        pronunciation: "Yuè'er",
        meaning: "Gentle affectionate form of moon."
      },
      {
        word: "明月",
        pronunciation: "Míngyuè",
        meaning: "Bright moon; classical poetic expression."
      },
      {
        word: "玉兔",
        pronunciation: "Yùtù",
        meaning: "Jade Rabbit from Chinese moon mythology."
      }
    ],

    culturalNote:
      "The moon represents reunion, family, beauty, and longing in Chinese culture. The Mid-Autumn Festival celebrates the full moon, and legends of Chang'e and the Jade Rabbit remain among China's most famous lunar stories.",

    moonSong: {
      title: "月亮代表我的心",
      artist: "Teresa Teng",
      youtube: createYouTubeSearch(
        "月亮代表我的心",
        "Teresa Teng"
      )
    }
  },
    {
    id: "navajo",
    language: "Navajo (Diné Bizaad)",
    region: "Diné Bikéyah (Southwestern United States)",

    everydayWord: "ooljééʼ",
    pronunciation: "ohł-JAYʼ",
    meaning: "Moon",

    alternateWords: [
      {
        word: "ooljééʼ",
        pronunciation: "ohł-JAYʼ",
        meaning: "Moon."
      },
      {
        word: "ooljééʼ bitsʼáadah",
        pronunciation: "ohł-JAYʼ bit-sʼáadah",
        meaning: "Moon phase or aspect of the moon."
      }
    ],

    culturalNote:
      "In Diné culture, the moon is connected with cycles of time, seasons, ceremonies, and balance. Lunar phases are part of traditional knowledge about the natural world.",

    moonSong: {
      title: "",
      artist: ""
    }
  },

  {
    id: "hindi",
    language: "Hindi",
    region: "India",

    everydayWord: "चाँद",
    pronunciation: "Chānd",
    meaning: "Moon",

    alternateWords: [
      {
        word: "चन्द्रमा",
        pronunciation: "Chandramā",
        meaning: "Formal and literary word for moon."
      },
      {
        word: "शशि",
        pronunciation: "Shashi",
        meaning: "Poetic name for the moon."
      },
      {
        word: "इन्दु",
        pronunciation: "Indu",
        meaning: "Classical poetic name for the moon."
      }
    ],

    culturalNote:
      "The moon is a major symbol in Hindi literature and culture, representing beauty, romance, calmness, and longing. Comparisons of beauty to the moon are common throughout Hindi poetry and songs.",

    moonSong: {
      title: "Chand Sifarish",
      artist: "Shaan and Kailash Kher",
      youtube: createYouTubeSearch(
        "Chand Sifarish",
        "Shaan and Kailash Kher"
      )
    }
  },

  {
    id: "greek",
    language: "Greek",
    region: "Greece and Cyprus",

    everydayWord: "φεγγάρι",
    pronunciation: "Fengári",
    meaning: "Moon",

    alternateWords: [
      {
        word: "Σελήνη",
        pronunciation: "Selíni",
        meaning: "The Moon; also the ancient Greek moon goddess."
      },
      {
        word: "μήνη",
        pronunciation: "Míni",
        meaning: "Ancient poetic lunar term."
      },
      {
        word: "σεληνόφως",
        pronunciation: "Selenófos",
        meaning: "Moonlight."
      }
    ],

    culturalNote:
      "The moon has been central to Greek mythology and literature. Selene, the ancient Greek moon goddess, represents the connection between the night sky, mythology, and human imagination.",

    moonSong: {
      title: "Φεγγάρι Μου",
      artist: "Haris Alexiou",
      youtube: createYouTubeSearch(
        "Φεγγάρι Μου",
        "Haris Alexiou"
      )
    }
  },

  {
    id: "korean",
    language: "Korean",
    region: "Korea",

    everydayWord: "달",
    pronunciation: "Dal",
    meaning: "Moon",

    alternateWords: [
      {
        word: "달님",
        pronunciation: "Dalnim",
        meaning: "Respectful and affectionate form of moon."
      },
      {
        word: "월",
        pronunciation: "Wol",
        meaning: "Sino-Korean literary form of moon."
      },
      {
        word: "명월",
        pronunciation: "Myeongwol",
        meaning: "Bright moon; poetic expression."
      }
    ],

    culturalNote:
      "The moon is deeply connected to Korean traditions, especially Chuseok, the harvest festival celebrated under the full moon. Korean folklore includes the famous moon rabbit, 옥토끼.",

    moonSong: {
      title: "달의 몰락",
      artist: "Kim Hyun-cheol",
      youtube: createYouTubeSearch(
        "달의 몰락",
        "Kim Hyun-cheol"
      )
    }
  },

  {
    id: "tamil",
    language: "Tamil",
    region: "Tamil Nadu, India and Sri Lanka",

    everydayWord: "நிலா",
    pronunciation: "Nilā",
    meaning: "Moon",

    alternateWords: [
      {
        word: "சந்திரன்",
        pronunciation: "Candiran",
        meaning: "Formal word for moon."
      },
      {
        word: "மதி",
        pronunciation: "Mati",
        meaning: "Classical poetic moon term."
      },
      {
        word: "திங்கள்",
        pronunciation: "Tiṅgaḷ",
        meaning: "Ancient Tamil word for moon."
      }
    ],

    culturalNote:
      "The moon is a beloved symbol in Tamil poetry, songs, and cinema. Classical Tamil literature frequently uses the moon as an image of beauty, love, and longing.",

    moonSong: {
      title: "Vennilave Vennilave",
      artist: "Hariharan and Sadhana Sargam",
      youtube: createYouTubeSearch(
        "Vennilave Vennilave",
        "Hariharan and Sadhana Sargam"
      )
    }
  },

  {
    id: "persian",
    language: "Persian",
    region: "Iran, Afghanistan, and Tajikistan",

    everydayWord: "ماه",
    pronunciation: "Māh",
    meaning: "Moon",

    alternateWords: [
      {
        word: "مهتاب",
        pronunciation: "Mahtāb",
        meaning: "Moonlight."
      },
      {
        word: "بدر",
        pronunciation: "Badr",
        meaning: "Full moon."
      },
      {
        word: "ماه‌رخ",
        pronunciation: "Māh-rokh",
        meaning: "Moon-faced; poetic expression of beauty."
      }
    ],

    culturalNote:
      "The moon is one of the strongest images in Persian poetry. Poets such as Hafez and Rumi used the moon as a symbol of beauty, love, longing, and spiritual illumination.",

    moonSong: {
      title: "Māhtāb",
      artist: "Mohsen Namjoo",
      youtube: createYouTubeSearch(
        "Māhtāb",
        "Mohsen Namjoo"
      )
    }
  },
    {
    id: "french",
    language: "French",
    region: "France and French-speaking communities worldwide",

    everydayWord: "lune",
    pronunciation: "Lün",
    meaning: "Moon",

    alternateWords: [
      {
        word: "clair de lune",
        pronunciation: "Clair de lune",
        meaning: "Moonlight; poetic expression meaning 'light of the moon'."
      },
      {
        word: "astre lunaire",
        pronunciation: "Astre lunaire",
        meaning: "Lunar celestial body; formal expression."
      },
      {
        word: "croissant de lune",
        pronunciation: "Croissant de lune",
        meaning: "Crescent moon."
      }
    ],

    culturalNote:
      "The moon has inspired French poetry, music, and visual art for centuries. The phrase 'clair de lune' became globally famous through works such as Debussy's piano composition of the same name.",

    moonSong: {
      title: "Clair de lune",
      artist: "Claude Debussy",
      youtube: createYouTubeSearch(
        "Clair de lune",
        "Claude Debussy"
      )
    }
  },

  {
    id: "kannada",
    language: "Kannada",
    region: "Karnataka, India",

    everydayWord: "ಚಂದ್ರ",
    pronunciation: "Candra",
    meaning: "Moon",

    alternateWords: [
      {
        word: "ತಿಂಗಳು",
        pronunciation: "Tiṅgaḷu",
        meaning: "Traditional Kannada word connected with the moon and month."
      },
      {
        word: "ಶಶಿ",
        pronunciation: "Shashi",
        meaning: "Classical poetic moon name."
      },
      {
        word: "ಸೋಮ",
        pronunciation: "Sōma",
        meaning: "Moon deity; literary name."
      }
    ],

    culturalNote:
      "The moon appears throughout Kannada literature and culture. Traditional lunar cycles are reflected in language, calendars, poetry, and songs.",

    moonSong: {
      title: "",
      artist: ""
    }
  },

  {
    id: "latin",
    language: "Latin",
    region: "Ancient Rome and the Roman world",

    everydayWord: "lūna",
    pronunciation: "LOO-na",
    meaning: "Moon",

    alternateWords: [
      {
        word: "Luna",
        pronunciation: "LOO-na",
        meaning: "Roman personification of the moon."
      },
      {
        word: "Diana",
        pronunciation: "Diāna",
        meaning: "Roman goddess associated with the moon."
      },
      {
        word: "Cynthia",
        pronunciation: "Cynthia",
        meaning: "Poetic lunar name derived from Greek tradition."
      }
    ],

    culturalNote:
      "The Latin moon word lūna influenced many modern languages and scientific terms. Roman poets frequently personified the moon through Luna and Diana.",

    moonSong: {
      title: "",
      artist: ""
    }
  },

  {
    id: "malayalam",
    language: "Malayalam",
    region: "Kerala, India",

    everydayWord: "ചന്ദ്രൻ",
    pronunciation: "Candran",
    meaning: "Moon",

    alternateWords: [
      {
        word: "അമ്പിളി",
        pronunciation: "Ambili",
        meaning: "Affectionate Malayalam name for the moon."
      },
      {
        word: "തിങ്കൾ",
        pronunciation: "Tiṅkaḷ",
        meaning: "Traditional moon word; also Monday."
      },
      {
        word: "ശശി",
        pronunciation: "Shashi",
        meaning: "Classical poetic moon name."
      }
    ],

    culturalNote:
      "The moon is deeply loved in Malayalam culture. The affectionate word Ambili appears in lullabies, children's stories, and poetry.",

    moonSong: {
      title: "ഓമനത്തിങ്കൾ കിടാവോ",
      artist: "Irayimman Thampi",
      youtube: createYouTubeSearch(
        "Omanathinkal Kidavo",
        "Irayimman Thampi"
      )
    }
  },

  {
    id: "cherokee",
    language: "Cherokee (ᏣᎳᎩ / Tsalagi)",
    region: "Cherokee communities in the United States",

    everydayWord: "ᎤᏃᏴᏫ",
    pronunciation: "Unoyvwi",
    meaning: "Moon",

    alternateWords: [
      {
        word: "ᎤᏃᏴᏫ",
        pronunciation: "Unoyvwi",
        meaning: "Moon."
      }
    ],

    culturalNote:
      "The moon is connected with cycles of time, seasons, ceremonies, and the relationship between people and the natural world in Cherokee traditions.",

    moonSong: {
      title: "",
      artist: ""
    }
  },

  {
    id: "sanskrit",
    language: "Sanskrit",
    region: "Ancient India",

    everydayWord: "चन्द्र",
    pronunciation: "Candra",
    meaning: "Moon",

    alternateWords: [
      {
        word: "चन्द्रमा",
        pronunciation: "Candramā",
        meaning: "Classical form of moon."
      },
      {
        word: "सोम",
        pronunciation: "Soma",
        meaning: "Moon deity and sacred lunar name."
      },
      {
        word: "इन्दु",
        pronunciation: "Indu",
        meaning: "Poetic name for the moon."
      },
      {
        word: "शशाङ्क",
        pronunciation: "Śaśāṅka",
        meaning: "Hare-marked one; classical poetic name."
      }
    ],

    culturalNote:
      "The moon in Sanskrit literature is associated with beauty, calmness, time, and divinity. Chandra and Soma appear throughout Hindu texts, poetry, and astronomy.",

    moonSong: {
      title: "",
      artist: ""
    }
  }
];
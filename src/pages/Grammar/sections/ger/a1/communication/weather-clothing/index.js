import WC_Intro from "./Intro";
import WC_WeatherBasics from "./WeatherBasics";
import WC_ClothingBasics from "./ClothingBasics";
import WC_OutfitsPhrases from "./OutfitsPhrases";
import WC_ShoppingSizes from "./ShoppingSizes";
import WC_Quiz from "./Quiz";

const weatherClothing = {
  slug: "weather-clothing",
  title: "Wetter & Kleidung",
  tr: "Hava & Kıyafet",
  group: "Kommunikation",
  subsections: [
    { slug: "intro", tr: "Giriş", title: "Einleitung", Component: WC_Intro },
    {
      slug: "weather-basics",
      tr: "Hava – temel",
      title: "Wetter – Basis",
      Component: WC_WeatherBasics,
    },
    {
      slug: "clothing-basics",
      tr: "Kıyafet – temel",
      title: "Kleidung – Basis",
      Component: WC_ClothingBasics,
    },
    {
      slug: "outfits-phrases",
      tr: "Kombin & kalıplar",
      title: "Outfits & Redemittel",
      Component: WC_OutfitsPhrases,
    },
    {
      slug: "shopping-sizes",
      tr: "Alışveriş & beden",
      title: "Einkaufen & Größen",
      Component: WC_ShoppingSizes,
    },
  ],
  QuizComponent: WC_Quiz,
};

export default weatherClothing;

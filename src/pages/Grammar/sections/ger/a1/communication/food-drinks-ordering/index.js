import FDO_Intro from "./Intro";
import FDO_MenuBasics from "./MenuBasics";
import FDO_PreferencesAllergies from "./PreferencesAllergies";
import FDO_EatDrinkPhrases from "./EatDrinkPhrases";
import FDO_PayingTableTalk from "./PayingTableTalk";
import FDO_Quiz from "./Quiz";

const foodDrinksOrdering = {
  slug: "food-drinks-ordering",
  title: "Essen, Trinken & Bestellen",
  tr: "Yeme-İçme & Sipariş",
  group: "Kommunikation",
  subsections: [
    { slug: "intro", tr: "Giriş", title: "Einleitung", Component: FDO_Intro },
    {
      slug: "menu-basics",
      tr: "Menü & sipariş",
      title: "Speisekarte & Bestellen",
      Component: FDO_MenuBasics,
    },
    {
      slug: "preferences-allergies",
      tr: "Tercih & alerji",
      title: "Wünsche & Allergien",
      Component: FDO_PreferencesAllergies,
    },
    {
      slug: "eat-drink-phrases",
      tr: "Yeme-içme kalıpları",
      title: "Redemittel: Essen/Trinken",
      Component: FDO_EatDrinkPhrases,
    },
    {
      slug: "paying-table-talk",
      tr: "Hesap & masa sohbeti",
      title: "Zahlen & am Tisch",
      Component: FDO_PayingTableTalk,
    },
  ],
  QuizComponent: FDO_Quiz,
};

export default foodDrinksOrdering;

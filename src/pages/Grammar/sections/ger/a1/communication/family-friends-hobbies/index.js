import FFH_Intro from "./Intro";
import FFH_Family from "./Family";
import FFH_Friends from "./Friends";
import FFH_Hobbies from "./Hobbies";
import FFH_Quiz from "./Quiz";

const familyFriendsHobbies = {
  slug: "family-friends-hobbies",
  title: "Familie, Freunde & Hobbys",
  tr: "Aile, Arkadaşlar & Hobiler",
  group: "Kommunikation",
  subsections: [
    { slug: "intro", tr: "Giriş", title: "Einleitung", Component: FFH_Intro },
    {
      slug: "family",
      tr: "Aile sözlüğü",
      title: "Familie",
      Component: FFH_Family,
    },
    {
      slug: "friends",
      tr: "Arkadaşlar",
      title: "Freunde",
      Component: FFH_Friends,
    },
    { slug: "hobbies", tr: "Hobiler", title: "Hobbys", Component: FFH_Hobbies },
  ],
  QuizComponent: FFH_Quiz,
};

export default familyFriendsHobbies;

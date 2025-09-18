import GI_Intro from "./Intro";
import GI_Pronunciation from "./Pronunciation";
import GI_Quiz from "./Quiz";

const greetingsIntroductions = {
  slug: "greetings-introductions",
  title: "Begrüßung & Vorstellung",
  tr: "Selamlaşma & Tanışma",
  group: "Kommunikation",
  subsections: [
    { slug: "intro", tr: "Giriş", title: "Einleitung", Component: GI_Intro },
    {
      slug: "pronunciation",
      tr: "Telaffuz",
      title: "Aussprache",
      Component: GI_Pronunciation,
    },
  ],
  QuizComponent: GI_Quiz,
};

export default greetingsIntroductions;

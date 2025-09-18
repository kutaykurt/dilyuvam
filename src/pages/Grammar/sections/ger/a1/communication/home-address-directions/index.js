import HAD_Intro from "./Intro";
import HAD_Address from "./Address";
import HAD_Directions from "./Directions";
import HAD_Quiz from "./Quiz";

const homeAddressDirections = {
  slug: "home-address-directions",
  title: "Wohnen, Adresse & Wegbeschreibung",
  tr: "Ev, Adres & Yol Tarifi",
  group: "Kommunikation",
  subsections: [
    { slug: "intro", tr: "Giriş", title: "Einleitung", Component: HAD_Intro },
    { slug: "address", tr: "Adres", title: "Adresse", Component: HAD_Address },
    {
      slug: "directions",
      tr: "Yol tarifi",
      title: "Wegbeschreibung",
      Component: HAD_Directions,
    },
  ],
  QuizComponent: HAD_Quiz,
};

export default homeAddressDirections;

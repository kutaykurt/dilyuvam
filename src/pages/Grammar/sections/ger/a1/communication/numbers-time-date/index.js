import NTD_Intro from "./Intro";
import NTD_Numbers from "./Numbers";
import NTD_Time from "./Time";
import NTD_Date from "./Date";
import NTD_Quiz from "./Quiz";

const numbersTimeDate = {
  slug: "numbers-time-date",
  title: "Zahlen, Uhrzeit & Datum",
  tr: "Sayılar, Saat & Tarih",
  group: "Kommunikation",
  subsections: [
    { slug: "intro", tr: "Giriş", title: "Einleitung", Component: NTD_Intro },
    { slug: "numbers", tr: "Sayılar", title: "Zahlen", Component: NTD_Numbers },
    { slug: "time", tr: "Saat", title: "Uhrzeit", Component: NTD_Time },
    { slug: "date", tr: "Tarih", title: "Datum", Component: NTD_Date },
  ],
  QuizComponent: NTD_Quiz,
};

export default numbersTimeDate;

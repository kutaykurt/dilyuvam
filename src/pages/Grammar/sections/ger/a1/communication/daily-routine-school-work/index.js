import DR_Intro from "./Intro";
import DR_MorningEvening from "./MorningEvening";
import DR_SchoolWorkVerbs from "./SchoolWorkVerbs";
import DR_TimeFrequency from "./TimeFrequency";
import DR_SmallTalkRoutine from "./SmallTalkRoutine";
import DR_Quiz from "./Quiz";

const dailyRoutineSchoolWork = {
  slug: "daily-routine-school-work",
  title: "Alltag: Schule & Arbeit",
  tr: "Günlük Rutin: Okul & İş",
  group: "Kommunikation",
  subsections: [
    { slug: "intro", tr: "Giriş", title: "Einleitung", Component: DR_Intro },
    {
      slug: "morning-evening",
      tr: "Sabah–akşam",
      title: "Morgen–Abend-Routine",
      Component: DR_MorningEvening,
    },
    {
      slug: "school-work-verbs",
      tr: "Okul/iş fiilleri",
      title: "Schule/Arbeit – Verben",
      Component: DR_SchoolWorkVerbs,
    },
    {
      slug: "time-frequency",
      tr: "Saat & sıklık",
      title: "Uhrzeit & Häufigkeit",
      Component: DR_TimeFrequency,
    },
    {
      slug: "smalltalk-routine",
      tr: "Sohbet",
      title: "Small Talk über Alltag",
      Component: DR_SmallTalkRoutine,
    },
  ],
  QuizComponent: DR_Quiz,
};

export default dailyRoutineSchoolWork;

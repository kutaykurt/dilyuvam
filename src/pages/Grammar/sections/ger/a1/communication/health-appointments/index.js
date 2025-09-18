import HA_Intro from "./Intro";
import HA_Symptoms from "./Symptoms";
import HA_MakeAppointment from "./MakeAppointment";
import HA_AtDoctor from "./AtDoctor";
import HA_RescheduleSickNote from "./RescheduleSickNote";
import HA_Quiz from "./Quiz";

const healthAppointments = {
  slug: "health-appointments",
  title: "Gesundheit & Termine",
  tr: "Sağlık & Randevular",
  group: "Kommunikation",
  subsections: [
    { slug: "intro", tr: "Giriş", title: "Einleitung", Component: HA_Intro },
    {
      slug: "symptoms",
      tr: "Belirtiler",
      title: "Symptome sagen",
      Component: HA_Symptoms,
    },
    {
      slug: "make-appointment",
      tr: "Randevu alma",
      title: "Termin vereinbaren",
      Component: HA_MakeAppointment,
    },
    {
      slug: "at-doctor-pharmacy",
      tr: "Doktor/Eczane",
      title: "Beim Arzt/Apotheke",
      Component: HA_AtDoctor,
    },
    {
      slug: "reschedule-sicknote",
      tr: "Erteleme/rapor",
      title: "Verschieben & Attest",
      Component: HA_RescheduleSickNote,
    },
  ],
  QuizComponent: HA_Quiz,
};

export default healthAppointments;

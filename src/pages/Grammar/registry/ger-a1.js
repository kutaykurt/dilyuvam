// src/pages/Grammar/registry/ger-a1.js
import React from "react";

/* ============================
   Kommunikation – vorhandene Themen
   Pfad: ../sections/ger/a1/communication/...
   ============================ */

/* --- Greetings & Introductions --- */
import GI_Intro from "../sections/ger/a1/communication/greetings-introductions/Intro";
import GI_Pronunciation from "../sections/ger/a1/communication/greetings-introductions/Pronunciation";
import GI_Quiz from "../sections/ger/a1/communication/greetings-introductions/Quiz";

/* --- Numbers · Time · Date --- */
import NTD_Intro from "../sections/ger/a1/communication/numbers-time-date/Intro";
import NTD_Numbers from "../sections/ger/a1/communication/numbers-time-date/Numbers";
import NTD_Time from "../sections/ger/a1/communication/numbers-time-date/Time";
import NTD_Date from "../sections/ger/a1/communication/numbers-time-date/Date";
import NTD_Quiz from "../sections/ger/a1/communication/numbers-time-date/Quiz";

/* --- Home · Address · Directions --- */
import HAD_Intro from "../sections/ger/a1/communication/home-address-directions/Intro";
import HAD_Address from "../sections/ger/a1/communication/home-address-directions/Address";
import HAD_Directions from "../sections/ger/a1/communication/home-address-directions/Directions";
import HAD_Quiz from "../sections/ger/a1/communication/home-address-directions/Quiz";

/* --- Family · Friends · Hobbies --- */
import FFH_Intro from "../sections/ger/a1/communication/family-friends-hobbies/Intro";
import FFH_Family from "../sections/ger/a1/communication/family-friends-hobbies/Family";
import FFH_Friends from "../sections/ger/a1/communication/family-friends-hobbies/Friends";
import FFH_Hobbies from "../sections/ger/a1/communication/family-friends-hobbies/Hobbies";
import FFH_Quiz from "../sections/ger/a1/communication/family-friends-hobbies/Quiz";

/* --- Shopping & Prices --- */
import SP_Intro from "../sections/ger/a1/communication/shopping-prices/Intro";
import SP_AskingPrice from "../sections/ger/a1/communication/shopping-prices/AskingPrice";
import SP_QuantitiesSizes from "../sections/ger/a1/communication/shopping-prices/QuantitiesSizes";
import SP_ComparisonsDiscounts from "../sections/ger/a1/communication/shopping-prices/ComparisonsDiscounts";
import SP_PaymentCheckout from "../sections/ger/a1/communication/shopping-prices/PaymentCheckout";
import SP_Quiz from "../sections/ger/a1/communication/shopping-prices/Quiz";

/* --- Food · Drinks · Ordering --- */
import FDO_Intro from "../sections/ger/a1/communication/food-drinks-ordering/Intro";
import FDO_EatDrinkPhrases from "../sections/ger/a1/communication/food-drinks-ordering/EatDrinkPhrases";
import FDO_MenuBasics from "../sections/ger/a1/communication/food-drinks-ordering/MenuBasics";
import FDO_PreferencesAllergies from "../sections/ger/a1/communication/food-drinks-ordering/PreferencesAllergies";
import FDO_PayingTableTalk from "../sections/ger/a1/communication/food-drinks-ordering/PayingTableTalk";
import FDO_Quiz from "../sections/ger/a1/communication/food-drinks-ordering/Quiz";

/* --- Health & Appointments --- */
import HA_Intro from "../sections/ger/a1/communication/health-appointments/Intro";
import HA_Symptoms from "../sections/ger/a1/communication/health-appointments/Symptoms";
import HA_MakeAppointment from "../sections/ger/a1/communication/health-appointments/MakeAppointment";
import HA_AtDoctor from "../sections/ger/a1/communication/health-appointments/AtDoctor";
import HA_RescheduleSickNote from "../sections/ger/a1/communication/health-appointments/RescheduleSickNote";
import HA_Quiz from "../sections/ger/a1/communication/health-appointments/Quiz";

/* --- Daily Routine · School · Work --- */
import DRSW_Intro from "../sections/ger/a1/communication/daily-routine-school-work/Intro";
import DRSW_MorningEvening from "../sections/ger/a1/communication/daily-routine-school-work/MorningEvening";
import DRSW_SchoolWorkVerbs from "../sections/ger/a1/communication/daily-routine-school-work/SchoolWorkVerbs";
import DRSW_SmallTalkRoutine from "../sections/ger/a1/communication/daily-routine-school-work/SmallTalkRoutine";
import DRSW_TimeFrequency from "../sections/ger/a1/communication/daily-routine-school-work/TimeFrequency";
import DRSW_Quiz from "../sections/ger/a1/communication/daily-routine-school-work/Quiz";

/* --- Weather · Clothing --- */
import WC_Intro from "../sections/ger/a1/communication/weather-clothing/Intro";
import WC_WeatherBasics from "../sections/ger/a1/communication/weather-clothing/WeatherBasics";
import WC_ClothingBasics from "../sections/ger/a1/communication/weather-clothing/ClothingBasics";
import WC_OutfitsPhrases from "../sections/ger/a1/communication/weather-clothing/OutfitsPhrases";
import WC_ShoppingSizes from "../sections/ger/a1/communication/weather-clothing/ShoppingSizes";
import WC_Quiz from "../sections/ger/a1/communication/weather-clothing/Quiz";

/* --- City · Transport --- */
import CT_Intro from "../sections/ger/a1/communication/city-transport/Intro";
import CT_TransportBasics from "../sections/ger/a1/communication/city-transport/TransportBasics";
import CT_Tickets from "../sections/ger/a1/communication/city-transport/Tickets";
import CT_Directions from "../sections/ger/a1/communication/city-transport/Directions";
import CT_OnboardVerbs from "../sections/ger/a1/communication/city-transport/OnboardVerbs";
import CT_SchedulesDelays from "../sections/ger/a1/communication/city-transport/SchedulesDelays";
import CT_Quiz from "../sections/ger/a1/communication/city-transport/Quiz";

/* --- Digital · Communication --- */
import DC_Intro from "../sections/ger/a1/communication/digital-communication/Intro";
import DC_MessagingChat from "../sections/ger/a1/communication/digital-communication/MessagingChat";
import DC_EmailBasics from "../sections/ger/a1/communication/digital-communication/EmailBasics";
import DC_FormsAccounts from "../sections/ger/a1/communication/digital-communication/FormsAccounts";
import DC_CallsVideo from "../sections/ger/a1/communication/digital-communication/CallsVideo";
import DC_NetiquetteSafety from "../sections/ger/a1/communication/digital-communication/NetiquetteSafety";
import DC_Quiz from "../sections/ger/a1/communication/digital-communication/Quiz";

/* =============================================================================
   Registry (nur vorhandene Seiten)
   ============================================================================= */
const ger_a1 = {
  id: "ger-a1",
  title: "Deutsch A1",
  sections: [
    /* -------- Kommunikation -------- */
    {
      slug: "greetings-introductions",
      title: "Begrüßen & sich vorstellen",
      tr: "Selamlaşma ve kendini tanıtma",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Einleitung",
          Component: GI_Intro,
        },
        {
          slug: "pronunciation",
          title: "Aussprache",
          tr: "Aussprache",
          Component: GI_Pronunciation,
        },
      ],
      QuizComponent: GI_Quiz,
    },
    {
      slug: "numbers-time-and-date",
      title: "Zahlen, Uhrzeit, Datum",
      tr: "Sayılar, saat, tarih",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Einleitung",
          Component: NTD_Intro,
        },
        {
          slug: "numbers",
          title: "Zahlen",
          tr: "Sayılar",
          Component: NTD_Numbers,
        },
        { slug: "time", title: "Uhrzeit", tr: "Saat", Component: NTD_Time },
        { slug: "date", title: "Datum", tr: "Tarih", Component: NTD_Date },
      ],
      QuizComponent: NTD_Quiz,
    },
    {
      slug: "home-address-directions",
      title: "Wohnort, Adresse & Wegbeschreibung",
      tr: "Ev, adres ve yol tarifleri",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Einleitung",
          Component: HAD_Intro,
        },
        {
          slug: "address",
          title: "Adresse & Wohnort",
          tr: "Adres & ikamet",
          Component: HAD_Address,
        },
        {
          slug: "directions",
          title: "Wegbeschreibung",
          tr: "Yol tarifi",
          Component: HAD_Directions,
        },
      ],
      QuizComponent: HAD_Quiz,
    },
    {
      slug: "family-friends-hobbies",
      title: "Familie, Freunde & Hobbys",
      tr: "Aile, arkadaşlar, hobiler",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Einleitung",
          Component: FFH_Intro,
        },
        { slug: "family", title: "Familie", tr: "Aile", Component: FFH_Family },
        {
          slug: "friends",
          title: "Freunde",
          tr: "Arkadaşlar",
          Component: FFH_Friends,
        },
        {
          slug: "hobbies",
          title: "Hobbys",
          tr: "Hobiler",
          Component: FFH_Hobbies,
        },
      ],
      QuizComponent: FFH_Quiz,
    },
    {
      slug: "shopping-and-prices",
      title: "Einkaufen & Preise",
      tr: "Alışveriş ve fiyatlar",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Einleitung",
          Component: SP_Intro,
        },
        {
          slug: "asking-price",
          title: "Preise erfragen",
          tr: "Fiyat sorma",
          Component: SP_AskingPrice,
        },
        {
          slug: "quantities-sizes",
          title: "Mengen & Größen",
          tr: "Miktarlar & bedenler",
          Component: SP_QuantitiesSizes,
        },
        {
          slug: "comparisons-discounts",
          title: "Vergleich & Rabatt",
          tr: "Karşılaştırma & indirim",
          Component: SP_ComparisonsDiscounts,
        },
        {
          slug: "payment-checkout",
          title: "Bezahlen & Kasse",
          tr: "Ödeme & kasa",
          Component: SP_PaymentCheckout,
        },
      ],
      QuizComponent: SP_Quiz,
    },
    {
      slug: "food-drinks-ordering",
      title: "Essen & Trinken – Bestellen",
      tr: "Yiyecek-içecek ve sipariş",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Einleitung",
          Component: FDO_Intro,
        },
        {
          slug: "eat-drink-phrases",
          title: "Bestell-Phrasen",
          tr: "Sipariş kalıpları",
          Component: FDO_EatDrinkPhrases,
        },
        {
          slug: "menu-basics",
          title: "Speisekarte – Basics",
          tr: "Menü temelleri",
          Component: FDO_MenuBasics,
        },
        {
          slug: "preferences-allergies",
          title: "Vorlieben & Allergien",
          tr: "Tercihler & alerjiler",
          Component: FDO_PreferencesAllergies,
        },
        {
          slug: "paying-table-talk",
          title: "Bezahlen & Tischrede",
          tr: "Ödeme & masada konuşma",
          Component: FDO_PayingTableTalk,
        },
      ],
      QuizComponent: FDO_Quiz,
    },
    {
      slug: "health-and-appointments",
      title: "Gesundheit & Termin",
      tr: "Sağlık ve randevular",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Einleitung",
          Component: HA_Intro,
        },
        {
          slug: "symptoms",
          title: "Symptome",
          tr: "Belirtiler",
          Component: HA_Symptoms,
        },
        {
          slug: "make-appointment",
          title: "Termin machen",
          tr: "Randevu alma",
          Component: HA_MakeAppointment,
        },
        {
          slug: "at-doctor",
          title: "Beim Arzt",
          tr: "Doktorda",
          Component: HA_AtDoctor,
        },
        {
          slug: "reschedule-sick-note",
          title: "Verschieben/Krankmeldung",
          tr: "Erteleme/rapor",
          Component: HA_RescheduleSickNote,
        },
      ],
      QuizComponent: HA_Quiz,
    },
    {
      slug: "daily-routine-school-work",
      title: "Alltag, Schule & Arbeit",
      tr: "Günlük rutin, okul ve iş",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Einleitung",
          Component: DRSW_Intro,
        },
        {
          slug: "morning-evening",
          title: "Morgen–Abend",
          tr: "Sabah–akşam",
          Component: DRSW_MorningEvening,
        },
        {
          slug: "school-work-verbs",
          title: "Schule/Arbeit – Verben",
          tr: "Okul/İş fiilleri",
          Component: DRSW_SchoolWorkVerbs,
        },
        {
          slug: "time-frequency",
          title: "Zeit & Häufigkeit",
          tr: "Zaman & sıklık",
          Component: DRSW_TimeFrequency,
        },
        {
          slug: "smalltalk-routine",
          title: "Small Talk & Routine",
          tr: "Kısa sohbet & rutin",
          Component: DRSW_SmallTalkRoutine,
        },
      ],
      QuizComponent: DRSW_Quiz,
    },
    {
      slug: "weather-clothing",
      title: "Wetter & Kleidung",
      tr: "Hava & Kıyafet",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Einleitung",
          Component: WC_Intro,
        },
        {
          slug: "weather-basics",
          title: "Wetter – Basis",
          tr: "Hava – temel",
          Component: WC_WeatherBasics,
        },
        {
          slug: "clothing-basics",
          title: "Kleidung – Basis",
          tr: "Kıyafet – temel",
          Component: WC_ClothingBasics,
        },
        {
          slug: "outfits-phrases",
          title: "Outfits & Redemittel",
          tr: "Kombin & kalıplar",
          Component: WC_OutfitsPhrases,
        },
        {
          slug: "shopping-sizes",
          title: "Einkaufen & Größen",
          tr: "Alışveriş & beden",
          Component: WC_ShoppingSizes,
        },
      ],
      QuizComponent: WC_Quiz,
    },
    {
      slug: "city-transport",
      title: "Stadt & Verkehrsmittel",
      tr: "Şehir içi ulaşım",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Giriş",
          Component: CT_Intro,
        },
        {
          slug: "transport-basics",
          title: "Verkehr – Basics",
          tr: "Araç & hedef – temel",
          Component: CT_TransportBasics,
        },
        {
          slug: "tickets",
          title: "Tickets & Kaufen",
          tr: "Bilet & kalıplar",
          Component: CT_Tickets,
        },
        {
          slug: "directions",
          title: "Linien & Wege",
          tr: "Hatlar & yol tarifi",
          Component: CT_Directions,
        },
        {
          slug: "onboard-verbs",
          title: "Ein-/Aus-/Umsteigen",
          tr: "Binmek–inmek–aktarma",
          Component: CT_OnboardVerbs,
        },
        {
          slug: "schedules-delays",
          title: "Zeiten & Verspätung",
          tr: "Saatler & gecikme",
          Component: CT_SchedulesDelays,
        },
      ],
      QuizComponent: CT_Quiz,
    },
    {
      slug: "digital-communication",
      title: "Digitale Kommunikation",
      tr: "Dijital iletişim",
      group: "Kommunikation",
      subsections: [
        {
          slug: "intro",
          title: "Einleitung",
          tr: "Giriş",
          Component: DC_Intro,
        },
        {
          slug: "messaging-chat",
          title: "Nachrichten & Chat",
          tr: "Mesajlaşma",
          Component: DC_MessagingChat,
        },
        {
          slug: "email-basics",
          title: "E-Mail – Basics",
          tr: "E-posta temelleri",
          Component: DC_EmailBasics,
        },
        {
          slug: "forms-accounts",
          title: "Formulare & Konten",
          tr: "Formlar & hesap",
          Component: DC_FormsAccounts,
        },
        {
          slug: "calls-video",
          title: "Telefon & Video",
          tr: "Telefon & video",
          Component: DC_CallsVideo,
        },
        {
          slug: "netiquette-safety",
          title: "Netiquette & Sicherheit",
          tr: "Netik & güvenlik",
          Component: DC_NetiquetteSafety,
        },
      ],
      QuizComponent: DC_Quiz,
    },
  ],
};

export default ger_a1;

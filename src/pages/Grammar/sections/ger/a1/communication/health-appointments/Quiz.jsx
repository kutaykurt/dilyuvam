import React from "react";
import { ExerciseFill, ExerciseMC } from "../../../../../blocks";

export default function HealthAppointments_Quiz() {
  return (
    <div className="ffh-quiz" data-topic="health-appointments">
      <ExerciseMC
        title="Hızlı kontrol – Gesundheit & Termine"
        items={[
          {
            q: "Belirtiyi doğru söyleyen hangisi?",
            choices: [
              "Ich bin Kopfschmerzen.",
              "Ich habe Kopfschmerzen.",
              "Ich habe ein Kopfweh ist.",
            ],
            correctIndex: 1,
            explain: "Doğrusu: ‘Ich habe Kopfschmerzen.’",
          },
          {
            q: "Kibar randevu cümlesi?",
            choices: [
              "Ich will einen Termin.",
              "Ich hätte gern einen Termin.",
              "Gib mir einen Termin.",
            ],
            correctIndex: 1,
            explain: "Kibar form: ‘Ich hätte gern …’",
          },
          {
            q: "Eczanede doğru soru?",
            choices: [
              "Ist das Rezept?",
              "Ist das rezeptfrei?",
              "Ist das rezeptlos?",
            ],
            correctIndex: 1,
            explain: "Reçetesiz mi? = ‘Ist das rezeptfrei?’",
          },
        ]}
      />

      <ExerciseFill
        title="Boşluk doldur – Kalıp pratiği"
        items={[
          {
            id: "h1",
            before: "Mir ist ___ . (kötü)",
            after: "",
            answers: ["schlecht"],
            hint: "his durumu",
          },
          {
            id: "h2",
            before: "Geht es ___ Montag um 10 Uhr?",
            after: "",
            answers: ["am"],
            hint: "gün edatı",
          },
          {
            id: "h3",
            before: "Ich brauche ___ Rezept.",
            after: "",
            answers: ["ein"],
            hint: "Artikel",
          },
          {
            id: "h4",
            before: "Ich muss den Termin ___. (ertelemek)",
            after: "",
            answers: ["verschieben"],
            hint: "fiil",
          },
        ]}
      />
    </div>
  );
}

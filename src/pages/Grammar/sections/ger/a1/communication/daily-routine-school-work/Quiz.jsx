import React from "react";
import { ExerciseFill, ExerciseMC } from "../../../../../blocks";

export default function DailyRoutineSchoolWork_Quiz() {
  return (
    <div className="ffh-quiz" data-topic="daily-routine-school-work">
      <ExerciseMC
        title="Hızlı kontrol – Alltag: Schule & Arbeit"
        items={[
          {
            q: "Doğru cümle hangisi?",
            choices: [
              "Am Morgen ich frühstücke.",
              "Am Morgen frühstücke ich.",
              "Ich am Morgen frühstücke.",
            ],
            correctIndex: 1,
            explain: "Zaman başta → fiil 2. sırada: ‘… frühstücke ich.’",
          },
          {
            q: "Hangi cümle ayrılabilir fiil içerir?",
            choices: [
              "Ich arbeite im Büro.",
              "Ich stehe um 7 Uhr auf.",
              "Ich lerne Deutsch.",
            ],
            correctIndex: 1,
            explain: "aufstehen → Ich stehe … auf.",
          },
          {
            q: "‘von ... bis ...’ örneği?",
            choices: [
              "Ich lerne gegen 10 Uhr.",
              "Ich lerne von 9 bis 11 Uhr.",
              "Ich lerne am 9 Uhr.",
            ],
            correctIndex: 1,
            explain: "Zaman aralığı: von 9 bis 11 Uhr.",
          },
        ]}
      />

      <ExerciseFill
        title="Boşluk doldur – Kalıp pratiği"
        items={[
          {
            id: "r1",
            before: "Ich ___ um 7 Uhr auf.",
            after: "",
            answers: ["stehe"],
            hint: "aufstehen",
          },
          {
            id: "r2",
            before: "___ Montag habe ich frei.",
            after: "",
            answers: ["Am"],
            hint: "gün edatı",
          },
          {
            id: "r3",
            before: "Ich arbeite ___ 9 ___ 17 Uhr.",
            after: "",
            answers: ["von", "bis"],
            hint: "aralık",
          },
          {
            id: "r4",
            before: "Ich mache ___ Pause um 12 Uhr.",
            after: "",
            answers: ["eine"],
            hint: "Artikel",
          },
        ]}
      />
    </div>
  );
}

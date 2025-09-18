import React from "react";
import { ExerciseFill, ExerciseMC } from "../../../../../blocks";

export default function FoodDrinksOrdering_Quiz() {
  return (
    <div className="ffh-quiz" data-topic="food-drinks-ordering">
      <ExerciseMC
        title="Hızlı kontrol – Essen/Trinken"
        items={[
          {
            q: "Kibar sipariş hangisi?",
            choices: [
              "Ich will einen Kaffee.",
              "Ich hätte gern einen Kaffee.",
              "Gib mir einen Kaffee.",
            ],
            correctIndex: 1,
            explain: "Kibar form: ‘Ich hätte gern …’ / ‘Ich möchte …’.",
          },
          {
            q: "Paket demek için?",
            choices: ["Zum Hieressen", "Zum Mitnehmen", "Zum Bezahlen"],
            correctIndex: 1,
            explain: "Paket = ‘Zum Mitnehmen’.",
          },
          {
            q: "Hangi cümle doğru?",
            choices: [
              "Die Rechnung, bitte.",
              "Rechnung die, bitte.",
              "Bitte Rechnung die.",
            ],
            correctIndex: 0,
            explain: "Doğru kalıp: ‘Die Rechnung, bitte.’",
          },
        ]}
      />

      <ExerciseFill
        title="Boşluk doldur – Kalıp pratiği"
        items={[
          {
            id: "f1",
            before: "___ hätte gern eine Suppe.",
            after: "",
            answers: ["Ich"],
            hint: "Özne",
          },
          {
            id: "f2",
            before: "___ Mitnehmen oder zum Hieressen?",
            after: "",
            answers: ["Zum"],
            hint: "Paket mi?",
          },
          {
            id: "f3",
            before: "Ohne ___, bitte. (Zwiebel)",
            after: "",
            answers: ["Zwiebeln"],
            hint: "çoğul",
          },
          {
            id: "f4",
            before: "Zusammen oder ___?",
            after: "",
            answers: ["getrennt"],
            hint: "Ayrı",
          },
        ]}
      />
    </div>
  );
}

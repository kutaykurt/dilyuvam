import React from "react";
import { ExerciseFill, ExerciseMC } from "../../../../../blocks";

export default function ShoppingPrices_Quiz() {
  return (
    <div className="ffh-quiz" data-topic="shopping-prices">
      <ExerciseMC
        title="Hızlı kontrol – Shopping & Preise"
        items={[
          {
            q: "Hangisi doğru?",
            choices: [
              "Wie viel kostet es?",
              "Wie viele kostet es?",
              "Wie kostet es?",
            ],
            correctIndex: 0,
            explain: "Fiyat sorma: ‘Wie viel kostet …?’",
          },
          {
            q: "Toplamı söyleyen kalıp?",
            choices: [
              "Es macht 10 Euro.",
              "Das macht 10 Euro.",
              "Ich mache 10 Euro.",
            ],
            correctIndex: 1,
            explain: "Kasada: ‘Das macht …’ kullanılır.",
          },
          {
            q: "Hangi cümle indirim sorar?",
            choices: [
              "Gibt es das günstiger?",
              "Ich möchte Größe M.",
              "Ich bezahle bar.",
            ],
            correctIndex: 0,
            explain: "‘Gibt es das günstiger?’ → Daha ucuza var mı?",
          },
        ]}
      />

      <ExerciseFill
        title="Boşluk doldur – Kalıp pratiği"
        items={[
          {
            id: "s1",
            before: "___ viel kostet das?",
            after: "",
            answers: ["Wie"],
            hint: "Soru sözcüğü",
          },
          {
            id: "s2",
            before: "Ich ___ mit Karte.",
            after: "",
            answers: ["zahle"],
            hint: "ödemek",
          },
          {
            id: "s3",
            before: "Das ___ 15 Euro.",
            after: "",
            answers: ["macht"],
            hint: "toplam",
          },
          {
            id: "s4",
            before: "Haben Sie das in ___ M?",
            after: "",
            answers: ["Größe"],
            hint: "beden",
          },
        ]}
      />
    </div>
  );
}

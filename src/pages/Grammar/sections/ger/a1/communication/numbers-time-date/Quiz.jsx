import React from "react";
import { ExerciseFill, ExerciseMC } from "../../../../../blocks";

export default function NumbersTimeDate_Quiz() {
  return (
    <div className="ntd-quiz" data-topic="numbers-time-date">
      <ExerciseMC
        title="Hızlı kontrol – Saat & Tarih"
        items={[
          {
            q: "‘halb neun’ hangi saattir?",
            choices: ["09:30", "08:30", "20:30"],
            correctIndex: 1,
            explain:
              "Almanca ‘halb’ sonraki saate yarım kala: halb neun = 08:30.",
          },
          {
            q: "Doğru ifade hangisi?",
            choices: ["am 8 Uhr", "um 8 Uhr", "im 8 Uhr"],
            correctIndex: 1,
            explain: "Saatler için ‘um’: um 8 Uhr.",
          },
          {
            q: "‘am 3. Mai’ ne demek?",
            choices: ["3 Mayıs’ta", "Mayıs’ın 3’ü boyunca", "Mayıs 3 saatinde"],
            correctIndex: 0,
            explain: "‘am’ gün/tarih içindir: 3 Mayıs’ta.",
          },
        ]}
      />

      <ExerciseFill
        title="Boşluk doldur – Sayılar & saat"
        items={[
          {
            id: "n1",
            before: "",
            after: "",
            answers: ["einunddreißig"],
            hint: "31 (yazıyla)",
          },
          {
            id: "n2",
            before: "Es ist ___ ___. (08:30)",
            after: "",
            answers: ["halb neun"],
            hint: "yarım",
          },
          {
            id: "n3",
            before: "",
            after: "",
            answers: ["am zwanzigsten Juni"],
            hint: "20 Haziran’da",
          },
          {
            id: "n4",
            before: "Der Kurs ist ___ 9 ___ 12 Uhr.",
            after: "",
            answers: ["von ... bis"],
            hint: "interval",
          },
          {
            id: "n5",
            before: "3,50 € = drei Euro ___",
            after: "",
            answers: ["fünfzig"],
            hint: "ondalık",
          },
        ]}
      />
    </div>
  );
}

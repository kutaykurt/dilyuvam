import React from "react";
import { ExerciseFill, ExerciseMC } from "../../../../../blocks";

export default function FamilyFriendsHobbies_Quiz() {
  return (
    <div className="ffh-quiz" data-topic="family-friends-hobbies">
      <ExerciseMC
        title="Hızlı kontrol – Aile & Arkadaş & Hobiler"
        items={[
          {
            q: "Doğru olan hangisi?",
            choices: ["meine Vater", "mein Vater", "mein(e) Vater"],
            correctIndex: 1,
            explain: "‘Vater’ eril → mein Vater. Dişiller için ‘meine’.",
          },
          {
            q: "Hangi cümle doğrudur?",
            choices: [
              "Ich gern lese Bücher.",
              "Ich lese gern Bücher.",
              "Gern ich lese Bücher.",
            ],
            correctIndex: 1,
            explain: "‘gern’ fiille kullanılır: Ich lese gern Bücher.",
          },
          {
            q: "‘Ich habe …’ kalıbı için doğru eşleşme?",
            choices: [
              "Ich habe eine Bruder.",
              "Ich habe einen Bruder.",
              "Ich habe ein Schwester.",
            ],
            correctIndex: 1,
            explain: "Eril Akkusativ: einen Bruder; dişil: eine Schwester.",
          },
          {
            q: "‘lieber’ ne ifade eder?",
            choices: ["eşitlik", "daha çok tercih", "en çok"],
            correctIndex: 1,
            explain: "lieber = ‘daha çok tercih’; am liebsten = ‘en çok’.",
          },
        ]}
      />

      <ExerciseFill
        title="Boşluk doldur – Kalıp pratiği"
        items={[
          {
            id: "f1",
            before: "Das ist ___ Mutter.",
            after: "",
            answers: ["meine"],
            hint: "dişil",
          },
          {
            id: "f2",
            before: "Ich ___ einen Bruder.",
            after: "",
            answers: ["habe"],
            hint: "sahiplik",
          },
          {
            id: "f3",
            before: "Ich spiele ___ Fußball.",
            after: "",
            answers: ["gern"],
            hint: "hoşlanma",
          },
          {
            id: "f4",
            before: "Ich koche ___ als backen.",
            after: "",
            answers: ["lieber"],
            hint: "tercih",
          },
          {
            id: "f5",
            before: "Er ist sehr ___. (freundlich/sportlich)",
            after: "",
            answers: ["freundlich"],
            hint: "sıfat",
          },
        ]}
      />
    </div>
  );
}

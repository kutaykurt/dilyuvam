import React from "react";
import { ExerciseFill, ExerciseMC } from "../../../../../blocks";

export default function HomeAddressDirections_Quiz() {
  return (
    <div className="had-quiz" data-topic="home-address-directions">
      <ExerciseMC
        title="Hızlı kontrol – Wohnort & Weg"
        items={[
          {
            q: "Doğru adres sırası hangisi?",
            choices: [
              "PLZ Ort, Straße Hausnummer",
              "Straße Hausnummer, PLZ Ort",
              "Ort PLZ, Hausnummer Straße",
            ],
            correctIndex: 1,
            explain: "Genel sıra: Straße + Hausnummer, sonra PLZ + Ort.",
          },
          {
            q: "‘Wie komme ich zur Post?’ → ‘… ____ geradeaus, dann links.’",
            choices: ["Gehen Sie", "Du gehst", "Fahren wir"],
            correctIndex: 0,
            explain: "Kibar-resmi yönerge: ‘Gehen Sie …’.",
          },
          {
            q: "Karşısında = ?",
            choices: ["neben", "gegenüber", "hinter"],
            correctIndex: 1,
            explain: "‘gegenüber’ bir yerin karşısında demektir.",
          },
          {
            q: "‘zur’ açılımı nedir?",
            choices: ["zu die", "zu der", "zu dem"],
            correctIndex: 1,
            explain: "zu + der → zur; zu + dem → zum.",
          },
        ]}
      />

      <ExerciseFill
        title="Boşluk doldur – Adres & yol"
        items={[
          {
            id: "a1",
            before: "Ich wohne ___ Berlin.",
            after: "",
            answers: ["in"],
            hint: "şehir",
          },
          {
            id: "a2",
            before: "Meine Adresse ist: Weserstraße 19, ___ Berlin.",
            after: "",
            answers: ["12045"],
            hint: "PLZ",
          },
          {
            id: "a3",
            before: "Gehen Sie ___, dann rechts.",
            after: "",
            answers: ["geradeaus"],
            hint: "yön",
          },
          {
            id: "a4",
            before: "Die Apotheke ist ___ der Bank.",
            after: "",
            answers: ["gegenüber"],
            hint: "konum",
          },
          {
            id: "a5",
            before: "Können Sie das ___?",
            after: "",
            answers: ["buchstabieren"],
            hint: "heceleme",
          },
        ]}
      />
    </div>
  );
}

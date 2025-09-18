import React from "react";
import Explain from "../../../../../../../components/Explain";
import { ExerciseFill, ExerciseMC, Callout } from "../../../../../blocks";

/**
 * Bu dosya: Genel tekrar.
 */
export default function Quiz() {
  return (
    <div className="ffh-sub ffh-sub--quiz" data-sub="quiz">
      <section className="ffh-section" data-toc-title="Quiz">
        <Explain
          title="Genel tekrar – Boşluk doldurma"
          lead="Araç + hedef + fiiller + saat dili"
        >
          <ExerciseFill
            items={[
              {
                id: "q1",
                before: "Ich fahre ",
                after: " Bus.",
                answers: ["mit dem"],
              },
              {
                id: "q2",
                before: "Wie komme ich ",
                after: " Bahnhof?",
                answers: ["zum"],
              },
              {
                id: "q3",
                before: "Ich steige ",
                after: " den Bus ein.",
                answers: ["in"],
              },
              {
                id: "q4",
                before: "Ich steige ",
                after: " der Haltestelle Markt aus.",
                answers: ["an"],
              },
              {
                id: "q5",
                before: "Die Bahn kommt ",
                after: " 10 Minuten.",
                answers: ["alle"],
              },
              {
                id: "q6",
                before: "Der Zug hat 5 Minuten ",
                after: ".",
                answers: ["Verspätung"],
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test – Karışık">
          <ExerciseMC
            items={[
              {
                q: "‘Berlin’e gidiyorum (şehir).’",
                choices: [
                  "Ich fahre zu Berlin.",
                  "Ich fahre nach Berlin.",
                  "Ich fahre in Berlin.",
                ],
                correctIndex: 1,
                explain: "nach + şehir/ülke.",
              },
              {
                q: "‘Durağa gidiyorum (nokta/yer).’",
                choices: [
                  "Ich gehe zur Haltestelle.",
                  "Ich gehe nach Haltestelle.",
                  "Ich gehe in die Haltestelle.",
                ],
                correctIndex: 0,
                explain: "zu + Dativ.",
              },
              {
                q: "Doğru trennbar fiil kullanımı:",
                choices: [
                  "Ich einsteige in den Bus.",
                  "Ich steige den Bus ein.",
                  "Ich steige in den Bus ein.",
                ],
                correctIndex: 2,
                explain: "önek sona, ‘in den Bus’ Akk.",
              },
              {
                q: "Doğru saat kalıbı:",
                choices: [
                  "Der Bus kommt am 8 Uhr.",
                  "Der Bus kommt um 8 Uhr.",
                  "Der Bus kommt in 8 Uhr.",
                ],
                correctIndex: 1,
                explain: "um + Uhrzeit.",
              },
            ]}
          />

          <Callout type="tip" title="Öğretmen özeti">
            <p>
              Ulaşımda akıcı olmak için üç taşı hatırla:{" "}
              <strong>mit + Dativ</strong>,<strong>nach/zu/in</strong> ayrımı ve{" "}
              <strong>ein-/aus-/umsteigen</strong> fiilleri. Hepsi tek kelimelik
              kalıplarla ilerler. Önce kısa ve doğal cümleleri ezberle; sonra
              ayrıntı kendi kendine oturur.
            </p>
          </Callout>
        </Explain>
      </section>
    </div>
  );
}

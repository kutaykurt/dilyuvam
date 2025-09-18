import React from "react";
import Explain from "../../../../../../../components/Explain";
import { ExerciseFill, ExerciseMC, Callout } from "../../../../../blocks";

export default function Quiz() {
  return (
    <div className="ffh-sub ffh-sub--quiz" data-sub="quiz">
      <section className="ffh-section" data-toc-title="Quiz">
        <Explain
          title="Genel tekrar – Gap-fill"
          lead="Hava + kıyafet + alışveriş birleşik tekrar"
        >
          <ExerciseFill
            items={[
              {
                id: "q1",
                before: "Heute ",
                after: " es windig.",
                answers: ["ist"],
              },
              {
                id: "q2",
                before: "Ich ",
                after: " eine Jacke an.",
                answers: ["ziehe"],
              },
              {
                id: "q3",
                before: "Die Schuhe ",
                after: " mir.",
                answers: ["passen"],
              },
              {
                id: "q4",
                before: "Haben Sie das in ",
                after: " M?",
                answers: ["Größe"],
              },
              {
                id: "q5",
                before: "Morgen ",
                after: " es wärmer.",
                answers: ["wird"],
              },
              {
                id: "q6",
                before: "",
                after: " ist es sonnig.",
                answers: ["In Berlin", "In Köln", "In München"],
                hint: "Yer + V2",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test – MC">
          <ExerciseMC
            items={[
              {
                q: "‘Hava güneşli’ hangisi?",
                choices: ["Es ist sonnig.", "Es ist bewölkt.", "Es schneit."],
                correctIndex: 0,
                explain: "sonnig = güneşli",
              },
              {
                q: "‘Ceketi çıkarıyorum’ hangisi?",
                choices: [
                  "Ich ziehe die Jacke an.",
                  "Ich ziehe die Jacke aus.",
                  "Ich trage die Jacke.",
                ],
                correctIndex: 1,
                explain: "ausziehen = çıkarmak",
              },
              {
                q: "Kibar mağaza kalıbı:",
                choices: [
                  "Ich will Größe L.",
                  "Ich hätte gern Größe L.",
                  "Gib mir L.",
                ],
                correctIndex: 1,
                explain: "Ich hätte gern …",
              },
              {
                q: "Duygu yapısı: ‘Bana sıcak basıyor.’",
                choices: ["Ich bin heiß.", "Mir ist heiß.", "Es ist mir heiß."],
                correctIndex: 1,
                explain: "Dativ: Mir ist heiß/kalt.",
              },
            ]}
          />

          <Callout type="tip" title="Özet">
            <p>
              Hava cümlelerinde <strong>es</strong>, giyimde{" "}
              <strong>Akkusativ</strong> ve mağazada{" "}
              <strong>kibar kalıplar</strong>— A1’in üç ana direği. İlk önce
              doğal kalıpları ezberle; ayrıntıyı yavaşça eklersin.
            </p>
          </Callout>
        </Explain>
      </section>
    </div>
  );
}

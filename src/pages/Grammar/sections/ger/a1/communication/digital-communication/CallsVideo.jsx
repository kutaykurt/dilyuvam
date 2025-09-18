import React from "react";
import Explain from "../../../../../../../components/Explain";
import {
  Key,
  Term,
  MiniTable,
  Formula,
  Examples,
  Callout,
  ExerciseFill,
  ExerciseMC,
} from "../../../../../blocks";

/**
 * Kapsam:
 * - Telefon/Video toplantı kalıpları (du & Sie)
 * - Bağlantı/teknik sorunları ifade etme
 * - anrufen / zurückrufen (trennbar) ve erreichbar
 */
export default function CallsVideo() {
  return (
    <div className="ffh-sub ffh-sub--calls" data-sub="calls-video">
      <section className="ffh-section" data-toc-title="Telefon & video">
        <Explain
          title="Arama ve dönüş yapma"
          lead="A1’de en sık: ‘Ararım / sonra ararım / ulaşamıyorum’."
        >
          <p>
            Aramak için <Term>anrufen</Term> fiili kullanılır ve ayrılabilirdir:
            <Key>Ich rufe später an.</Key> “Geri aramak”{" "}
            <Term>zurückrufen</Term>:<Key>Ich rufe Sie zurück.</Key>.
            “Ulaşılamıyor” için <Key>nicht erreichbar</Key>. Video toplantıda
            basit kal: <Key>Hören Sie mich?</Key>,{" "}
            <Key>Ich höre Sie nicht.</Key>,
            <Key>Die Verbindung ist schlecht.</Key> (Bağlantı kötü). Türkçede
            “kusura bakmayın” gibi uzatmalar normaldir; Almancada bir{" "}
            <Key>Entschuldigung, die Verbindung ist schlecht.</Key> yeter ve
            profesyoneldir.
          </p>

          <MiniTable
            head={["Almanca", "Türkçe", "Not"]}
            rows={[
              ["Ich rufe später an.", "Sonra ararım.", "trennbar"],
              ["Ich rufe Sie zurück.", "Sizi geri ararım.", "resmî"],
              ["Ich bin stummgeschaltet.", "Sessize alındım.", "Zoom/Meet"],
              ["Kamera funktioniert nicht.", "Kamera çalışmıyor.", "teknik"],
              [
                "Können Sie das bitte wiederholen?",
                "Tekrarlar mısınız lütfen?",
                "kibar rica",
              ],
            ]}
          />

          <Examples
            items={[
              { en: "Können Sie mich hören?", tr: "Beni duyabiliyor musunuz?" },
              {
                en: "Die Verbindung ist schlecht. Ich rufe später an.",
                tr: "Bağlantı kötü. Sonra ararım.",
              },
            ]}
          />
        </Explain>
      </section>

      <section className="ffh-section" data-toc-title="Pratik">
        <Explain title="Boşluk doldurma">
          <ExerciseFill
            items={[
              {
                id: "c1",
                before: "Ich ",
                after: " Sie zurück.",
                answers: ["rufe"],
                hint: "zurückrufen",
              },
              {
                id: "c2",
                before: "Die Verbindung ist ",
                after: ".",
                answers: ["schlecht"],
                hint: "bağlantı",
              },
              {
                id: "c3",
                before: " ",
                after: " Sie mich hören?",
                answers: ["Können"],
                hint: "kibar soru",
              },
              {
                id: "c4",
                before: "Ich bin ",
                after: " .",
                answers: ["stummgeschaltet", "stumm"],
                hint: "sessize alındım",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "‘Geri arayacağım.’",
                choices: [
                  "Ich rufe später an.",
                  "Ich rufe zurück.",
                  "Ich rufe Sie zurück.",
                ],
                correctIndex: 2,
                explain: "Sie (resmî) + zurückrufen.",
              },
              {
                q: "Teknik sorun: ‘Kamera çalışmıyor.’",
                choices: [
                  "Kamera läuft nicht.",
                  "Kamera funktioniert nicht.",
                  "Kamera macht nicht.",
                ],
                correctIndex: 1,
                explain: "funktionieren doğru fiil.",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

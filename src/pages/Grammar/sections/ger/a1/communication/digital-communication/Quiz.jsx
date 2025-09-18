import React from "react";
import Explain from "../../../../../../../components/Explain";
import { ExerciseFill, ExerciseMC, Callout } from "../../../../../blocks";

/**
 * Genel tekrar – DigitalCommunication
 */
export default function Quiz() {
  return (
    <div className="ffh-sub ffh-sub--quiz" data-sub="quiz">
      <section className="ffh-section" data-toc-title="Quiz">
        <Explain title="Boşluk doldurma">
          <ExerciseFill
            items={[
              {
                id: "q1",
                before: " ",
                after: " Herr Kaya,",
                answers: ["Guten Tag,", "Hallo"],
                hint: "hitap",
              },
              {
                id: "q2",
                before: "Können ",
                after: " mir den Link schicken?",
                answers: ["Sie"],
                hint: "Sie (resmî)",
              },
              {
                id: "q3",
                before: "Im ",
                after: " finden Sie die Datei.",
                answers: ["Anhang"],
                hint: "ek",
              },
              {
                id: "q4",
                before: "Ich ",
                after: " später an.",
                answers: ["rufe"],
                hint: "anrufen",
              },
              {
                id: "q5",
                before: "",
                after: " Grüße",
                answers: ["Viele", "Mit freundlichen"],
                hint: "kapanış",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "Resmî kapanış hangisi?",
                choices: ["LG", "VG", "MfG"],
                correctIndex: 2,
                explain: "Mit freundlichen Grüßen.",
              },
              {
                q: "‘Ulaşılamıyorum’ Almancası:",
                choices: [
                  "Ich bin nicht erreichbar.",
                  "Ich bin nicht zu Hause.",
                  "Ich bin nicht frei.",
                ],
                correctIndex: 0,
                explain: "erreichbar = ulaşılabilir.",
              },
              {
                q: "Doğru e-posta sırası:",
                choices: [
                  "Anrede → Betreff → Gruß",
                  "Betreff → Anrede → Text → Gruß",
                  "Text → Gruß → Betreff",
                ],
                correctIndex: 1,
                explain: "Önce konu sonra hitap.",
              },
            ]}
          />

          <Callout type="tip" title="Öğretmen özeti">
            <p>
              Dijital iletişimde üç altın kural:{" "}
              <strong>doğru hitap (du/Sie)</strong>,
              <strong>kısa & kibar kalıp</strong> ve{" "}
              <strong>temiz biçim</strong> (Betreff, paragraf, Gruß). Bu üçü
              oturduğunda Almanca mesajların hem anlaşılır hem de profesyonel
              olur.
            </p>
          </Callout>
        </Explain>
      </section>
    </div>
  );
}

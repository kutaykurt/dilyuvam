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
 * - WhatsApp/Signal/Telegram gibi sohbetlerde A1 kalıpları
 * - Uygun kısaltmalar: LG, VG, MfG, ASAP yerine "so schnell wie möglich" (A1'e basitleştir)
 * - Müsait değilim / sonra ararım / link gönderme / dosya paylaşma
 */
export default function MessagingChat() {
  return (
    <div className="ffh-sub ffh-sub--messaging" data-sub="messaging-chat">
      <section className="ffh-section" data-toc-title="Mesajlaşma kalıpları">
        <Explain
          title="Sohbette kısa ve doğal cümle kurma"
          lead="Uzun açıklamalar yerine doğrudan konu: ‘Ne istiyorsun?’ ‘Ne zaman?’ ‘Nerede?’"
        >
          <p>
            Almanca mesajlaşmada amaç hızlı ve net olmaktır. Selamlama kısa
            olabilir: <Key>Hi / Hallo</Key>. Sonra doğrudan konu:{" "}
            <Key>Hast du morgen Zeit?</Key>,{" "}
            <Key>Kannst du mir den Link schicken?</Key>. Müsait değilsen bunu
            belirt: <Key>Ich bin gerade nicht erreichbar.</Key>,{" "}
            <Key>Ich rufe später an.</Key>. Sesli mesaj için{" "}
            <Term>Sprachnachricht</Term>, bağlantı için <Term>Link</Term>, dosya
            için
            <Term>Datei</Term> kullanılır. Türkçede nezaket için “rahatsız ettim
            kusura bakmayın” gibi girişler sık gelir; Almancada bu tür uzun
            girişler gerekmez; bir <Key>Bitte</Key> ve <Key>Danke</Key> yeter.
          </p>

          <MiniTable
            head={["Almanca", "Türkçe", "Not"]}
            rows={[
              ["Hast du heute Zeit?", "Bugün vaktin var mı?", "du (samimi)"],
              [
                "Haben Sie heute Zeit?",
                "Bugün vaktiniz var mı?",
                "Sie (resmî)",
              ],
              [
                "Ich schicke dir/Ihnen den Link.",
                "Linki gönderiyorum.",
                "dir (du) / Ihnen (Sie) = dativ",
              ],
              ["Ich rufe später an.", "Sonra ararım.", "anrufen (trennbar)"],
              ["Ich bin gleich da.", "Birazdan oradayım.", "günlük"],
            ]}
          />

          <Examples
            items={[
              {
                en: "Kannst du mir die Datei schicken?",
                tr: "Dosyayı bana gönderebilir misin?",
              },
              { en: "Danke! LG", tr: "Teşekkürler! Sevgiler" },
            ]}
          />

          <Callout type="tip" title="Kısaltmalar">
            <p>
              <Key>LG</Key> = Liebe Grüße, <Key>VG</Key> = Viele Grüße,{" "}
              <Key>MfG</Key> = Mit freundlichen Grüßen. Aşırı İngilizce
              kısaltmalardan kaçın; A1’de açık yaz:{" "}
              <Key>so schnell wie möglich</Key> (olabildiğince çabuk).
            </p>
          </Callout>
        </Explain>
      </section>

      <section className="ffh-section" data-toc-title="Hızlı pratik">
        <Explain title="Boşluk doldurma">
          <ExerciseFill
            items={[
              {
                id: "m1",
                before: "Kannst ",
                after: " mir den Link schicken?",
                answers: ["du"],
                hint: "samimi",
              },
              {
                id: "m2",
                before: "Ich ",
                after: " später an.",
                answers: ["rufe"],
                hint: "anrufen trennbar",
              },
              {
                id: "m3",
                before: " ",
                after: " Liebe Grüße",
                answers: ["LG", "Liebe Grüße"],
                hint: "kapanış",
              },
              {
                id: "m4",
                before: "Ich bin gerade nicht ",
                after: ".",
                answers: ["erreichbar"],
                hint: "ulaşılabilir",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "Resmî hitap için doğru cümle:",
                choices: ["Hast du Zeit?", "Haben Sie Zeit?", "Hast Sie Zeit?"],
                correctIndex: 1,
                explain: "Sie + 3. çoğul çekim.",
              },
              {
                q: "‘Sonra arayacağım.’",
                choices: [
                  "Ich rufe später an.",
                  "Ich anrufe später.",
                  "Ich rufen später an.",
                ],
                correctIndex: 0,
                explain: "trennbar: rufe … an",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

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
 * Bu dosya:
 * - Saat, aralık ve sıklık: um / von–bis / alle X Minuten.
 * - Gecikme ve iptal dili: Verspätung, pünktlich, fällt aus.
 * - Gerçek hayatta soracağın mini kalıplar.
 */
export default function SchedulesDelays() {
  return (
    <div className="ffh-sub ffh-sub--schedule" data-sub="schedules-delays">
      <section className="ffh-section" data-toc-title="Saatler & gecikmeler">
        <Explain
          title="Saat ve sıklık dilini ezber kalıpla alın"
          lead="Toplu taşımada dil çok formülseldir: kısa kalıp = güçlü iletişim."
        >
          <p>
            Hareket saatleri için <Key>um + saat</Key> kalıbını kullanırız:{" "}
            <Key>um 8 Uhr</Key>. Zaman aralığı belirtirken{" "}
            <Key>von … bis …</Key> gelir: <Key>von 9 bis 18 Uhr</Key>. Sıklık
            için en doğal kalıp <Key>alle X Minuten</Key> (her X dakikada bir):
            <Key>Die U-Bahn kommt alle 10 Minuten.</Key> Bu üç kalıp gerçek
            hayatta en çok duyacağın ifadelerdir.
          </p>
          <p>
            Gecikme dilinde iki kelime temel: <Term>pünktlich</Term> (zamanında)
            ve <Term>Verspätung</Term> (gecikme). “Tren 10 dakika gecikmeli”
            demek için <Key>Der Zug hat 10 Minuten Verspätung.</Key> kullanılır.
            İptal için <Key>fällt aus</Key> denir:{" "}
            <Key>Der Bus fällt heute aus.</Key> Bu ifadeler ilan panolarında ve
            anonslarda sık görünür; ilk bakışta kalıpları seçebilirsen,
            seyahatin çok kolaylaşır.
          </p>

          <Formula
            rows={[
              ["Saat", "Der Bus fährt <u>um</u> 8 Uhr.", "um + saat"],
              [
                "Aralık",
                "Der Zug fährt <u>von</u> 9 <u>bis</u> 18 Uhr.",
                "başlangıç–bitiş",
              ],
              [
                "Sıklık",
                "Die U-Bahn kommt <u>alle</u> 10 Minuten.",
                "her 10 dakikada bir",
              ],
            ]}
          />

          <MiniTable
            head={["Almanca", "Türkçe", "Not"]}
            rows={[
              [
                "pünktlich / unpünktlich",
                "zamanında / zamanında değil",
                "İş ilanı ve ulaşımda çok geçer",
              ],
              [
                "die Verspätung (10 Min.)",
                "gecikme",
                "hat + X Minuten Verspätung",
              ],
              ["fällt aus", "iptal", "Der Bus fällt heute aus."],
              ["ankommen / abfahren", "varmak / kalkmak", "ankommen um 9:10"],
            ]}
          />

          <Examples
            items={[
              {
                en: "Der Bus hat 5 Minuten Verspätung.",
                tr: "Otobüs 5 dakika gecikmeli.",
                pron: "fershpetyung",
              },
              {
                en: "Kommt die Bahn pünktlich?",
                tr: "Tren zamanında geliyor mu?",
                pron: "pünktliH",
              },
            ]}
          />
        </Explain>
      </section>

      <section className="ffh-section" data-toc-title="Hızlı pratik">
        <Explain title="Alıştırma – Boşluk doldurma">
          <ExerciseFill
            items={[
              {
                id: "sd1",
                before: "Die U-Bahn kommt ",
                after: " 10 Minuten.",
                answers: ["alle"],
                hint: "sıklık",
              },
              {
                id: "sd2",
                before: "Der Zug fährt ",
                after: " 7 Uhr ab.",
                answers: ["um"],
                hint: "saat",
              },
              {
                id: "sd3",
                before: "Der Bus hat 10 Minuten ",
                after: ".",
                answers: ["Verspätung"],
                hint: "gecikme",
              },
              {
                id: "sd4",
                before: "Der Bus ",
                after: " heute aus.",
                answers: ["fällt"],
                hint: "iptal",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "‘Her 15 dakikada bir gelir.’ doğru cümle hangisi?",
                choices: [
                  "Die Bahn kommt jeden 15 Minuten.",
                  "Die Bahn kommt alle 15 Minuten.",
                  "Die Bahn kommt immer 15 Minuten.",
                ],
                correctIndex: 1,
                explain: "alle + süre = her … bir",
              },
              {
                q: "‘Tren saat 9:10’da varır.’ çevirisi:",
                choices: [
                  "Der Zug kommt um 9:10 an.",
                  "Der Zug fährt um 9:10 an.",
                  "Der Zug ankommt um 9:10.",
                ],
                correctIndex: 0,
                explain: "ankommen um …",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

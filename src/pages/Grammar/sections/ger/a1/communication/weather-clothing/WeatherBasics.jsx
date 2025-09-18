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
 * Odak:
 * - Es ist + Adj. / Es regnet → neden “es”?
 * - ‘Es wird …’ (tahmin/gelecek) basit girişi
 * - Alltagsdeutsch: Grad, total/mega/ziemlich
 */
export default function WeatherBasics() {
  return (
    <div className="ffh-sub ffh-sub--weather" data-sub="weather-basics">
      <section className="ffh-section" data-toc-title="Hava – temel">
        <Explain
          title="Wetter – Neden böyle söylenir?"
          lead="Hava bir durumdur; Almanca bu durumu ‘es’ ile çerçeveler."
        >
          <Callout type="info" title="Yapı mantığı">
            <p>
              <Key>Es ist kalt.</Key> / <Key>Es regnet.</Key> — <Term>es</Term>{" "}
              öznesi anlam taşımaz, cümleyi dengeler. Türkçede karşılığı yok:
              “Hava soğuk.”, “Yağmur yağıyor.”
            </p>
          </Callout>

          <Formula
            rows={[
              ["Sıfat", "Es ist + Adjektiv.", "Es ist kalt / warm / sonnig."],
              ["Fiil", "Es + Verb.", "Es regnet. / Es schneit."],
              [
                "Tahmin",
                "Es wird + Adj./Inf.",
                "Es wird kälter. / Morgen wird es regnen.",
              ],
            ]}
          />

          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Es ist sonnig/bewölkt.",
                "Güneşli/bulutlu.",
                "zonnig / bevölkt",
              ],
              [
                "Es ist windig/kühl/heiß.",
                "Rüzgarlı/serin/çok sıcak.",
                "vindig / kül / hays",
              ],
              [
                "Es regnet / Es schneit.",
                "Yağmur/kar yağıyor.",
                "reg-net / şnayt",
              ],
              ["Die Sonne scheint.", "Güneş parlıyor.", "zone şaynt"],
              [
                "Die Temperatur liegt bei 10 Grad.",
                "Sıcaklık 10° civarı.",
                "temperatur ligt bay tseyn grat",
              ],
            ]}
          />

          <Callout type="tip" title="Alltag notları">
            <ul className="compact-list">
              <li>
                <Key>10 Grad</Key> demek yeterli (“derece” demene gerek yok).
              </li>
              <li>
                <Key>ziemlich / total / mega</Key> doğal güçlendirme.
              </li>
            </ul>
          </Callout>

          <Examples
            items={[
              {
                en: "Morgen wird es wärmer.",
                tr: "Yarın daha sıcak olacak.",
                pron: "morgen vird es vääa-ma",
              },
              {
                en: "Gerade regnet es leicht.",
                tr: "Şu anda hafif yağmur var.",
                pron: "ge-rade layHt",
              },
            ]}
          />
        </Explain>
      </section>

      <section className="ffh-section" data-toc-title="Hızlı pratik">
        <Explain title="Quick Practice – Gap-fill">
          <ExerciseFill
            items={[
              {
                id: "w1",
                before: "Heute ",
                after: " es sonnig.",
                answers: ["ist"],
                hint: "sein 3. Pers.",
              },
              {
                id: "w2",
                before: "In München ",
                after: " es.",
                answers: ["schneit"],
                hint: "kar",
              },
              {
                id: "w3",
                before: "Die Temperatur ",
                after: " bei 15 Grad.",
                answers: ["liegt"],
                hint: "yer alır",
              },
              {
                id: "w4",
                before: "Morgen ",
                after: " es wärmer.",
                answers: ["wird"],
                hint: "gelecek",
              },
              {
                id: "w5",
                before: "",
                after: " regnet es stark.",
                answers: ["Gerade"],
                hint: "şu anda",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test (MC)">
          <ExerciseMC
            items={[
              {
                q: "‘Hava bulutlu.’ hangisi?",
                choices: ["Es ist sonnig.", "Es ist bewölkt.", "Es ist heiß."],
                correctIndex: 1,
                explain: "bewölkt = bulutlu",
              },
              {
                q: "Gelecek: ‘Yarın yağmur yağacak.’",
                choices: [
                  "Morgen ist es regnet.",
                  "Morgen wird es regnen.",
                  "Morgen regnet wird es.",
                ],
                correctIndex: 1,
                explain: "werden + Inf.: wird regnen",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

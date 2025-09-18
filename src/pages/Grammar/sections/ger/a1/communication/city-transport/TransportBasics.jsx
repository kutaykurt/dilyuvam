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
 * - “mit + Dativ” mantığını pekiştirir.
 * - nach / zu / in ayrımını örneklerle uygulatır.
 * - Kısa pratikler: Gap-fill + Mini Test.
 */
export default function TransportBasics() {
  return (
    <div className="ffh-sub ffh-sub--transport" data-sub="transport-basics">
      <section className="ffh-section" data-toc-title="Araç & hedef – temel">
        <Explain
          title="‘mit + Dativ’ — kuralın arkasındaki fikir"
          lead="‘mit’ edatı ‘ile/beraber’ fikri verir ve her zaman Dativ ister."
        >
          <p>
            <Term>mit</Term> edatını “ile/beraber” gibi düşün. “Kimle/neyle?”
            diye sorunca Türkçede “-le/-la” ile çözeriz. Almancada ise edatın
            kendi “gücü” var ve ardından gelen ismi Dativ’e zorlar:{" "}
            <Key>
              mit <u>dem</u> Bus
            </Key>
            ,
            <Key>
              mit <u>der</u> U-Bahn
            </Key>
            ,{" "}
            <Key>
              mit <u>dem</u> Zug
            </Key>
            . Bu kural araban, bisikletin, arkadaşın veya ailen için de
            geçerlidir:{" "}
            <Key>
              mit <u>meinem</u> Auto
            </Key>
            ,{" "}
            <Key>
              mit <u>meiner</u> Familie
            </Key>
            . Bir kez içselleştirince, yeni kelimelerde düşünmeden doğru formu
            seçersin.
          </p>

          <MiniTable
            head={["Kalıp", "Örnek", "Türkçe"]}
            rows={[
              [
                "mit + Dativ",
                "Ich fahre <strong>mit dem Bus</strong>.",
                "Otobüs<strong>le</strong> gidiyorum.",
              ],
              [
                "mit + Dativ",
                "Wir fahren <strong>mit der Straßenbahn</strong>.",
                "Tramvay<strong>la</strong> gidiyoruz.",
              ],
              [
                "mit + Dativ",
                "Er fährt <strong>mit dem Zug</strong>.",
                "Tren<strong>le</strong> gidiyor.",
              ],
            ]}
          />

          <Callout type="warn" title="Sık hata">
            <p>
              “*mit der Bus*” ya da “*mit dem U-Bahn*” demeyin; isimlerin{" "}
              <em>cinsiyeti</em> farklıdır. “Bus” = der (→ dem), “U-Bahn” = die
              (→ der). Gerekirse küçük bir listeyi telefona kaydet.
            </p>
          </Callout>
        </Explain>

        <Explain
          title="Hedef seçimi: nach / zu / in"
          lead="Basit üçlü: şehir/ülke → nach; nokta/kurum → zu; içine hareket → in + Akk."
        >
          <Formula
            rows={[
              [
                "Şehir/ülke",
                "nach + (artikelsiz isim)",
                "nach Berlin / nach Deutschland",
              ],
              [
                "Yer/kurum",
                "zu + Dativ",
                "zum Bahnhof / zur Post / zum Zentrum",
              ],
              [
                "İçine hareket",
                "in + Akkusativ",
                "in die Stadt / in den Bus / in die U-Bahn",
              ],
            ]}
          />

          <Examples
            items={[
              {
                en: "Ich fahre nach Berlin.",
                tr: "Berlin’e gidiyorum.",
                pron: "nah berlin",
              },
              {
                en: "Ich gehe zur Haltestelle.",
                tr: "Durağa gidiyorum.",
                pron: "tsur haltəştelle",
              },
              {
                en: "Ich steige in den Bus ein.",
                tr: "Otobüse biniyorum.",
                pron: "in den bus ayn",
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
                id: "tb1",
                before: "Ich fahre ",
                after: " Bus.",
                answers: ["mit dem"],
                hint: "mit + Dativ",
              },
              {
                id: "tb2",
                before: "Wir fahren ",
                after: " Berlin.",
                answers: ["nach"],
                hint: "şehir/ülke",
              },
              {
                id: "tb3",
                before: "Ich gehe ",
                after: " Bahnhof.",
                answers: ["zum"],
                hint: "zu + Dativ",
              },
              {
                id: "tb4",
                before: "Ich steige ",
                after: " Bus ein.",
                answers: ["in den"],
                hint: "in + Akk. (içine)",
              },
              {
                id: "tb5",
                before: "Die Linie 12 fährt von Köln ",
                after: " Bonn.",
                answers: ["nach"],
                hint: "güzergâh",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "‘Otobüsle gidiyorum.’ cümlesi hangisi?",
                choices: [
                  "Ich fahre mit der Bus.",
                  "Ich fahre mit dem Bus.",
                  "Ich fahre im Bus.",
                ],
                correctIndex: 1,
                explain: "mit + Dativ → dem Bus.",
              },
              {
                q: "‘İstasyona gidiyorum.’ cümlesi hangisi?",
                choices: [
                  "Ich gehe nach Bahnhof.",
                  "Ich gehe zu Bahnhof.",
                  "Ich gehe zum Bahnhof.",
                ],
                correctIndex: 2,
                explain: "zu + Dativ → zum Bahnhof.",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

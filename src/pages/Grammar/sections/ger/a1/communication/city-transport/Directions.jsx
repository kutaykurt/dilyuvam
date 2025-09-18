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
 * - Yön sorma, hat sorma, aktarma/iniş.
 * - zum/zur, bis, an der Haltestelle kalıpları.
 * - Öğrencinin gerçek hayatta kullanacağı kısa cevap formatı.
 */
export default function Directions() {
  return (
    <div className="ffh-sub ffh-sub--directions" data-sub="directions">
      <section className="ffh-section" data-toc-title="Yol tarifi & hatlar">
        <Explain
          title="Nasıl giderim? – Kısa ve işlevsel sorular"
          lead="Gerçek banko/ danışma diyaloglarına uygun kalıplar"
        >
          <p>
            Şehir içinde en çok soracağın şey, “<em>Oraya nasıl giderim?</em>”.
            Almanca kalıp
            <Key>
              Wie komme ich <u>zum/zur</u> …?
            </Key>{" "}
            şeklindedir: <Key>zum Bahnhof</Key>, <Key>zur Haltestelle</Key>. Hat
            (linye) sormak için{" "}
            <Key>
              Welche Linie fährt <u>zum</u> Zentrum?
            </Key>{" "}
            kalıbı yeterlidir. Aktarma gerektiğinde <Term>umsteigen</Term> fiili
            kullanılır ve genellikle “<Key>in + Akk.</Key>” ile gelir:{" "}
            <Key>in die U2 umsteigen</Key>. İniş için <Term>aussteigen</Term> ve
            “<Key>an + Dativ</Key>” kullanılır:
            <Key>an der Haltestelle Markt aussteigen</Key>. Bu iki fiil
            ayrılamalıdır (trennbar); ayrıntısını birazdan göreceğiz.
          </p>
          <p>
            Cevap verirken akış şu olur:{" "}
            <em>Şununla gidin, şurada aktarma yapın, şurada inin</em>. Bu yüzden
            aşağıdaki formülü ezberlemek işini hızlandırır. Ayrıca “
            <Key>bis</Key> + yer” kalıbı varış noktasını belirtir:{" "}
            <Key>
              Fahren Sie <u>bis</u> Alexanderplatz.
            </Key>{" "}
            Bir yolcunun gerçekten duyacağı en gerçekçi kalıplar bunlardır.
          </p>

          <MiniTable
            head={["Almanca soru", "Türkçe", "Not"]}
            rows={[
              [
                "Wie komme ich zum Bahnhof?",
                "İstasyona nasıl giderim?",
                "zu + Dativ → zum/zur",
              ],
              [
                "Welche Linie fährt zum Zentrum?",
                "Merkeze hangi hat gidiyor?",
                "U2, Linie 12 …",
              ],
              [
                "Muss ich umsteigen?",
                "Aktarma yapmalı mıyım?",
                "umsteigen in + Akk.",
              ],
              [
                "Wo muss ich aussteigen?",
                "Nerede inmeliyim?",
                "an der Haltestelle …",
              ],
              ["Bis wo?", "Nereye kadar?", "Bis Alexanderplatz."],
              [
                "Wie lange dauert es?",
                "Ne kadar sürer?",
                "ungefähr 20 Minuten",
              ],
            ]}
          />

          <Formula
            rows={[
              [
                "Soru 1",
                "Wie komme ich + zu(r/m) …?",
                "Wie komme ich zum Rathaus?",
              ],
              [
                "Soru 2",
                "Welche Linie fährt + zu(r/m) …?",
                "Welche Linie fährt zur Messe?",
              ],
              [
                "Cevap şablonu",
                "Sie fahren mit …, steigen in … um, und steigen an … aus.",
                "adım adım tarif",
              ],
            ]}
          />

          <Examples
            items={[
              {
                en: "Sie fahren mit der U2, steigen am Zoo in die S5 um und steigen am Hbf aus.",
                tr: "U2 ile gidin, Zoo’da S5’e aktarma yapın ve Hbf’de inin.",
                pron: "zi fahren mit dea u-zvai, ştayıgn am tsoo in di es-fünf um …",
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
                id: "dr1",
                before: "Wie komme ich ",
                after: " Bahnhof?",
                answers: ["zum"],
                hint: "zu + Dativ",
              },
              {
                id: "dr2",
                before: "Sie steigen ",
                after: " die U2 um.",
                answers: ["in"],
                hint: "umsteigen in",
              },
              {
                id: "dr3",
                before: "Sie steigen ",
                after: " der Haltestelle Markt aus.",
                answers: ["an"],
                hint: "aussteigen an",
              },
              {
                id: "dr4",
                before: "Fahren Sie ",
                after: " Alexanderplatz.",
                answers: ["bis"],
                hint: "varış noktası",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "‘Nerede inmeliyim?’",
                choices: [
                  "Wo steige ich um?",
                  "Wo muss ich aussteigen?",
                  "Wo fahre ich aus?",
                ],
                correctIndex: 1,
                explain: "aussteigen = inmek.",
              },
              {
                q: "Doğru kalıp hangisi?",
                choices: [
                  "umsteigen an die U2",
                  "umsteigen in die U2",
                  "umsteigen zu die U2",
                ],
                correctIndex: 1,
                explain: "in + Akk. ile kullanılır.",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

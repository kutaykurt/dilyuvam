import React from "react";
import Explain from "../../../../../../../components/Explain";
import {
  Key,
  Term,
  MiniTable,
  Formula,
  Examples,
  Callout,
} from "../../../../../blocks";

export default function Intro() {
  return (
    <div className="ntd-sub ntd-sub--intro" data-sub="intro">
      <section
        className="ntd-section ntd-section--lead"
        data-toc-title="Einleitung"
      >
        <div
          className="rule-box ntd-rule ntd-rule--intro"
          data-modalizable="true"
          data-modal-title="Kontext: Türkçe vs. Almanca"
        >
          <strong>Zahlen, Uhrzeit, Datum – neden önemli?</strong> Günlük hayatta
          her yerde karşına çıkar: randevu saati, bilet numarası, fiyatlar,
          tarih. Türkçede bazen tek bir kalıp birçok durumu anlatır. Almancada
          ise <Term>biçim</Term> ve <Term>küçük kelimeler</Term> (örn.{" "}
          <em>am, um, im</em>) net ve düzenlidir. Bu bölümde “Türkçede böyle
          deriz ama Almancada şöyledir” farklarını anlaşılır bir şekilde
          kuruyoruz.
        </div>

        <Explain
          title="Genel farklar – hızlı bakış"
          lead="Türkçe ↔ Almanca arasında öğrencilerin en çok karıştırdığı noktalar:"
        >
          <ul className="ntd-ul ntd-ul--intro-points">
            <li>
              <Term>24 saat</Term> formatı Almancada çok yaygın: <em>13:30</em>{" "}
              → <em>dreizehn Uhr dreißig</em> / <em>halb zwei</em>.
            </li>
            <li>
              <Term>‘halb’</Term> Almancada <strong>sonraki</strong> saate yarım
              kala demek: <Key>halb neun</Key> = <strong>08:30</strong>,
              (Türkçede “dokuz buçuk” 9:30’dur → karıştırma!).
            </li>
            <li>
              <Term>Virgül</Term> ondalık ayırır: <Key>3,5 €</Key> ={" "}
              <em>drei Euro fünfzig</em> (nokta değil!).
            </li>
            <li>
              <Term>Tarih</Term> önce gün gelir: <Key>31.12.2025</Key> ve
              okunuşta sıra sayısı: <em>am einunddreißigsten Dezember</em>.
            </li>
          </ul>

          <Callout type="info" title="Notasyon – yazarken ve okurken">
            <ul className="compact-list">
              <li>
                <strong>Binlik</strong> ayırıcı: <em>1.000</em> (nokta) ya da{" "}
                <em>1 000</em> (boşluk).
              </li>
              <li>
                <strong>Ondalık</strong>: <em>2,75</em> (virgül). Fiyatlar:{" "}
                <em>2,75 €</em> → <em>zwei Euro fünfundsiebzig</em>.
              </li>
              <li>
                <strong>Tarih</strong>: <em>Tag.Monat.Jahr</em> (31.05.2025).
              </li>
            </ul>
          </Callout>
        </Explain>

        <Explain
          title="Sık sorulara hızlı yanıt"
          lead="Aşağıdaki kalıplar A1 için %90 yeterlidir."
        >
          <Formula
            rows={[
              [
                "Saat sorma",
                "Wie spät ist es? / Wie viel Uhr ist es?",
                "Saat kaç?",
              ],
              [
                "Saat söyleme",
                "Es ist 8 Uhr / Es ist halb neun",
                "Saat 8 / 8 buçuk (08:30)",
              ],
              ["Randevu", "um 9 Uhr", "saat 9’da"],
              [
                "Tarih",
                "am 3. Mai / am dritten Mai",
                "3 Mayıs’ta",
              ],
              [
                "Ay/Yıl",
                "im Januar / im Jahr 2025",
                "Ocakta / 2025 yılında",
              ],
            ]}
          />
        </Explain>

        <Explain title="Mini diyalog" lead="Kısa, doğal bir konuşma">
          <Examples
            items={[
              {
                en: "A: Wie viel Uhr ist es? – B: Es ist halb neun.",
                tr: "A: Saat kaç? – B: Sekiz buçuk.",
                pron: "vi fil uua ist es – es ist halp noyN",
              },
              {
                en: "A: Heute ist der 5. Juni, oder? – B: Ja, am fünften Juni.",
                tr: "A: Bugün 5 Haziran, değil mi? – B: Evet, 5 Haziran’da.",
                pron: "hoytə ist dea fünfte yuni, oda – ya, am fünften yuni",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="ntd-section ntd-section--pron"
        data-toc-title="Aussprache-Hinweise"
      >
        <Explain
          title="Aussprache – Zahlen için kritik sesler"
          lead="Doğru ses → doğru anlama."
        >
          <MiniTable
            head={["Yazı", "Okunuş (TR)", "Örnek"]}
            rows={[
              ["z", "ts", "zehn → tsen; zwanzig → tsvansih"],
              ["w", "v", "zwei → tsvay; zwölf → tsvölf"],
              ["v", "f", "vier → fiir; fünf → fünf"],
              ["j", "y", "Juni → yuni; Januar → yanua"],
              ["äu/eu", "oy", "neun → noyn; zwölf → tsvölf (ö sesi)"],
              ["ß/ss", "s", "dreißig → draysih; Klasse → klase"],
            ]}
          />
          <Callout type="tip" title="Hızlı düzeltme">
            <p>
              <Term>z</Term> harfini asla “z” gibi söyleme; <strong>ts</strong>{" "}
              yap: <em>zehn → tsen</em>.
            </p>
          </Callout>
        </Explain>
      </section>
    </div>
  );
}

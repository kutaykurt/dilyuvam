import React from "react";
import { Link } from "react-router-dom";
import Explain from "../../../../../../../components/Explain";
import {
  Key,
  Term,
  MiniTable,
  Formula,
  Examples,
  Callout,
} from "../../../../../blocks";

const SPELLING_ROWS = [
  ["A a", "Anton", "anton"],
  ["B b", "Berta", "berta"],
  ["C c", "Cäsar", "tsezar"],
  ["D d", "Dora", "dora"],
  ["E e", "Emil", "eemil"],
  ["F f", "Friedrich", "friidriH"],
  ["G g", "Gustav", "gustaf"],
  ["H h", "Heinrich", "haynriH"],
  ["I i", "Ida", "ida"],
  ["J j", "Julius", "yulius"],
  ["K k", "Kaufmann", "kaufman"],
  ["L l", "Ludwig", "ludviH"],
  ["M m", "Martha", "marta"],
  ["N n", "Nordpol", "nortpol"],
  ["O o", "Otto", "oto"],
  ["P p", "Paula", "paula"],
  ["Q q", "Quelle", "kvella"],
  ["R r", "Richard", "riHart"],
  ["S s", "Siegfried", "ziigfrit"],
  ["T t", "Theodor", "teodor"],
  ["U u", "Ulrich", "ulriH"],
  ["V v", "Viktor", "viktor"],
  ["W w", "Willi", "vili"],
  ["X x", "Xanthippe", "ksantipe"],
  ["Y y", "Ypsilon", "üpsilon"],
  ["Z z", "Zacharias", "tsaharayas"],
  ["Ä/Ö/Ü", "Ärger / Ökonom / Übermut", "ea-ga / ökonom / yübamut"],
  ["ß", "Eszett / scharfes S", "es-set / şarfes s"],
];

export default function Address() {
  return (
    <div className="had-sub had-sub--address" data-sub="address">
      <section
        className="had-section had-section--ask"
        data-toc-title="Adres sorma & verme"
      >
        <Explain
          title="Adres sorma/verme"
          lead="Almancada adres genelde üç satır: Straße + Hausnummer, PLZ + Ort, (ülke)."
        >
          <Formula
            rows={[
              [
                "Soru",
                "Wie ist Ihre/deine Adresse?",
                "Adresiniz/adresin nedir?",
              ],
              [
                "Adres verme",
                "Weserstraße 19, 12045 Berlin",
                "Sokak + No, PLZ Şehir",
              ],
              ["PLZ", "Postleitzahl", "Posta kodu (örn. 12045)"],
            ]}
          />
          <MiniTable
            head={["Kalip", "Almanca", "Türkçe / Okunuş (TR)"]}
            rows={[
              ["Adres satırı", "Weserstraße 19", "vezer-ştrase noyn-tsen"],
              ["PLZ + şehir", "12045 Berlin", "ayn-tsvai-nul-vier-fünf berlin"],
              ["Ülke (ops.)", "Deutschland", "doyçlant"],
            ]}
          />
          <Callout type="warning" title="Sıra ve noktalama">
            <p>
              <Term>Hauptstraße 12</Term> şeklinde <strong>Sokak + No</strong>{" "}
              yaz. Nokta/virgül gereksiz; satır kırımları daha nettir.{" "}
              <Key>No: 12</Key> tarzı Türkçe yazım Almanya’da kullanılmaz.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="had-section had-section--spell"
        data-toc-title="Buchstabieren (heceleme)"
      >
        <Explain
          title="Buchstabieren – ad, sokak, e-posta"
          lead="Telefon/gişe durumlarında hayati"
        >
          <MiniTable
            head={["Harf", "Kod adı", "Okunuş (TR)"]}
            rows={SPELLING_ROWS}
          />
          <Callout type="tip" title="Umlaut & ß yazımı">
            <p>
              Formlarda <Term>ä → ae</Term>, <Term>ö → oe</Term>,{" "}
              <Term>ü → ue</Term>, <Term>ß → ss</Term> yazılır. Örn.{" "}
              <em>Jürgen → Juergen</em>, <em>Maß → Mass</em>.
            </p>
          </Callout>
          <MiniTable
            head={["İşaret", "Almanca adı", "TR karşılık / Okunuş"]}
            rows={[
              ["@", "At-Zeichen", "at işareti / at"],
              ["-", "Bindestrich", "tire / bindeştrih"],
              ["_", "Unterstrich", "alt çizgi / untaştrih"],
              [".", "Punkt", "nokta / punkt"],
            ]}
          />
        </Explain>

        <Explain
          title="Diyalog – e-posta & adres"
          lead="Hecelemeyi modelleyelim"
        >
          <Examples
            items={[
              {
                en: "A: Wie ist Ihre E-Mail-Adresse? – B: ayse.yilmaz@beispiel.de – A: Können Sie buchstabieren?",
                tr: "A: E-posta adresiniz nedir? – B: … – A: Heceleyebilir misiniz?",
                pron: "vi ist iire imeyl-adrese – könnən zi buhştabiren",
              },
              {
                en: "B: ayse punkt yilmaz at beispiel punkt de",
                tr: "B: ayse nokta yilmaz at beispiel nokta de",
                pron: "ayze punkt yilmaz ät bayşpil punkt de",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="had-section had-section--cta"
        data-toc-title="Mini-Test bağlantısı"
      >
        <Callout type="tip" title="Hazır mısın?">
          <p>Adres & heceleme alıştırmalarını çözmek için mini teste geç:</p>
          <p>
            <Link className="quiz-link btn" to="../quiz">
              Mini-Teste git
            </Link>
          </p>
        </Callout>
      </section>
    </div>
  );
}

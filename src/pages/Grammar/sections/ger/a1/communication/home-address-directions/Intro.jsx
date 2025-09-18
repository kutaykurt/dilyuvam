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

export default function Home() {
  return (
    <div className="had-sub had-sub--home" data-sub="home">
      <section
        className="had-section had-section--wohnort"
        data-toc-title="Wohnort & Umfeld"
      >
        <Explain
          title="Wohnort – ‘in’ + şehir/ülke"
          lead="Türkçedeki ‘-de/da’ eki Almancada çoğunlukla <Key>in</Key> ile verilir."
        >
          <Formula
            rows={[
              [
                "Şehir",
                "Ich wohne in Berlin / Izmir.",
                "…’de yaşıyorum.",
              ],
              [
                "Ülke (dişil çoğu ülke adı)",
                "Ich wohne in der Türkei.",
                "Türkiye’de yaşıyorum.",
              ],
              [
                "Ülke (çoğul)",
                "Ich wohne in den Niederlanden.",
                "Hollanda’da yaşıyorum.",
              ],
              [
                "Semt",
                "Ich wohne im Stadtteil Neukölln.",
                "Neukölln semtinde yaşıyorum.",
              ],
            ]}
          />
          <Callout type="info" title="‘in der/in den’ neden var?">
            <p>
              Bazı ülke adları dilbilgisel olarak <strong>dişil</strong> (
              <em>die Türkei</em>) veya <strong>çoğul</strong>(
              <em>die Niederlande</em>) kabul edilir; bu yüzden{" "}
              <Key>in der</Key>, <Key>in den</Key> görürsün. A1’de sadece kalıp
              olarak öğrenmen yeterli.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="had-section had-section--strassen"
        data-toc-title="Sokak & numara"
      >
        <Explain
          title="Sokak + numara dizilişi"
          lead="Almancada sıra genelde ‘Sokak Adı + Numara’ şeklindedir."
        >
          <MiniTable
            head={["Türkçe mantık", "Almanca yazım", "Örnek okunuş (TR)"]}
            rows={[
              ["X Sokak, No: 12", "Hauptstraße 12", "hauptrase tsvolf"],
              ["Yol/Meydan + No", "Alexanderplatz 3", "aleksandaplats dray"],
              ["Bulvar + No", "Lindenallee 5", "lindenale faif"],
            ]}
          />
          <Callout type="tip" title="‘in der … Straße’ kalıbı">
            <p>
              “X sokağında” demek için <Key>in der … Straße</Key> kullanılır:
              <em>Ich wohne in der Weserstraße.</em> Kısa biçim:{" "}
              <em>Weserstraße 19</em>.
            </p>
          </Callout>
        </Explain>

        <Explain title="Kısa diyaloglar" lead="Adres vermeyi pratik gör">
          <Examples
            items={[
              {
                en: "A: Wo wohnst du genau? – B: In der Weserstraße 19.",
                tr: "A: Tam olarak nerede yaşıyorsun? – B: Weserstraße 19’da.",
                pron: "vo vohnst du genau – in dea vezerştrase noyn-tsen",
              },
              {
                en: "A: In welchem Stadtteil? – B: Im Stadtteil Nippes.",
                tr: "A: Hangi semtte? – B: Nippes semtinde.",
                pron: "in velHəm ştattayl – im ştattayl nippes",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="had-section had-section--wohnform"
        data-toc-title="Ev tipi & kat bilgisi"
      >
        <Explain
          title="Ev tipi, kat ve kapı"
          lead="Gerekli kelimeler ve kalıplar"
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Not / Okunuş (TR)"]}
            rows={[
              ["die Wohnung", "daire", "vo:nunG"],
              ["das Einfamilienhaus", "müstakil ev", "ayn-familiyen-haus"],
              ["die Etage / der Stock", "kat", "etaje / ştok"],
              ["im 3. Stock", "3. katta", "im drittn ştok"],
              [
                "die Tür / die Wohnungstür",
                "kapı / daire kapısı",
                "tüa / vo:nunGs-tüa",
              ],
              ["die Hausnummer", "ev numarası", "hausnuma"],
              ["die Postleitzahl (PLZ)", "posta kodu", "postlayt-tsal"],
            ]}
          />
          <Examples
            items={[
              {
                en: "Ich wohne im dritten Stock, Wohnung Nummer 8.",
                tr: "3. katta yaşıyorum, daire numarası 8.",
                pron: "ih vone im drittn ştok, vo:nunG numea aHt",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

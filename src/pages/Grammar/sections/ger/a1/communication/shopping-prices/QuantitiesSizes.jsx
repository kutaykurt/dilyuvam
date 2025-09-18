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

export default function QuantitiesSizes() {
  return (
    <div className="ffh-sub ffh-sub--quantities" data-sub="quantities-sizes">
      <section
        className="ffh-section ffh-section--amount"
        data-toc-title="Miktar & beden"
      >
        <Explain title="Mengen & Größen" lead="Kaç tane? Hangi beden?">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "ein Kilo / ein halbes Kilo",
                "bir kilo / yarım kilo",
                "ayn kilo / ayn halbes kilo",
              ],
              [
                "200 Gramm / ein Pfund",
                "200 gram / yarım kilo",
                "tsvay-hundert gram / ayn pfund",
              ],
              [
                "ein Stück / zwei Stück",
                "bir adet / iki adet",
                "ayn ştük / tsvay ştük",
              ],
              [
                "Größe S/M/L/XL",
                "Beden S/M/L/XL",
                "gröse es / em / el / iks-el",
              ],
              ["Passt das?", "Uyar mı?", "past das"],
              [
                "Darf ich das anprobieren?",
                "Deneyebilir miyim?",
                "darf ih das an-probi-ren",
              ],
            ]}
          />
          <Formula
            rows={[
              [
                "İstek",
                "Ich möchte 500 Gramm Tomaten.",
                "500 gram domates istiyorum.",
              ],
              [
                "Beden sorma",
                "Haben Sie das in Größe M?",
                "M bedeni var mı?",
              ],
              [
                "Uygunluk",
                "Das passt gut / zu groß / zu klein.",
                "iyi / büyük / küçük",
              ],
            ]}
          />
          <Callout type="info" title="‘anprobieren’ (ayrılır)">
            <p>
              <Key>Ich probiere</Key> die Jacke <strong>an</strong>. /{" "}
              <Key>Zieh</Key> die Jacke <strong>an</strong>!
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="Soyunma kabini" lead="Beden–deneme">
          <Examples
            items={[
              {
                en: "Wo sind die Umkleiden? – Dort links.",
                tr: "Soyunma kabinleri nerede? – Solda.",
                pron: "vo zint di umklaydn – dort links",
              },
              {
                en: "Die Hose ist zu klein. Haben Sie eine Nummer größer?",
                tr: "Pantolon küçük. Bir numara büyüğü var mı?",
                pron: "di hoze ist tsu klayn. habn zi aynə numara grösa",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

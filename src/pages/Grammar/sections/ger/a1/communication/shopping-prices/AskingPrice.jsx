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

export default function AskingPrice() {
  return (
    <div className="ffh-sub ffh-sub--asking-price" data-sub="asking-price">
      <section
        className="ffh-section ffh-section--phrases"
        data-toc-title="Fiyat sorma"
      >
        <Explain title="Temel kalıplar" lead="Kısa ve kibar sorular">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              ["Wie viel kostet das?", "Bu ne kadar?", "vi fil kostet das"],
              ["Was kostet ...?", "... kaç para?", "vas kostet"],
              ["Ist das im Angebot?", "Bu indirimde mi?", "ist das im angəbot"],
              [
                "Gibt es das günstiger?",
                "Daha ucuza var mı?",
                "gipt ıs das gündstiga",
              ],
              [
                "Haben Sie einen Rabatt?",
                "İndirim var mı?",
                "habn zi aynən rabat",
              ],
              ["Ich nehme das.", "Bunu alıyorum.", "ih neyme das"],
            ]}
          />
          <Formula
            rows={[
              ["Fiyat söyleme", "Es kostet 7 Euro 99.", "7,99 €"],
              ["Toplam", "Das macht 21 Euro.", "Toplam 21 € tutuyor."],
            ]}
          />
          <Callout type="warning" title="€ ve Cent söyleyiş">
            <p>
              <Term>Euro</Term> “<Key>oy-ro</Key>”, <Term>Cent</Term> “
              <Key>sent</Key>”.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="Hızlı diyalog" lead="Soru → cevap">
          <Examples
            items={[
              {
                en: "Wie viel kostet der Apfel? – 80 Cent pro Stück.",
                tr: "Elma ne kadar? – Tane 80 sent.",
                pron: "vi fil kostet dea apfl – aHtsiH sent pro ştük",
              },
              {
                en: "Ist das im Angebot? – Ja, heute 2 für 1.",
                tr: "Bu indirimde mi? – Evet, bugün 2 al 1 öde.",
                pron: "ist das im angəbot – ya, hoytə tsvey füa ayn",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

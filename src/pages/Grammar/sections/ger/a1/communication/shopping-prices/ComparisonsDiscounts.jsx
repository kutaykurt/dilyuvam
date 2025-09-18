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

export default function ComparisonsDiscounts() {
  return (
    <div className="ffh-sub ffh-sub--compare" data-sub="comparisons-discounts">
      <section
        className="ffh-section ffh-section--compare"
        data-toc-title="Karşılaştırma & indirim"
      >
        <Explain
          title="Vergleichen & Rabatte"
          lead="Daha ucuz/daha pahalı – kampanya"
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "teuer / günstig / billig",
                "pahalı / uygun / ucuz",
                "toy-a / gündstiH / biliH",
              ],
              [
                "teurer als / billiger als",
                "…’den daha pahalı/ucuz",
                "toyr-a als / bili-ga als",
              ],
              ["am günstigsten", "en uygun", "am gündsti-sten"],
              [
                "im Angebot / reduziert",
                "indirimde / düşürülmüş",
                "im angəbot / redootsi-ert",
              ],
              ["zweite gratis", "ikincisi bedava", "tsvaytə grātis"],
            ]}
          />
          <Formula
            rows={[
              [
                "Karşılaştırma",
                "Das ist billiger als jenes.",
                "Bu, ötekinden ucuz.",
              ],
              [
                "En …",
                "Dieses Modell ist am günstigsten.",
                "En uygunu bu model.",
              ],
              [
                "İndirim sorma",
                "Gibt es Studentenrabatt?",
                "Öğrenci indirimi var mı?",
              ],
            ]}
          />
          <Callout type="tip" title="als / am …sten">
            <p>
              <Term>als</Term> = karşılaştırma; <Term>am …sten</Term> = en …:{" "}
              <Key>billiger als</Key>, <Key>am billigsten</Key>.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="Fiyat karşılaştırma" lead="Kısa örnek">
          <Examples
            items={[
              {
                en: "Dieses ist teurer, aber besser. Das andere ist billiger.",
                tr: "Bu daha pahalı ama daha iyi. Diğeri daha ucuz.",
                pron: "di-zəs ist toya, aba besa. das andəre ist bili-ga",
              },
              {
                en: "Ist das reduziert? – Ja, 20% Rabatt.",
                tr: "Bu indirimli mi? – Evet, %20 indirim.",
                pron: "ist das redootsi-ert – ya, tsvantsiH prosent rabat",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

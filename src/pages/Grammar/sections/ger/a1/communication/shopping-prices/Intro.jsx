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
    <div className="ffh-sub ffh-sub--intro" data-sub="intro">
      <section
        className="ffh-section ffh-section--lead"
        data-toc-title="Einleitung"
        data-modalizable="true"
        data-modal-title="Alışveriş & Fiyatlar"
      >
        <Explain
          title="Neden ‘Shopping & Preise’?"
          lead="A1 günlük konuşmalarında en çok ‘ne kadar, kaç tane, nasıl öderim?’ soruları var."
        >
          <Formula
            rows={[
              ["Fiyat sorma", "Wie viel kostet das?", "Bu ne kadar?"],
              [
                "Miktar",
                "Ich möchte 500 Gramm / ein Kilo.",
                "500 g / 1 kg istiyorum.",
              ],
              ["Beden", "Haben Sie Größe M?", "M bedeni var mı?"],
              ["Ödeme", "Ich zahle bar / mit Karte.", "Nakit / kart"],
            ]}
          />
          <Callout type="tip" title="Kısa telaffuz">
            <MiniTable
              head={["Yazı", "Okunuş (TR)", "Örnek"]}
              rows={[
                ["eu/äu", "oy", "Euro → oy-ro"],
                ["sp/st (başta)", "şp/şt", "Spiel / Straße"],
                ["ie", "ii", "viele → fiile"],
              ]}
            />
          </Callout>
        </Explain>

        <Explain title="Mini diyalog" lead="Soru–cevap">
          <Examples
            items={[
              {
                en: "Wie viel kostet das?",
                tr: "Bu ne kadar?",
                pron: "vi fil kostet das",
              },
              {
                en: "Es kostet 12 Euro 50.",
                tr: "12 Euro 50.",
                pron: "es kostet zwöl(f) oy-ro fynf-tsiH",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

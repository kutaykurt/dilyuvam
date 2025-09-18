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

export default function MenuBasics() {
  return (
    <div className="ffh-sub ffh-sub--menu" data-sub="menu-basics">
      <section
        className="ffh-section ffh-section--menu"
        data-toc-title="Menü & sipariş"
      >
        <Explain title="Speisekarte & Bestellen" lead="Kibar formüller">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Die Speisekarte, bitte.",
                "Menü lütfen.",
                "di şpayzə-karte, bitte",
              ],
              ["Was empfehlen Sie?", "Ne önerirsiniz?", "vas emp-feylen zi"],
              ["Ich hätte gern ...", "... istiyorum (kibar).", "ih hette gern"],
              [
                "Für mich ..., bitte.",
                "Benim için ..., lütfen.",
                "füa miH ..., bitte",
              ],
              [
                "Zum Hieressen / Zum Mitnehmen",
                "Burada / Paket",
                "tsum hiA-esen / tsum mit-ney-men",
              ],
              [
                "Klein / Mittel / Groß",
                "Küçük / Orta / Büyük",
                "klayn / mitl / gros",
              ],
              [
                "Still / mit Sprudel (Wasser)",
                "Düz / sodalı (su)",
                "ştil / mit şprudel",
              ],
            ]}
          />
          <Formula
            rows={[
              [
                "İçecek",
                "Ein Kaffee / eine Cola / ein Wasser",
                "Artikel dikkat",
              ],
              [
                "Sipariş",
                "Ich nehme die Nummer 5.",
                "5 numarayı alıyorum",
              ],
              [
                "Soru",
                "Gibt es eine Tageskarte?",
                "Günün menüsü var mı?",
              ],
            ]}
          />
          <Callout type="warning" title="‘Ich will’ yerine">
            <p>
              A1’de kibar kal: <Key>Ich hätte gern</Key> / <Key>Ich möchte</Key>
              .
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="Kısa sipariş" lead="Soru→sipariş">
          <Examples
            items={[
              {
                en: "Was empfehlen Sie? – Die Suppe ist sehr gut.",
                tr: "Ne önerirsiniz? – Çorba çok iyi.",
                pron: "vas empfeylen zi – di zuppe ist zea gut",
              },
              {
                en: "Für mich eine Pizza Margherita, bitte.",
                tr: "Benim için bir Margherita pizza lütfen.",
                pron: "füa miH aynə pizza margetita, bitte",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

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

export default function PayingTableTalk() {
  return (
    <div className="ffh-sub ffh-sub--paying" data-sub="paying-table-talk">
      <section
        className="ffh-section ffh-section--pay"
        data-toc-title="Hesap & masa sohbeti"
      >
        <Explain
          title="Zahlen & am Tisch"
          lead="Hesap isteme, ödeme, küçük diyaloglar"
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              ["Zahlen, bitte.", "Hesap lütfen.", "tsalen, bitte"],
              [
                "Zusammen oder getrennt?",
                "Birlikte mi ayrı mı?",
                "tsuzamen oda getrent",
              ],
              [
                "Bar oder mit Karte?",
                "Nakit mi kartla mı?",
                "bar oda mit karte",
              ],
              ["Die Rechnung, bitte.", "Hesap lütfen.", "di reHnung, bitte"],
              ["Stimmt so.", "Üstü kalsın.", "ştimt zo"],
              [
                "Können wir reservieren?",
                "Rezervasyon yapabilir miyiz?",
                "könnən viA rezervi-ren",
              ],
              [
                "Einen Tisch für zwei, bitte.",
                "İki kişilik bir masa lütfen.",
                "aynən tiş füa tsvay, bitte",
              ],
              [
                "um 19 Uhr auf den Namen …",
                "saat 19, … adına",
                "um noyn-tsen uua auf den namen",
              ],
            ]}
          />
          <Formula
            rows={[
              [
                "Ödeme",
                "Das macht 24 Euro. – Mit Karte, bitte.",
                "Toplam + ödeme yöntemi",
              ],
              [
                "Bahşiş",
                "Stimmt so / Der Rest ist für Sie.",
                "Üstü kalsın / üstü sizin için",
              ],
            ]}
          />
          <Callout type="info" title="Kibar kapanış">
            <p>
              <Key>Danke, ebenso. Schönen Abend!</Key> – “Teşekkürler, size de.
              İyi akşamlar!”
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="Hesap" lead="Kısa örnek">
          <Examples
            items={[
              {
                en: "Die Rechnung, bitte. – Zusammen oder getrennt? – Zusammen, bitte.",
                tr: "Hesap lütfen. – Birlikte mi ayrı mı? – Birlikte lütfen.",
                pron: "di reHnung, bitte – tsuzamen oda getrent – tsuzamen, bitte",
              },
              {
                en: "Das macht 18 Euro. – Mit Karte, bitte. – Die PIN, bitte.",
                tr: "Toplam 18 Euro. – Kartla lütfen. – PIN lütfen.",
                pron: "das maHt aHtsen oy-ro – mit karte, bitte – di pin, bitte",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

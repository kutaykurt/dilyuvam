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

export default function PaymentCheckout() {
  return (
    <div className="ffh-sub ffh-sub--payment" data-sub="payment-checkout">
      <section
        className="ffh-section ffh-section--payment"
        data-toc-title="Ödeme & kasa"
      >
        <Explain title="Bezahlen & Kasse" lead="Kart / nakit / fiş">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              ["Ich bezahle bar.", "Nakit öderim.", "ih be-tsale bar"],
              ["Ich zahle mit Karte.", "Kartla öderim.", "ih tsale mit karte"],
              ["Die PIN bitte.", "PIN lütfen.", "di pin bitte"],
              [
                "Brauchen Sie eine Tüte?",
                "Poşet ister misiniz?",
                "brauHn zi aynə tüte",
              ],
              [
                "Möchten Sie die Quittung?",
                "Fiş ister misiniz?",
                "möHtn zi di kvitung",
              ],
              [
                "Kann ich umtauschen / zurückgeben?",
                "Değişim / iade mümkün mü?",
                "kan ih umtauşn / tsürük-ge-ben",
              ],
            ]}
          />
          <Formula
            rows={[
              ["Toplam", "Das macht 18 Euro.", "Toplam 18 €"],
              [
                "Kart ödeme",
                "Bitte bestätigen Sie mit OK.",
                "OK ile onaylayın.",
              ],
              ["İade", "innerhalb von 14 Tagen", "14 gün içinde"],
            ]}
          />
          <Callout type="info" title="Umtausch & Rückgabe">
            <p>
              Çoğu mağazada fişle <Key>Umtausch</Key> (değişim) veya{" "}
              <Key>Rückgabe</Key> (iade) mümkündür.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="Kasada" lead="Kısa örnek">
          <Examples
            items={[
              {
                en: "Zusammen oder getrennt? – Zusammen, bitte.",
                tr: "Birlikte mi ayrı mı? – Birlikte lütfen.",
                pron: "tsuzamen oda getrent – tsuzamen, bitte",
              },
              {
                en: "Kartenzahlung? – Ja, die PIN bitte.",
                tr: "Kartla ödeme? – Evet, PIN lütfen.",
                pron: "karten-tsalung – ya, di pin bitte",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

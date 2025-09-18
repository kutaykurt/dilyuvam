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

export default function RescheduleSickNote() {
  return (
    <div className="ffh-sub ffh-sub--reschedule" data-sub="reschedule-sicknote">
      <section
        className="ffh-section ffh-section--move"
        data-toc-title="Erteleme & rapor"
      >
        <Explain
          title="Verschieben/Absagen & Krankmeldung"
          lead="Kısa ve net ifadeler"
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Ich muss den Termin verschieben.",
                "Randevuyu ertelemem gerekiyor.",
                "ih mus den termin fea-şi-ben",
              ],
              [
                "Ich möchte den Termin absagen.",
                "Randevuyu iptal etmek istiyorum.",
                "ih möHte den termin ap-zagen",
              ],
              ["Ich bin krank.", "Hastayım.", "ih bin krank"],
              [
                "Ich brauche eine Krankmeldung (für die Arbeit/Schule).",
                "İşe/okula rapor gerekiyor.",
                "ih brauHe aynə krank-meldung",
              ],
              [
                "Können Sie mir die Bescheinigung geben?",
                "Raporu verebilir misiniz?",
                "könnən zi mia di be-şaynigung ge-ben",
              ],
            ]}
          />
          <Formula
            rows={[
              [
                "Yeni zaman",
                "Nächste Woche am Dienstag wäre gut.",
                "Gelecek hafta Salı iyi olurdu",
              ],
              [
                "Onay",
                "Alles klar, danke. Gute Besserung!",
                "Tamam, teşekkürler. Geçmiş olsun!",
              ],
            ]}
          />
          <Callout type="tip" title="Kibar kapanış">
            <p>
              <Key>Vielen Dank für Ihr Verständnis.</Key> – “Anlayışınız için
              teşekkürler.”
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="İptal/erteleme" lead="Kısa örnek">
          <Examples
            items={[
              {
                en: "Ich bin krank und muss den Termin leider verschieben.",
                tr: "Hastayım ve randevuyu maalesef ertelemem gerekiyor.",
                pron: "ih bin krank und mus den termin layda fea-şi-ben",
              },
              {
                en: "Kein Problem. Nächste Woche am Mittwoch?",
                tr: "Sorun değil. Gelecek hafta Çarşamba?",
                pron: "kay(n) problem – nesh-te voHe am mitvoh",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

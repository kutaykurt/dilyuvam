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

export default function TimeFrequency() {
  return (
    <div className="ffh-sub ffh-sub--time-frequency" data-sub="time-frequency">
      <section
        className="ffh-section ffh-section--time"
        data-toc-title="Saat & sıklık"
      >
        <Explain title="Uhrzeit & Häufigkeit" lead="Saatler, günler, sıklıklar">
          <MiniTable
            head={["Kalıp", "Türkçe", "Not / Okunuş (TR)"]}
            rows={[
              ["um 8 Uhr", "saat 8’de", "um aHt uua"],
              [
                "am Montag / am Wochenende",
                "Pazartesi / hafta sonu",
                "am montak / am voHenende",
              ],
              ["von ... bis ...", "…’dan …’a kadar", "fon … bis …"],
              [
                "jeden Tag / morgens / abends",
                "her gün / sabahları / akşamları",
                "yeden tag / morgns / abends",
              ],
              [
                "immer / oft / manchmal / selten / nie",
                "her zaman / sık / bazen / nadir / hiç",
                "imar / oft / manhmal / zelten / ni",
              ],
              ["gegen 18 Uhr", "yaklaşık 18", "gegn aHtsen uua"],
            ]}
          />
          <Formula
            rows={[
              [
                "Sıklık yeri",
                "Ich oft lese abends.",
                "zarflar genelde fiilden sonra",
              ],
              [
                "Zaman → Yer → Fiil",
                "Am Freitag im Büro arbeite ich.",
                "sıra kuralı",
              ],
            ]}
          />
          <Examples
            items={[
              {
                en: "Ich habe von 9 bis 17 Uhr Unterricht.",
                tr: "9’dan 17’ye kadar dersim var.",
                pron: "ih habe fon noy-n bis zib-tsen uua unter-riHt",
              },
              {
                en: "Wir treffen uns jeden Montag nach der Schule.",
                tr: "Her Pazartesi okuldan sonra buluşuyoruz.",
                pron: "viA trefn uns yeden montak nah dea şule",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

import React from "react";
import Explain from "../../../../../../../components/Explain";
import { Examples, MiniTable } from "../../../../../blocks";

export default function SmallTalkRoutine() {
  return (
    <div
      className="ffh-sub ffh-sub--smalltalk-routine"
      data-sub="smalltalk-routine"
    >
      <section
        className="ffh-section ffh-section--smalltalk"
        data-toc-title="Sohbet"
      >
        <Explain title="Small Talk über Alltag" lead="Doğal soru–cevap">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              ["Wie ist dein Tag?", "Günün nasıl?", "vi ist dayn tak"],
              [
                "Wann fängt die Schule/Arbeit an?",
                "Okul/İş ne zaman başlıyor?",
                "van fengt di şule/arbayt an",
              ],
              [
                "Was machst du nach der Arbeit?",
                "İşten sonra ne yaparsın?",
                "vas mahst du nah dea arbayt",
              ],
              [
                "Hast du am Wochenende Zeit?",
                "Hafta sonu vaktin var mı?",
                "hast du am voHenende tsayt",
              ],
            ]}
          />
          <Examples
            items={[
              {
                en: "Wann fängst du morgen an? – Um 8 Uhr.",
                tr: "Yarın ne zaman başlıyorsun? – Saat 8’de.",
                pron: "van fengst du morgen an – um aHt uua",
              },
              {
                en: "Nach der Schule gehe ich ins Fitnessstudio.",
                tr: "Okuldan sonra spor salonuna giderim.",
                pron: "nah dea şule ge-e ih ins fitnes-ştudio",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

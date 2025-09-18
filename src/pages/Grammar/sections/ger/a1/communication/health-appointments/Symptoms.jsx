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

export default function Symptoms() {
  return (
    <div className="ffh-sub ffh-sub--symptoms" data-sub="symptoms">
      <section
        className="ffh-section ffh-section--symptoms"
        data-toc-title="Belirtiler"
      >
        <Explain title="Symptome sagen" lead="Kısa ve net kalıplar">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Ich habe Kopfschmerzen.",
                "Başım ağrıyor.",
                "ih habe kopf-şmer-tsen",
              ],
              ["Ich habe Fieber.", "Ateşim var.", "ih habe fiiba"],
              ["Ich bin erkältet.", "Nezleyim/üşütmüşüm.", "ih bin er-keltet"],
              [
                "Mir ist schlecht / schwindelig.",
                "Midem bulanıyor / başım dönüyor.",
                "miA ist şleHt / şvindeliH",
              ],
              [
                "Ich habe Husten / Schnupfen.",
                "Öksürük / burun akıntısı.",
                "ih habe hustn / şnupfn",
              ],
              ["Ich bin müde.", "Yorgunum.", "ih bin mü-de"],
              [
                "Ich habe Zahnschmerzen.",
                "Dişim ağrıyor.",
                "ih habe zan-şmertsn",
              ],
            ]}
          />
          <Formula
            rows={[
              [
                "Alternatif",
                "Mir tut der Rücken weh.",
                "Sırtım ağrıyor (Dativ)",
              ],
              ["Süre", "Seit zwei Tagen.", "İki gündür"],
            ]}
          />
          <Callout type="warning" title="Hata uyarısı">
            <p>
              <Key>*Ich bin Kopfschmerzen</Key> değil. Doğrusu:{" "}
              <Key>Ich habe Kopfschmerzen</Key>.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--examples"
        data-toc-title="Diyalog"
      >
        <Explain title="Kısa diyalog" lead="Belirti → randevu">
          <Examples
            items={[
              {
                en: "Guten Tag, ich habe starke Halsschmerzen.",
                tr: "İyi günler, boğazım çok ağrıyor.",
                pron: "guten tak, ih habe ştarke hals-şmertsn",
              },
              {
                en: "Seit wann? – Seit gestern Abend.",
                tr: "Ne zamandan beri? – Dün akşamdan beri.",
                pron: "zayt van – zayt gestan abent",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

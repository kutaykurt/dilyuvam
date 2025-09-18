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
        data-modal-title="Sağlık & Randevular"
      >
        <Explain
          title="Neden ‘Gesundheit & Termine’?"
          lead="A1 düzeyinde belirtileri söylemek, randevu almak ve eczanede basit ihtiyaçları anlatmak."
        >
          <Formula
            rows={[
              [
                "Belirti",
                "Ich habe Kopfschmerzen/Fieber.",
                "Başım ağrıyor / Ateşim var",
              ],
              [
                "Belirti (dativ)",
                "Mir ist schlecht / kalt.",
                "Kendimi kötü / üşümüş hissediyorum",
              ],
              [
                "Randevu",
                "Ich hätte gern einen Termin am Montag um 10 Uhr.",
                "Pzt 10:00 için randevu istiyorum",
              ],
              [
                "Eczane",
                "Ich brauche ein Medikament gegen Husten.",
                "Öksürük için ilaç lazım",
              ],
            ]}
          />
          <Callout type="info" title="Acil durum">
            <p>
              <Term>Notruf</Term> <Key>112</Key>. Basit cümle:{" "}
              <Key>Ich brauche Hilfe.</Key>
            </p>
          </Callout>
        </Explain>

        <Explain title="Mini telaffuz" lead="En sık geçenler">
          <MiniTable
            head={["Yazı", "Okunuş (TR)", "Örnek"]}
            rows={[
              ["sch", "ş", "Schmerz → şmerts"],
              ["ie", "ii", "Fieber → fiiba"],
              ["ch (i/e/ö/ü)", "hiş/h", "ich → ih/hiş"],
            ]}
          />
          <Examples
            items={[
              {
                en: "Ich bin erkältet. Ich brauche einen Termin.",
                tr: "Üşütmüşüm. Randevu lazım.",
                pron: "ih bin er-keltet. ih brauHe aynən termin",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

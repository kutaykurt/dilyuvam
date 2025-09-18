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
        data-modal-title="Günlük Rutin: Okul & İş"
      >
        <Explain
          title="Neden ‘Alltag: Schule & Arbeit’?"
          lead="A1 seviyesinde günlük akışını saatlerle ve basit fiillerle anlatmak."
        >
          <Formula
            rows={[
              [
                "Zaman başta",
                "Um 7 Uhr stehe ich auf.",
                "Saat 7’de uyanırım/kalkarım.",
              ],
              [
                "Sıra kuralı",
                "Zeit → Verb (2. Sıra) → Subjekt",
                "Am Morgen gehe ich zur Arbeit.",
              ],
              ["Aralık", "von 9 bis 17 Uhr", "9–17 arası"],
              ["Sıklık", "Ich lerne jeden Tag Deutsch.", "Her gün"],
            ]}
          />
          <Callout type="tip" title="Ayrılabilir fiiller">
            <p>
              <Term>aufstehen, anfangen, anziehen</Term> gibi fiiller ayrılır:{" "}
              <Key>Ich stehe um 7 Uhr auf.</Key> /{" "}
              <Key>Ich fange um 9 Uhr an.</Key>
            </p>
          </Callout>
        </Explain>

        <Explain title="Mini telaffuz" lead="Rutin için sık sesler">
          <MiniTable
            head={["Yazı", "Okunuş (TR)", "Örnek"]}
            rows={[
              ["ie", "ii", "studieren → ştudii-ren"],
              ["sp/st (başta)", "şp/şt", "Sport / Straße"],
              ["ch (i/e/ö/ü)", "hiş/h", "ich → ih/hiş"],
            ]}
          />
          <Examples
            items={[
              {
                en: "Am Wochenende schlafe ich lange.",
                tr: "Hafta sonu uzun uyurum.",
                pron: "am voHenende şlafe ih lange",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

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

export default function SchoolWorkVerbs() {
  return (
    <div
      className="ffh-sub ffh-sub--school-work-verbs"
      data-sub="school-work-verbs"
    >
      <section
        className="ffh-section ffh-section--verbs"
        data-toc-title="Okul/iş fiilleri"
      >
        <Explain title="Schule/Arbeit – Verben" lead="En çok kullanılanlar">
          <MiniTable
            head={["Fiil", "Türkçe", "Örnek cümle"]}
            rows={[
              ["arbeiten", "çalışmak", "Ich arbeite von 9 bis 17 Uhr."],
              ["lernen", "öğrenmek/çalışmak", "Ich lerne Deutsch."],
              ["unterrichten", "ders vermek", "Er unterrichtet Mathe."],
              [
                "beginnen / anfangen",
                "başlamak",
                "Der Unterricht beginnt um 8 Uhr.",
              ],
              ["aufhören", "bitirmek/bırakmak", "Wir hören um 17 Uhr auf."],
              ["abgeben", "teslim etmek", "Ich gebe die Hausaufgabe ab."],
              ["teilnehmen", "katılmak", "Ich nehme am Kurs teil."],
              [
                "vorbereiten",
                "hazırlamak",
                "Ich bereite eine Präsentation vor.",
              ],
              ["aufräumen", "toparlamak", "Wir räumen das Klassenzimmer auf."],
            ]}
          />
          <Formula
            rows={[
              [
                "Ayrılabilir",
                "Ich fange um 9 Uhr an.",
                "başlamak",
              ],
              [
                "edatlar",
                "zur Schule / zur Arbeit gehen",
                "okula/işe gitmek",
              ],
            ]}
          />
          <Callout type="info" title="Öbek fiiller">
            <p>
              <Term>teilnehmen an</Term> (+Dativ), <Term>denken an</Term>{" "}
              (+Akk.). A1’de kalıp olarak öğren.
            </p>
          </Callout>
        </Explain>
      </section>
    </div>
  );
}

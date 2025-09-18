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

export default function MorningEvening() {
  return (
    <div
      className="ffh-sub ffh-sub--morning-evening"
      data-sub="morning-evening"
    >
      <section
        className="ffh-section ffh-section--morning"
        data-toc-title="Sabah–akşam"
      >
        <Explain title="Morgen–Abend-Routine" lead="Kısa, doğal cümleler">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Ich stehe um 7 Uhr auf.",
                "Saat 7’de kalkarım.",
                "ih ştee um zibn uua auf",
              ],
              [
                "Ich frühstücke und dusche.",
                "Kahvaltı yapar ve duş alırım.",
                "ih früştü-kə und duşe",
              ],
              [
                "Ich gehe zur Arbeit/Schule.",
                "İşe/okula giderim.",
                "ih ge-e tsur arbayt/şule",
              ],
              [
                "Ich mache eine Pause um 12 Uhr.",
                "Saat 12’de mola veririm.",
                "ih maHe aynə pauze um tëlf uua",
              ],
              [
                "Ich komme um 18 Uhr nach Hause.",
                "18’de eve gelirim.",
                "ih komme um aHtsen uua nah hauzə",
              ],
              [
                "Abends koche ich und lese.",
                "Akşamları yemek yapar ve okurum.",
                "abends kohe ih und leze",
              ],
              [
                "Ich gehe gegen 23 Uhr ins Bett.",
                "Yaklaşık 23 gibi yatarım.",
                "ih ge-e gegen dray-und-tsvantsiH uua ins bet",
              ],
            ]}
          />
          <Formula
            rows={[
              [
                "Önce zaman",
                "Am Morgen mache ich Sport.",
                "Sabah spor yaparım",
              ],
              [
                "Sonra",
                "Dann lerne ich Deutsch.",
                "Sonra Almanca çalışırım",
              ],
              [
                "Sıklık zarfı",
                "Ich trinke oft Tee.",
                "Sık sık çay içerim",
              ],
            ]}
          />
          <Callout type="warning" title="Fiil 2. sırada">
            <p>
              Zaman başta olsa bile fiil 2’de: <Key>Heute</Key>{" "}
              <strong>gehe</strong> ich früh schlafen.
            </p>
          </Callout>
        </Explain>
      </section>
    </div>
  );
}

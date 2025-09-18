import React from "react";
import Explain from "../../../../../../../components/Explain";
import { MiniTable, Term } from "../../../../../blocks";

const PRON_HINTS = [
  ["ei", "ay", "heißt → hayst; mein → mayn"],
  ["ie", "ii", "Wie → vii; viele → fiile"],
  ["eu/äu", "oy", "Freund → froynd; Häuser → hoyzır"],
  ["ch (i/e)", "yumuşak h/hiş", "ich → ih/hiş; richtig → riHtiH"],
  ["ch (a/o/u)", "boğaz h/kh", "Buch → buh/kh; Nacht → naHt"],
  ["s / sp / st", "z / şp / şt", "Sie → zi; Straße → ştraase"],
];

export default function Pronunciation() {
  return (
    <div className="gi-sub gi-sub--pronunciation" data-sub="pronunciation">
      <Explain
        title="Aussprache – Türkçe odaklı hızlı rehber"
        lead="ei/ie, eu/äu ve ‘ch’ seslerini erkenden doğru oturtmak, hem konuşmanı hem de dinleme-anlamanı çok hızlandırır."
      >
        <p className="gi-paragraph" data-modalizable="true">
          Kelime başındaki <Term>s</Term> çoğu zaman z gibi okunur (
          <em>Sie → zi</em>). <Term>eu/äu</Term> daima oy’dur.
          <Term>ch</Term> sesi iki farklıdır: i/e sonrası yumuşak, a/o/u sonrası
          boğaza yakın.
        </p>
        <div className="gi-table gi-table--pron">
          <MiniTable
            head={["Yazı", "Okunuş (TR)", "Örnekler"]}
            rows={PRON_HINTS}
          />
        </div>
      </Explain>
    </div>
  );
}

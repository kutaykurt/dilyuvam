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

/**
 * Odak:
 * - bei + Dativ (bei Regen/Kälte …) → TR’de “-de/-da”
 * - Wenn-Satz (A1 basit): Wenn es kalt ist, … (Nebensatz: Verb sonda)
 * - Alltag: Ich nehme … mit / Ich brauche …
 */
export default function OutfitsPhrases() {
  return (
    <div className="ffh-sub ffh-sub--phrases" data-sub="outfits-phrases">
      <section className="ffh-section" data-toc-title="Kombin & kalıplar">
        <Explain
          title="Havaya göre kombin"
          lead="Doğal iki kalıp: ‘bei + Dativ’ ve ‘wenn …’"
        >
          <Callout type="info" title="bei + Dativ (…-de/-da)">
            <p>
              <Key>Bei Regen/Kälte/Wind</Key> = “Yağmurda/soğukta/rüzgarda”.
              Ör.: <Key>Bei Regen nehme ich einen Regenschirm mit.</Key>
            </p>
          </Callout>

          <Callout type="tip" title="Wenn (koşul) + Hauptsatz">
            <p>
              <Key>Wenn es kalt ist,</Key> <strong>ziehe</strong> ich eine Mütze{" "}
              <strong>an</strong>. — Yan cümlede fiil <em>sona</em>, ana cümlede
              yine <em>V2</em>.
            </p>
          </Callout>

          <Formula
            rows={[
              [
                "Durum",
                "Bei + Dativ + Verb-2 …",
                "Bei Sonne trage ich eine Sonnenbrille.",
              ],
              [
                "Koşul",
                "Wenn …, Verb-2 …",
                "Wenn es windig ist, ziehe ich eine Jacke an.",
              ],
              [
                "Pratik",
                "Ich nehme … mit / Ich brauche …",
                "Ich nehme eine Jacke mit. / Ich brauche einen Schal.",
              ],
            ]}
          />

          <Examples
            items={[
              {
                en: "Bei Kälte trage ich einen warmen Mantel.",
                tr: "Soğukta sıcak manto giyerim.",
                pron: "bay kälte",
              },
              {
                en: "Wenn es regnet, nehme ich einen Schirm mit.",
                tr: "Yağmurda şemsiye alırım.",
                pron: "ven es reg-net",
              },
            ]}
          />

          <Callout type="warn" title="Küçük uyarılar">
            <ul className="compact-list">
              <li>
                <Key>Ich bin heiß</Key> demeyin 🙂. Hava: <Key>Es ist heiß</Key>
                . His: <Key>Mir ist heiß</Key>.
              </li>
              <li>
                <Key>Klamotten</Key> (argo) = kıyafetler. Yakın arkadaş arasında
                yaygın.
              </li>
            </ul>
          </Callout>
        </Explain>
      </section>
    </div>
  );
}

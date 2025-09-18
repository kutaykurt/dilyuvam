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

export default function EatDrinkPhrases() {
  return (
    <div className="ffh-sub ffh-sub--phrases" data-sub="eat-drink-phrases">
      <section
        className="ffh-section ffh-section--phrases"
        data-toc-title="Yeme-içme kalıpları"
      >
        <Explain
          title="Redemittel: Essen/Trinken"
          lead="Tat, açlık/susuzluk, beğeni"
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Ich habe Hunger / Durst.",
                "Açım / Susadım.",
                "ih habe hungaa / durst",
              ],
              ["Das schmeckt gut/lecker.", "Lezzetli.", "das şmekt gut/leka"],
              [
                "süß / salzig / sauer / scharf",
                "tatlı / tuzlu / ekşi / acı",
                "züs / zaltsiH / zau-a / şarf",
              ],
              [
                "Ich esse/trinke gern ...",
                "... yemekten/içmekten hoşlanırım.",
                "ih ese/trinke gern",
              ],
              ["Noch etwas?", "Başka bir şey?", "noh et-vas"],
              ["Guten Appetit!", "Afiyet olsun!", "guten apetit"],
              ["Schmeckt’s?", "Lezzetli mi?", "şmekts"],
            ]}
          />
          <Formula
            rows={[
              [
                "Beğeni",
                "Ich mag Kaffee, aber ich trinke lieber Tee.",
                "Kahveyi severim ama çayı tercih ederim.",
              ],
              [
                "En sevdiğim",
                "Ich esse am liebsten Pasta.",
                "En çok makarna yerim.",
              ],
            ]}
          />
          <Callout type="tip" title="gern / lieber / am liebsten">
            <p>
              <Key>gern</Key> = severim, <Key>lieber</Key> = daha çok tercih,{" "}
              <Key>am liebsten</Key> = en çok.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="Masa sohbeti" lead="Kısa örnekler">
          <Examples
            items={[
              {
                en: "Schmeckt’s? – Ja, sehr lecker!",
                tr: "Lezzetli mi? – Evet, çok lezzetli!",
                pron: "şmekts – ya, zea leka",
              },
              {
                en: "Ich trinke lieber Tee als Kaffee.",
                tr: "Kahvedense çayı tercih ederim.",
                pron: "ih trinke li-ba te als kafe",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

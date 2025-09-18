import React from "react";
import Explain from "../../../../../../../components/Explain";
import {
  Key,
  Term,
  MiniTable,
  Formula,
  Examples,
  Callout,
  ExerciseFill,
  ExerciseMC,
} from "../../../../../blocks";

/**
 * Odak:
 * - Mağazada nezaket: Ich hätte gern / Ich möchte / Können Sie …
 * - passen (Dativ) vs. stehen (yakışmak) vs. gefallen (hoşuma gitmek)
 * - “in Größe M / in blau” – artikelsiz kısa soru kalıpları
 */
export default function ShoppingSizes() {
  return (
    <div className="ffh-sub ffh-sub--shopping" data-sub="shopping-sizes">
      <section className="ffh-section" data-toc-title="Alışveriş & beden">
        <Explain
          title="Nezaket ve doğru fiil"
          lead="Kısa, kibar, net — mağaza dili böyle işler."
        >
          <Callout type="info" title="Kibar istekler">
            <ul className="compact-list">
              <li>
                <Key>Ich hätte gern …</Key> / <Key>Ich möchte …</Key> — A1’de en
                güvenli.
              </li>
              <li>
                <Key>Können Sie …?</Key> —{" "}
                <em>Haben Sie das in Größe M / in blau?</em>
              </li>
            </ul>
          </Callout>

          <Callout type="tip" title="Doğru fiili seç">
            <ul className="compact-list">
              <li>
                <Term>passen</Term> (+ Dativ):{" "}
                <Key>
                  Die Schuhe passen <u>mir</u> (nicht).
                </Key>
              </li>
              <li>
                <Term>stehen</Term> (yakışmak):{" "}
                <Key>
                  Die Jacke steht <u>dir</u> gut.
                </Key>
              </li>
              <li>
                <Term>gefallen</Term> (+ Dativ):{" "}
                <Key>
                  Die Farbe gefällt <u>mir</u>.
                </Key>
              </li>
            </ul>
          </Callout>

          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Haben Sie das in Größe M?",
                "Bu model M beden var mı?",
                "habn zi das in grö-sə em",
              ],
              [
                "Kann ich das anprobieren?",
                "Bunu deneyebilir miyim?",
                "kan ih das an-pro-biyren",
              ],
              [
                "Wo sind die Umkleidekabinen?",
                "Deneme kabinleri nerede?",
                "vo zint di umklay-de-kabinen",
              ],
              [
                "Es passt / passt nicht.",
                "Uygun / uygun değil.",
                "es past / past niHt",
              ],
              [
                "Es ist zu groß/klein/eng/weit.",
                "Çok büyük/küçük/dar/bol.",
                "tsu gros / klayn / eng / vayd",
              ],
              [
                "Haben Sie eine andere Farbe?",
                "Başka renk var mı?",
                "andre farbə",
              ],
              ["Der Kassenbon, bitte.", "Fiş lütfen.", "kasn-bon"],
              ["Kann ich es umtauschen?", "Değiştirebilir miyim?", "umtauşn"],
            ]}
          />

          <Formula
            rows={[
              [
                "Beden/Renk",
                "Haben Sie das in Größe L / in blau?",
                "Artikel çoğu zaman yok",
              ],
              [
                "Denemek",
                "Ich möchte das anprobieren.",
                "anziehen ≠ anprobieren",
              ],
              ["Geri bildirim", "Das ist mir zu eng / zu weit.", "Dativ ‘mir’"],
            ]}
          />

          <Examples
            items={[
              {
                en: "Die Jacke passt mir, aber die Farbe gefällt mir nicht.",
                tr: "Ceket uyuyor ama rengi hoşuma gitmedi.",
                pron: "gefällt mir niHt",
              },
              {
                en: "Kann ich mit Karte zahlen?",
                tr: "Kartla ödeyebilir miyim?",
                pron: "mit karte tsalen",
              },
            ]}
          />
        </Explain>
      </section>

      <section className="ffh-section" data-toc-title="Alıştırma">
        <Explain title="Quick Practice – Gap-fill">
          <ExerciseFill
            items={[
              {
                id: "s1",
                before: "Ich ",
                after: " das anprobieren.",
                answers: ["möchte", "würde gern"],
                hint: "kibar",
              },
              {
                id: "s2",
                before: "Die Schuhe ",
                after: " mir nicht.",
                answers: ["passen"],
                hint: "Dativ",
              },
              {
                id: "s3",
                before: "Haben Sie das in ",
                after: " L?",
                answers: ["Größe"],
                hint: "beden",
              },
              {
                id: "s4",
                before: "Die Jacke ",
                after: " dir gut.",
                answers: ["steht"],
                hint: "yakışmak",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test (MC)">
          <ExerciseMC
            items={[
              {
                q: "Hangi cümle bedenin uygun olduğunu söyler?",
                choices: [
                  "Die Jacke gefällt mir.",
                  "Die Jacke passt mir.",
                  "Die Jacke steht mir.",
                ],
                correctIndex: 1,
                explain: "passen = beden uygunluğu",
              },
              {
                q: "Mağazada en kibar istek:",
                choices: [
                  "Ich will Größe L.",
                  "Gib mir L.",
                  "Ich hätte gern Größe L.",
                ],
                correctIndex: 2,
                explain: "Ich hätte gern …",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

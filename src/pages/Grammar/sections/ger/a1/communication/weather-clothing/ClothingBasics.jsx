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
 * - Zustand (tragen/anhaben) vs. Aktion (anziehen/ausziehen)
 * - Neden Akkusativ? (giyilen şey nesne)
 * - A1 sıfat sonlarını kalıpla öğret
 * - Alltag: Pulli, Klamotten
 */
export default function ClothingBasics() {
  return (
    <div className="ffh-sub ffh-sub--clothing" data-sub="clothing-basics">
      <section className="ffh-section" data-toc-title="Kıyafet – temel">
        <Explain
          title="Zustand mı, Aktion mu?"
          lead="Almanca iki fikri ayırır: Üstünde <em>var</em> mı, yoksa <em>giyiniyor musun</em>?"
        >
          <Callout type="info" title="Üstümde ne var? (Zustand)">
            <p>
              <Key>Ich trage eine Jacke.</Key> /{" "}
              <Key>Ich habe eine Jacke an.</Key> — “Üstümde ceket var.”
              <Term>tragen</Term> (giymek), <Term>anhaben</Term> (üzerinde
              olmak).
            </p>
          </Callout>

          <Callout type="tip" title="Giyme/çıkarma (Aktion)">
            <p>
              <Key>Ich ziehe eine Jacke an.</Key> ↔{" "}
              <Key>Ich ziehe die Jacke aus.</Key> — <strong>ayrılabilir</strong>{" "}
              fiiller:
              <em>an-/aus-</em> sona gider.
            </p>
          </Callout>

          <Formula
            rows={[
              ["Zustand", "Ich trage + AKK.", "Ich trage einen Mantel."],
              [
                "Aksiyon",
                "Ich ziehe + AKK + an/aus.",
                "Ich ziehe die Schuhe an/aus.",
              ],
              [
                "Renk",
                "(eine) rote Jacke / (ein) blaues T-Shirt",
                "A1: kalıbı ezberle",
              ],
            ]}
          />

          <Callout type="warn" title="Neden Akkusativ?">
            <p>
              Giyilen nesne doğrudan <em>nesne</em> olduğu için Akkusativ alır:{" "}
              <Key>einen Mantel</Key>, <Key>eine Jacke</Key>,{" "}
              <Key>ein T-Shirt</Key>.
            </p>
          </Callout>

          <MiniTable
            head={["Artikel", "Almanca", "Türkçe"]}
            rows={[
              ["die", "Jacke", "ceket"],
              ["der", "Mantel", "manto"],
              ["der", "Pullover / Pulli (ugs.)", "kazak"],
              ["das", "T-Shirt", "tişört"],
              ["die (Pl.)", "Schuhe", "ayakkabılar"],
              ["die (Pl.)", "Socken", "çoraplar"],
              ["die", "Hose", "pantolon"],
              ["der", "Rock", "etek"],
              ["die", "Mütze", "bere"],
              ["der", "Schal", "atkı"],
            ]}
          />

          <Examples
            items={[
              {
                en: "Ich habe heute eine schwarze Jacke an.",
                tr: "Bugün siyah bir ceket üzerimde.",
                pron: "şvar-tse",
              },
              {
                en: "Ich ziehe meine Schuhe aus.",
                tr: "Ayakkabılarımı çıkarıyorum.",
                pron: "şuu-e aus",
              },
            ]}
          />
        </Explain>
      </section>

      <section className="ffh-section" data-toc-title="Hızlı pratik">
        <Explain title="Quick Practice – Gap-fill">
          <ExerciseFill
            items={[
              {
                id: "c1",
                before: "Ich trage ",
                after: " Mantel.",
                answers: ["einen"],
                hint: "der → AKK",
              },
              {
                id: "c2",
                before: "Ich ",
                after: " die Jacke an.",
                answers: ["ziehe"],
                hint: "anziehen",
              },
              {
                id: "c3",
                before: "Ich habe eine ",
                after: " Jacke an.",
                answers: ["rote"],
                hint: "sıfat",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test (MC)">
          <ExerciseMC
            items={[
              {
                q: "Zustand (üstünde var) ifadesi hangisi?",
                choices: [
                  "Ich trage eine Jacke.",
                  "Ich ziehe eine Jacke an.",
                  "Ich ziehe die Jacke aus.",
                ],
                correctIndex: 0,
                explain: "tragen/anhaben = üzerimde",
              },
              {
                q: "Doğru renk kalıbı:",
                choices: [
                  "ein blaue T-Shirt",
                  "eine blau Jacke",
                  "ein blaues T-Shirt",
                ],
                correctIndex: 2,
                explain: "A1’de kalıp: ‘ein blaues T-Shirt’",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

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
 * Lehrer-Ansatz:
 * - Warum „es ist …“? → Expletiv-es (Türkçede yok).
 * - Verbzweit (V2) im Deutschen vs. Türkçede fiil genelde sonda.
 * - Alltag: ne söylüyoruz, neyi söylemiyoruz?
 */
export default function Intro() {
  return (
    <div className="ffh-sub ffh-sub--intro" data-sub="intro">
      <section
        className="ffh-section ffh-section--lead"
        data-toc-title="Einleitung"
        data-modalizable="true"
        data-modal-title="Hava & Kıyafet"
      >
        <Explain
          title="Neden ‘Wetter & Kleidung’?"
          lead="Hava durumunu doğal anlat, ona göre giyin ve mağazada kibar konuş. A1 günlük hayatta en çok gereken üç beceri."
        >
          <Callout type="info" title="DE ↔ TR: temel farklar">
            <ul className="compact-list">
              <li>
                <strong>DE:</strong> <Key>Es ist kalt.</Key> — <Term>es</Term>{" "}
                burada “boş özne”dir, anlam taşımaz, cümle
                dengesini kurar.
              </li>
              <li>
                <strong>TR:</strong> “Hava soğuk.” / “Soğuk.” — Türkçede boş
                özne gerekmez.
              </li>
              <li>
                <strong>Wortstellung:</strong> Zaman/yer başa gelse bile fiil
                hep <Term>2. sırada</Term> kalır:
                <Key>
                  Heute <strong>ist</strong> es sonnig.
                </Key>{" "}
                /{" "}
                <Key>
                  In Berlin <strong>regnet</strong> es.
                </Key>
              </li>
            </ul>
          </Callout>

          <Formula
            rows={[
              ["Sıfatla hava", "Es ist + Adj.", "Es ist kalt / warm / windig."],
              ["Durum fiili", "Es + Verb.", "Es regnet. / Es schneit."],
              [
                "Yer/Zaman",
                "Ort/Zeit + Verb (2) + …",
                "Heute ist es sonnig. / In Köln regnet es.",
              ],
            ]}
          />

          <Callout type="tip" title="Alltagta doğal küçük kelimeler">
            <p>
              <Key>total</Key>, <Key>mega</Key>, <Key>ziemlich</Key> doğal
              güçlendiriciler: <Key>Heute ist es mega heiß.</Key>
            </p>
          </Callout>

          <MiniTable
            head={["Yan yana karşılaştır", "Almanca", "Türkçe"]}
            rows={[
              ["Boş özne", "Es ist kalt.", "Hava soğuk."],
              [
                "V2 kuralı",
                "Heute <strong>ist</strong> es sonnig.",
                "Bugün güneşli.",
              ],
              ["Durum fiili", "Es <strong>regnet</strong>.", "Yağmur yağıyor."],
            ]}
          />

          <Examples
            items={[
              {
                en: "Heute ist es bewölkt und kühl.",
                tr: "Bugün bulutlu ve serin.",
                pron: "hoytə bevölkt kül",
              },
              {
                en: "In Berlin regnet es gerade.",
                tr: "Berlin’de şu anda yağmur var.",
                pron: "in berlin reg-net",
              },
            ]}
          />
        </Explain>

        <Explain
          title="‘Mir ist kalt’ mı ‘Ich bin kalt’ mı?"
          lead="A1’de çok yapılan hata"
        >
          <Callout type="warn" title="Dativ duygu yapısı">
            <p>
              <Key>Mir ist kalt/warm.</Key> = “Bana soğuk/sıcak basıyor.” —{" "}
              <em>Dativ</em> ile hissi ifade eder.
              <strong>‘Ich bin kalt’</strong> demeyin.
            </p>
          </Callout>
        </Explain>
      </section>
    </div>
  );
}

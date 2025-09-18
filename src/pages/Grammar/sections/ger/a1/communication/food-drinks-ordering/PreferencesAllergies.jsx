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

export default function PreferencesAllergies() {
  return (
    <div className="ffh-sub ffh-sub--prefs" data-sub="preferences-allergies">
      <section
        className="ffh-section ffh-section--prefs"
        data-toc-title="Tercih & alerji"
      >
        <Explain title="Wünsche & Allergien" lead="‘mit/ohne’ + özel istekler">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Ich mag kein Schweinefleisch.",
                "Domuz eti sevmem.",
                "ih mak kayn şvayne-flaş",
              ],
              [
                "Ich bin vegetarisch/vegan.",
                "Vejetaryen/veganım.",
                "ih bin ve-ge-ta-riş / vegan",
              ],
              [
                "ohne Zwiebeln / ohne Salz",
                "soğansız / tuzsuz",
                "one tsvi-biln / one zalts",
              ],
              [
                "mit/ohne Zucker / mit Milch",
                "şekerli/şekersiz / sütlü",
                "mit/one tsuka / mit milH",
              ],
              ["nicht scharf, bitte.", "acısız lütfen.", "niHt şarf, bitte"],
              [
                "glutenfrei / laktosefrei",
                "glütensiz / laktozsuz",
                "gluten-fray / laktoze-fray",
              ],
              [
                "Ich bin allergisch gegen Nüsse.",
                "Fındığa alerjim var.",
                "ih bin aleRjiş ge-gen nüsse",
              ],
            ]}
          />
          <Formula
            rows={[
              [
                "İstek",
                "Können Sie das ohne Käse machen?",
                "Peynirsiz yapabilir misiniz?",
              ],
              [
                "Değiştirme",
                "statt Reis lieber Salat?",
                "Pilav yerine salata?",
              ],
            ]}
          />
          <Callout type="info" title="Allerji cümlesi">
            <p>
              <Key>Ich bin allergisch gegen …</Key> +{" "}
              <Term>Nüsse/Gluten/Laktose</Term>. Acil durumda:{" "}
              <Key>Ich brauche Hilfe.</Key>
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="Özel istek" lead="Kısa örnek">
          <Examples
            items={[
              {
                en: "Ohne Zwiebeln, bitte. Ich bin allergisch.",
                tr: "Soğansız lütfen. Alerjim var.",
                pron: "one tsvi-biln, bitte. ih bin aleRjiş",
              },
              {
                en: "Können Sie das vegetarisch machen?",
                tr: "Bunu vejetaryen yapabilir misiniz?",
                pron: "könnən zi das ve-ge-ta-riş maHen",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

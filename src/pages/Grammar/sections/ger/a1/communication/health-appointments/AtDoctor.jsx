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

export default function AtDoctor() {
  return (
    <div className="ffh-sub ffh-sub--at-doctor" data-sub="at-doctor-pharmacy">
      <section
        className="ffh-section ffh-section--doctor"
        data-toc-title="Doktor & muayene"
      >
        <Explain title="Beim Arzt" lead="Kısa cümlelerle durum anlatma">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Seit wann haben Sie die Schmerzen?",
                "Ağrılar ne zamandır?",
                "zayt van habən zi di şmertsn",
              ],
              [
                "Ich habe seit zwei Tagen Fieber.",
                "İki gündür ateşim var.",
                "ih habe zayt tsvay tagən fiiba",
              ],
              [
                "Ich bin gegen Penicillin allergisch.",
                "Penisiline alerjim var.",
                "ih bin ge-gen penitsilin aleRjiş",
              ],
              [
                "Hier ist meine Gesundheitskarte.",
                "Sağlık kartım burada.",
                "hiA ist maynə gezunt-hayts-karte",
              ],
              [
                "Ich brauche ein Rezept.",
                "Reçete lazım.",
                "ih brauHe ayn re-tsept",
              ],
            ]}
          />
          <Formula
            rows={[
              [
                "Öneri",
                "Sie sollen viel trinken und sich ausruhen.",
                "Bol su ve dinlenme",
              ],
              [
                "Sıklık",
                "zweimal täglich nach dem Essen.",
                "Günde iki kez yemekten sonra",
              ],
            ]}
          />
          <Callout type="info" title="Basit ölçü">
            <p>
              <Key>Tropfen / Tablette / Salbe</Key> – damla / tablet / merhem.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--pharmacy"
        data-toc-title="Eczane"
      >
        <Explain title="In der Apotheke" lead="Reçete/ilaç sorma">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Ich brauche etwas gegen Husten.",
                "Öksürük için bir şey lazım.",
                "ih brauHe et-vas ge-gen hustn",
              ],
              [
                "Haben Sie etwas gegen Schmerzen?",
                "Ağrı için bir şey var mı?",
                "habn zi et-vas ge-gen şmertsn",
              ],
              ["Ist das rezeptfrei?", "Reçetesiz mi?", "ist das re-tsept-fray"],
              [
                "Wie oft nehme ich das?",
                "Bunu ne sıklıkta alayım?",
                "vi oft neyme ih das",
              ],
            ]}
          />
          <Examples
            items={[
              {
                en: "Nehmen Sie die Tropfen dreimal täglich.",
                tr: "Damlayı günde üç kez alın.",
                pron: "neymən zi di tropfn draymal teğliH",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

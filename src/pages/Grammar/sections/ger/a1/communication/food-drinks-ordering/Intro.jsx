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

export default function Intro() {
  return (
    <div className="ffh-sub ffh-sub--intro" data-sub="intro">
      <section
        className="ffh-section ffh-section--lead"
        data-toc-title="Einleitung"
        data-modalizable="true"
        data-modal-title="Yeme-İçme & Sipariş"
      >
        <Explain
          title="Neden ‘Food & Drinks’?"
          lead="Günlük hayatta kafede/restoranda en çok gereken kalıplar."
        >
          <Formula
            rows={[
              [
                "Kibar istek",
                "Ich hätte gern / Ich möchte ...",
                "… istiyorum",
              ],
              [
                "Sipariş",
                "Für mich ... , bitte.",
                "Benim için … lütfen",
              ],
              [
                "Paket/yerinde",
                "Zum Mitnehmen / Zum Hieressen",
                "Paket / burada",
              ],
              ["Hesap", "Zahlen, bitte.", "Hesap lütfen"],
            ]}
          />
          <Callout type="tip" title="Telaffuz mini">
            <MiniTable
              head={["Yazı", "Okunuş (TR)", "Örnek"]}
              rows={[
                ["äu/eu", "oy", "bräu / Euro"],
                ["sp/st (başta)", "şp/şt", "später / Straße"],
                ["sch", "ş", "schmeckt"],
              ]}
            />
          </Callout>
        </Explain>

        <Explain title="Mini diyalog" lead="Kısa açılış">
          <Examples
            items={[
              {
                en: "Die Speisekarte, bitte.",
                tr: "Menüyü alabilir miyim?",
                pron: "di şpayzə-karte, bitte",
              },
              {
                en: "Ich hätte gern einen Kaffee und ein Wasser.",
                tr: "Bir kahve ve bir su istiyorum.",
                pron: "ih hette gern aynən kafe und ayn vasa",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

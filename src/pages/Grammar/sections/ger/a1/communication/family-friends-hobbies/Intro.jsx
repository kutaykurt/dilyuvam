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
        data-modal-title="Türkçe ↔ Almanca: Aile, arkadaş, hobiler"
      >
        <div className="rule-box ffh-rule ffh-rule--intro">
          <strong>Neden ‘Aile, Arkadaşlar, Hobiler’?</strong> Günlük sohbetin
          %80’i bu konulardan oluşur. Türkçede “<em>annem</em>,{" "}
          <em>kardeşim</em>, <em>balık tutmayı severim</em>” gibi ifadelerde
          <Term>eklerle</Term> (-im/-in/-i) anlatırız. Almancada ise bu iş çoğu
          zaman
          <Key>mein/meine</Key> gibi <Term>iyelik sözcükleri</Term> ve{" "}
          <Key>gern/mögen</Key> kalıplarıyla yapılır. A1 seviyesinde net cümle
          kalıplarıyla akıcı ve hatasız konuşmayı hedefliyoruz.
        </div>

        <Explain
          title="Önce genel fark"
          lead="Türkçede ek → Almancada ayrı kelime"
        >
          <ul className="ffh-ul ffh-ul--intro-points">
            <li>
              <Term>Benim annem</Term> = <Key>meine Mutter</Key> (dişil →{" "}
              <Key>meine</Key>).
              <Term>Benim babam</Term> = <Key>mein Vater</Key> (eril →{" "}
              <Key>mein</Key>).
            </li>
            <li>
              <Term>Sevmek / hoşlanmak</Term>: Almancada günlük konuşmada
              <Key>gern + fiil</Key> çok yaygındır:{" "}
              <em>Ich spiele gern Fußball</em>.<Key>mögen</Key> çoğunlukla
              isimlerle: <em>Ich mag Kaffee</em>.
            </li>
            <li>
              <Term>Tanıtım</Term> cümleleri kısa tutulur:{" "}
              <Key>Das ist mein Bruder.</Key> /
              <Key>Ich habe eine Schwester.</Key>
            </li>
          </ul>

          <Callout type="info" title="A1 için hedef kalıplar">
            <Formula
              rows={[
                ["Tanıtma", "Das ist mein(e) …", "Bu benim …"],
                [
                  "Sahip olma",
                  "Ich habe einen Bruder / eine Schwester.",
                  "Bir kardeşim var.",
                ],
                [
                  "Hobi (fiille)",
                  "Ich + fiil + gern",
                  "Hoşlanırım / severim.",
                ],
                [
                  "Tercih",
                  "Ich + fiil + lieber",
                  "Daha çok tercih ederim.",
                ],
                [
                  "En sevdiğim",
                  "Ich + fiil + am liebsten",
                  "En çok severim.",
                ],
              ]}
            />
          </Callout>
        </Explain>

        <Explain title="Mini diyalog" lead="Doğal ve kısa bir tanışma devamı">
          <Examples
            items={[
              {
                en: "A: Hast du Geschwister? – B: Ja, ich habe einen Bruder.",
                tr: "A: Kardeşin var mı? – B: Evet, bir erkek kardeşim var.",
                pron: "hast du geşviste – ya, ih habe aynən bruda",
              },
              {
                en: "A: Was machst du gern? – B: Ich lese gern und ich spiele Fußball.",
                tr: "A: Ne yapmayı seversin? – B: Okumayı severim ve futbol oynarım.",
                pron: "vas mahst du gern – ih leze gern und ih şpiile fußbal",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--pron"
        data-toc-title="Aussprache-Hinweise"
      >
        <Explain
          title="Aussprache – aile ve hobi kelimeleri"
          lead="Kısa ama kritik ipuçları"
        >
          <MiniTable
            head={["Yazı", "Okunuş (TR)", "Örnek"]}
            rows={[
              ["sp/st (başta)", "şp/şt", "Sport → şport; Straße → ştrase"],
              [
                "ch (i/e/ä/ö/ü’den sonra)",
                "hiş/h",
                "ich → ih/hiş; sprechen → şpreHən",
              ],
              ["r (heceden sonra)", "hafif r", "Bruder → bruda (hafif ‘r’)"],
              ["ie", "ii", "spielen → şpiilen"],
              ["äu/eu", "oy", "Freund → froynt; Leute → loytə"],
            ]}
          />
          <Callout type="tip" title="‘Freund/Freundin’ dikkat">
            <p>
              <Term>Freund</Term> erkek arkadaş, <Term>Freundin</Term> kadın
              arkadaş (romantik çağrışım da olabilir). Nötr ifade için{" "}
              <Term>Bekannter/Bekannte</Term> (tanıdık) kullanılabilir (A2’de
              ayrıntı).
            </p>
          </Callout>
        </Explain>
      </section>
    </div>
  );
}

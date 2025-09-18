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

const FAMILY_CORE = [
  ["die Mutter", "anne", "mutta"],
  ["der Vater", "baba", "fata"],
  ["die Eltern (Pl.)", "ebeveynler", "eltən"],
  ["die Tochter", "kız evlat", "toHta"],
  ["der Sohn", "erkek evlat", "zon"],
  ["die Schwester", "kız kardeş", "şvesta"],
  ["der Bruder", "erkek kardeş", "bruda"],
  ["die Frau", "eş (kadın) / kadın", "frau"],
  ["der Mann", "eş (erkek) / adam", "man"],
  ["die Großmutter (Oma)", "büyük anne", "gross-mutta / oma"],
  ["der Großvater (Opa)", "büyük baba", "gross-fata / opa"],
  ["die Tante", "teyze/hala", "tante"],
  ["der Onkel", "amca/dayı", "onkel"],
  ["die Cousine", "kuzen (kız)", "kuziine"],
  ["der Cousin", "kuzen (erkek)", "kuzeng (Fr. okunuş)"],
];

export default function Family() {
  return (
    <div className="ffh-sub ffh-sub--family" data-sub="family">
      <section
        className="ffh-section ffh-section--terms"
        data-toc-title="Aile sözlüğü"
      >
        <Explain
          title="Temel aile sözcükleri"
          lead="Önce yakın akrabalıklar. Yazım + okunuş → hızlı ezber."
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={FAMILY_CORE}
          />
          <Callout type="info" title="Çoğullar">
            <p>
              <Term>der Bruder → die Brüder</Term>,{" "}
              <Term>die Schwester → die Schwestern</Term>,
              <Term>das Kind → die Kinder</Term>. A1’de tablolarla göreceğiz;
              şimdilik kalıp olarak öğren.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--poss"
        data-toc-title="‘mein/meine’ kullanımı"
      >
        <Explain
          title="İyelik: mein / meine"
          lead="Türkçede ek (-im), Almancada ayrı sözcük"
        >
          <Formula
            rows={[
              [
                "Eril/Nötr isim",
                "mein Vater / mein Kind",
                "benim babam / benim çocuğum",
              ],
              [
                "Dişil/Çoğul",
                "meine Mutter / meine Eltern",
                "benim annem / ebeveynlerim",
              ],
              ["Senin", "dein/deine", "dein Bruder / deine Schwester"],
              [
                "Onun (erkek/kadın)",
                "sein/ihr",
                "sein Vater / ihr Vater",
              ],
            ]}
          />
          <Callout type="warning" title="Hata uyarısı">
            <p>
              <Key>*meine Vater</Key> değil → <strong>mein Vater</strong>{" "}
              (eril). Dişillerde <strong>meine</strong>:<Key>meine Mutter</Key>.
            </p>
          </Callout>
          <Examples
            items={[
              {
                en: "Das ist mein Bruder. Er heißt Ali.",
                tr: "Bu benim erkek kardeşim. Adı Ali.",
                pron: "das ist mayn bruda. ea hays(t) ali",
              },
              {
                en: "Meine Schwester wohnt in Ankara.",
                tr: "Kız kardeşim Ankara’da yaşıyor.",
                pron: "maynə şvesta vont in ankəra",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--have"
        data-toc-title="‘Ich habe …’ kalıbı"
      >
        <Explain title="Sahiplik: Ich habe …" lead="Basit ve güçlü bir kalıp">
          <Formula
            rows={[
              [
                "Var/yok",
                "Ich habe einen Bruder / Ich habe keine Schwester.",
                "Bir erkek kardeşim var / Kız kardeşim yok.",
              ],
            ]}
          />
          <Callout type="tip" title="Artikel ipucu (Akkusativ)">
            <p>
              <Term>einen Bruder</Term> (eril, Akkusativ) –{" "}
              <Term>eine Schwester</Term> (dişil). Ayrıntısı <em>Akkusativ</em>{" "}
              bölümünde; A1 için bu kalıpları ezberle.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialogs"
        data-toc-title="Diyaloglar"
      >
        <Explain title="Kısa diyaloglar" lead="Soru-cevap modelle">
          <Examples
            items={[
              {
                en: "Hast du Geschwister? – Ja, ich habe eine Schwester.",
                tr: "Kardeşin var mı? – Evet, bir kız kardeşim var.",
                pron: "hast du geşviste – ya, ih habe aynə şvesta",
              },
              {
                en: "Wie alt ist dein Bruder? – Er ist 16.",
                tr: "Kardeşin kaç yaşında? – 16.",
                pron: "vi alt ist dayn bruda – ea ist zeks-tsen",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

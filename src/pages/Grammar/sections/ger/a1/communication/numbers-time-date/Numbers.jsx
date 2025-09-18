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

const ROW_0_20 = [
  ["0", "null", "nul"],
  ["1", "eins", "ayns"],
  ["2", "zwei", "tsvay"],
  ["3", "drei", "dray"],
  ["4", "vier", "fiir"],
  ["5", "fünf", "fünf"],
  ["6", "sechs", "zeks"],
  ["7", "sieben", "ziibn"],
  ["8", "acht", "aHt"],
  ["9", "neun", "noyn"],
  ["10", "zehn", "tsen"],
  ["11", "elf", "elf"],
  ["12", "zwölf", "tsvölf"],
  ["13", "dreizehn", "dray-tsen"],
  ["14", "vierzehn", "fiir-tsen"],
  ["15", "fünfzehn", "fünf-tsen"],
  ["16", "sechzehn", "zekh-tsen"],
  ["17", "siebzehn", "ziip-tsen"],
  ["18", "achtzehn", "aHt-tsen"],
  ["19", "neunzehn", "noyn-tsen"],
  ["20", "zwanzig", "tsvansih"],
];

const ROW_TENS = [
  ["20", "zwanzig", "tsvansih"],
  ["30", "dreißig", "draysih"],
  ["40", "vierzig", "fiirtsih"],
  ["50", "fünfzig", "fünftsih"],
  ["60", "sechzig", "zekstsih"],
  ["70", "siebzig", "ziiptsih"],
  ["80", "achtzig", "aHtsih"],
  ["90", "neunzig", "noyntsih"],
  ["100", "hundert", "hundert"],
  ["1000", "tausend", "tauznt"],
];

export default function Numbers() {
  return (
    <div className="ntd-sub ntd-sub--numbers" data-sub="numbers">
      <section
        className="ntd-section ntd-section--0-20"
        data-toc-title="Zahlen 0–20"
      >
        <Explain
          title="0–20: Temel bloklar"
          lead="Önce küçük sayılar ezberlenir; büyük sayılar bunlardan türetilir."
        >
          <MiniTable
            head={["Sayı", "Almanca", "Okunuş (TR)"]}
            rows={ROW_0_20}
          />
        </Explain>
      </section>

      <section
        className="ntd-section ntd-section--build"
        data-toc-title="Sayı kuralları (21+, yüz, bin)"
      >
        <Explain
          title="Kurallar – einundzwanzig (21) mantığı"
          lead="Almanca 21, 31, … ters sıralı: önce birler, sonra “und”, sonra onlar."
        >
          <Formula
            rows={[
              [
                "21",
                "ein + und + zwanzig",
                "einundzwanzig",
              ],
              ["34", "vier + und + dreißig", "vierunddreißig"],
              ["58", "acht + und + fünfzig", "achtundfünfzig"],
              ["99", "neun + und + neunzig", "neunundneunzig"],
              ["100", "(ein)hundert", "einhundert / hundert"],
              ["101", "hundert + eins", "einhunderteins (genelde ‘und’ yok)"],
              ["135", "hundert + fünfunddreißig", "einhundertfünfunddreißig"],
              ["1000", "(ein)tausend", "eintausend / tausend"],
              ["2024", "zweitausendvierundzwanzig", "tek parça yazılır"],
            ]}
          />
          <Callout type="tip" title="Telefon & numara okuma">
            <p>
              Telefon numaraları çoğu zaman <strong>tek tek</strong> ya da{" "}
              <strong>çiftli</strong> okunur:
              <em> 0176 45 32</em> →{" "}
              <em>null eins sieben sechs, fünfundvierzig, zweiunddreißig</em>.
            </p>
          </Callout>
          <Callout type="info" title="Fiyat & ondalık">
            <p>
              <Key>Virgül</Key> ondalık: <em>3,50 €</em> →{" "}
              <strong>drei Euro fünfzig</strong>. “Nokta” kullanma; Almanca’da
              ondalık = virgül.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ntd-section ntd-section--tens"
        data-toc-title="Onlar & yüzler"
      >
        <Explain
          title="Onlar & yüzler tablo"
          lead="Yazım küçük farklara dikkat."
        >
          <MiniTable
            head={["Sayı", "Almanca", "Okunuş (TR)"]}
            rows={ROW_TENS}
          />
        </Explain>
      </section>

      <section
        className="ntd-section ntd-section--mistakes"
        data-toc-title="Sık hatalar"
      >
        <Explain title="Sık hatalar" lead="Kısa düzeltmeler">
          <ul className="ntd-ul ntd-ul--mistakes">
            <li>
              <Key>*zwai</Key> değil → <strong>zwei</strong> <em>(tsvay)</em>.
            </li>
            <li>
              <Key>*dreisig</Key> değil → <strong>dreißig</strong>{" "}
              <em>(dray-sih)</em>.
            </li>
            <li>
              <Key>*neunzig-neun</Key> değil → <strong>neunundneunzig</strong>.
            </li>
          </ul>
          <Examples
            items={[
              {
                en: "Das T-Shirt kostet 19,99 €.",
                tr: "Tişört 19,99 €.",
                pron: "das tii-şört kostet noyntseyn, noynunnointsih oyro",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

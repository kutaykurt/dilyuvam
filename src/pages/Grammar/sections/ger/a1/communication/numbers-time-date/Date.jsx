import React from "react";
import { Link } from "react-router-dom";
import Explain from "../../../../../../../components/Explain";
import {
  Key,
  Term,
  MiniTable,
  Formula,
  Examples,
  Callout,
} from "../../../../../blocks";

const DAYS = [
  ["Montag", "Pazartesi", "montak"],
  ["Dienstag", "Salı", "diinstak"],
  ["Mittwoch", "Çarşamba", "mitvoh"],
  ["Donnerstag", "Perşembe", "donastak"],
  ["Freitag", "Cuma", "fraytak"],
  ["Samstag / Sonnabend", "Cumartesi", "zamstak / zonabnt"],
  ["Sonntag", "Pazar", "zontak"],
];

const MONTHS = [
  ["Januar", "Ocak", "yanuar"],
  ["Februar", "Şubat", "februar"],
  ["März", "Mart", "merts"],
  ["April", "Nisan", "april"],
  ["Mai", "Mayıs", "may"],
  ["Juni", "Haziran", "yuni"],
  ["Juli", "Temmuz", "yuli"],
  ["August", "Ağustos", "august"],
  ["September", "Eylül", "zeptemba"],
  ["Oktober", "Ekim", "oktooba"],
  ["November", "Kasım", "novemba"],
  ["Dezember", "Aralık", "detsemba"],
];

export default function DatePage() {
  return (
    <div className="ntd-sub ntd-sub--date" data-sub="date">
      <section
        className="ntd-section ntd-section--format"
        data-toc-title="Tarih biçimi & okunuş"
      >
        <Explain
          title="Tarih nasıl yazılır ve okunur?"
          lead="Biçim: <Key>Tag.Monat.Jahr</Key> → 31.05.2025. Okurken gün için sıra sayısı kullanılır."
        >
          <Formula
            rows={[
              ["Yazım", "31.05.2025", "31 Mayıs 2025"],
              ["Okunuş (kısa)", "am 31.5.2025", "31.05.2025’te"],
              [
                "Okunuş (tam)",
                "am einunddreißigsten Mai 2025",
                "31 Mayıs 2025’te",
              ],
            ]}
          />
          <Callout type="info" title="Sıra sayısı (1.–31.)">
            <p>
              1.–19. için <strong>-te</strong>, 20. ve sonrası için{" "}
              <strong>-ste</strong>:{" "}
              <em>
                der erste, der zweite, der dritte … der zwanzigste, der
                einundzwanzigste
              </em>
              . Tarihte genelde <Term>am</Term> + <Term>—ten/-sten</Term>{" "}
              kullanılır: <Key>am dritten Mai</Key>.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ntd-section ntd-section--days"
        data-toc-title="Günler & aylar"
      >
        <Explain
          title="Günler – hafta Pazartesi başlar"
          lead="Almancada takvim haftası Pazartesi ile başlar (Montag)."
        >
          <MiniTable head={["Almanca", "Türkçe", "Okunuş (TR)"]} rows={DAYS} />
        </Explain>

        <Explain
          title="Aylar"
          lead="Juni/Juli ayrımına dikkat: ikisi de ‘y’ ile başlar."
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={MONTHS}
          />
        </Explain>
      </section>

      <section
        className="ntd-section ntd-section--preps"
        data-toc-title="Edatsal kalıplar (am/um/im)"
      >
        <Explain
          title="Doğru edatı seç"
          lead="Zaman ifadelerinde küçük kelimeler anlamı belirler."
        >
          <MiniTable
            head={["Kalıp", "Anlam", "Örnek"]}
            rows={[
              ["am + Gün/Tarih", "…’da (gün/tarihler)", "am Montag; am 3. Mai"],
              ["um + Saat", "…’da (saat)", "um 8 Uhr"],
              [
                "im + Ay/Yıl/Mevsim",
                "…de/da (zaman aralığı)",
                "im Januar; im Jahr 2025; im Sommer",
              ],
              [
                "am Wochenende",
                "Hafta sonu",
                "am Wochenende arbeiten wir nicht.",
              ],
            ]}
          />
          <Callout type="warning" title="Karışıklık uyarısı">
            <p>
              <Term>am</Term> gün/tarih içindir; <Term>um</Term> saat içindir;{" "}
              <Term>im</Term> ay/yıl/mevsim içindir.
              <Key>*im Montag</Key> veya <Key>*am 8 Uhr</Key> hatalıdır.
            </p>
          </Callout>
        </Explain>

        <Explain title="Diyaloglar" lead="Doğal örnekler">
          <Examples
            items={[
              {
                en: "Der Termin ist am 12. Oktober um 14 Uhr.",
                tr: "Randevu 12 Ekim saat 14:00’te.",
                pron: "dea termin ist am zölf oktooba um fiat tseyn uua",
              },
              {
                en: "Im Juli haben wir Urlaub.",
                tr: "Temmuz’da iznimiz var.",
                pron: "im yuli habn viA ualaop",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="ntd-section ntd-section--cta"
        data-toc-title="Mini-Test bağlantısı"
      >
        <Callout type="tip" title="Kontrol zamanı">
          <p>Hazırsan mini teste geç:</p>
          <p>
            <Link className="quiz-link btn" to="../quiz">
              Mini-Teste git
            </Link>
          </p>
        </Callout>
      </section>
    </div>
  );
}

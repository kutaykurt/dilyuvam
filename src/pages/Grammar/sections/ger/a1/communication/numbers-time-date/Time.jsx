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

export default function Time() {
  return (
    <div className="ntd-sub ntd-sub--time" data-sub="time">
      <section
        className="ntd-section ntd-section--ask"
        data-toc-title="Saat sorma"
      >
        <Explain title="Saat sorma" lead="İki kalıp yaygın ve eşdeğer:">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              ["Wie spät ist es?", "Saat kaç?", "vi şpeet ist es"],
              ["Wie viel Uhr ist es?", "Saat kaç?", "vi fiil uua ist es"],
            ]}
          />
        </Explain>
      </section>

      <section
        className="ntd-section ntd-section--say"
        data-toc-title="Saat söyleme"
      >
        <Explain
          title="Saat söyleme: tam saat"
          lead="<Term>Es ist</Term> + sayı + <Term>Uhr</Term>"
        >
          <MiniTable
            head={["Saat", "Almanca", "Okunuş (TR)"]}
            rows={[
              ["08:00", "Es ist acht Uhr.", "es ist aHt uua"],
              ["14:00", "Es ist vierzehn Uhr.", "es ist fiirtsen uua"],
              ["20:00", "Es ist zwanzig Uhr.", "es ist tsvansih uua"],
            ]}
          />
        </Explain>

        <Explain
          title="Yarım & çeyrek – büyük fark!"
          lead="Almancada <Key>halb</Key> sonraki saate yarım kala demektir."
        >
          <MiniTable
            head={["Saat", "Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "08:30",
                "Es ist halb neun.",
                "Sekiz buçuk.",
                "es ist halp noyn",
              ],
              [
                "07:15",
                "Viertel nach sieben.",
                "Yediyi çeyrek geçe.",
                "firtl nah ziibn",
              ],
              [
                "07:45",
                "Viertel vor acht.",
                "Sekize çeyrek kala.",
                "firtl foa aHt",
              ],
              ["08:05", "fünf nach acht.", "Sekizi beş geçe.", "fünf nah aHt"],
              ["07:55", "fünf vor acht.", "Sekize beş kala.", "fünf foa aHt"],
            ]}
          />
          <Callout type="warning" title="Karışıklık uyarısı">
            <p>
              <Key>halb neun</Key> = 08:30. Türkçedeki “dokuz buçuk” = 21:30
              değil, 9:30’dur. Almancada “yarım” ifadesi{" "}
              <strong>bir sonraki saat</strong> baz alınarak söylenir.
            </p>
          </Callout>
        </Explain>

        <Explain
          title="Zaman edatları (randevu/plan)"
          lead="A1 için işlevsel küçük kelimeler"
        >
          <MiniTable
            head={["Kalıp", "Anlam", "Örnek"]}
            rows={[
              ["um + Saat", "…’da", "um 9 Uhr (saat 9’da)"],
              ["von … bis …", "…’dan …’a kadar", "von 8 bis 12 Uhr"],
              ["ab", "itibaren", "ab morgen / ab 10 Uhr"],
              ["seit", "den beri", "seit 2019; seit zwei Stunden"],
              ["gegen", "civarında", "gegen 18 Uhr (18:00 gibi)"],
              ["am Morgen/Abend", "sabah/akşam", "am Abend lerne ich Deutsch."],
            ]}
          />
        </Explain>

        <Explain title="Kısa diyaloglar" lead="Doğal kullanımı gör">
          <Examples
            items={[
              {
                en: "A: Wann treffen wir uns? – B: Um halb acht.",
                tr: "A: Ne zaman buluşuyoruz? – B: Yedi buçukta.",
                pron: "van treffen viA uns – um halp aHt",
              },
              {
                en: "A: Der Kurs ist von 9 bis 12 Uhr.",
                tr: "A: Kurs 9’dan 12’ye kadar.",
                pron: "dea kurs ist fon noyN bis zölf uua",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="ntd-section ntd-section--cta"
        data-toc-title="Mini-Test bağlantısı"
      >
        <Callout type="tip" title="Hazır mısın?">
          <p>Bu konunun mini testini ayrı sayfada çözmek için tıkla:</p>
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

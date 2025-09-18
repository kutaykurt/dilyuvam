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
 * Bu dosya:
 * - Bilet isteme kalıpları (kibar ve kısa).
 * - Bilet türleri ve otomat/gişe diyalogları.
 * - Ödeme, damgalama (entwerten), sık kalıplar.
 */
export default function Tickets() {
  return (
    <div className="ffh-sub ffh-sub--tickets" data-sub="tickets">
      <section className="ffh-section" data-toc-title="Bilet & kalıplar">
        <Explain
          title="Kibar ve doğal istek kalıpları"
          lead="A1’de en güvenli cümleler kısa, net ve kibar olandır."
        >
          <p>
            Mağaza ve gişe dilinde hedefimiz “dürüstçe ne istediğimizi kısa ve
            kibarca” söylemektir. Almancada bunun altın standardı{" "}
            <Key>Ich hätte gern …</Key> ve <Key>Ich möchte …</Key> kalıplarıdır.
            Bu kalıplar talebi yumuşatır; “Ich will …” (istiyorum) kaba
            duyulabilir. Miktar belirtirken
            <Key>Einmal / Zweimal …</Key> kullanılır:{" "}
            <Key>Einmal nach Köln, bitte.</Key> Gişede veya otomat başında soru
            cümleleri de kısa kalır: <Key>Wo kann ich ein Ticket kaufen?</Key>,
            <Key>Wie viel kostet das?</Key>, <Key>Mit Karte, bitte.</Key>
          </p>
          <p>
            Birçok şehirde “bileti damgalama/aktive etme” sistemi vardır.
            Almancası <Term>entwerten</Term>’dir:
            <Key>Bitte entwerten</Key> uyarısını görürsen, turnike/cihazda
            bileti okutup geçerlileştirmen gerekir. Aksi hâlde kontrol sırasında
            ceza ödersin. Otomatta kararsızsan, kalıbı sade tut:
            <Key>Ich möchte eine Tageskarte, bitte.</Key> (Günlük bilet
            istiyorum, lütfen.)
          </p>

          <Formula
            rows={[
              [
                "İstek",
                "Ich hätte gern … / Ich möchte …",
                "Ich hätte gern eine Tageskarte.",
              ],
              [
                "Soru",
                "Könnte/Kann ich …?",
                "Könnte ich ein Ticket nach Köln?",
              ],
              ["Miktar", "Einmal / Zweimal …", "Zweimal nach Bonn, bitte."],
            ]}
          />

          <MiniTable
            head={["Almanca", "Türkçe", "Not (A1)"]}
            rows={[
              ["Einzelfahrkarte", "tek biniş", "Kısa yolculuklar"],
              ["Tageskarte", "günlük bilet", "Gün boyu sınırsız"],
              [
                "Wo kann ich ein Ticket kaufen?",
                "Nereden bilet alabilirim?",
                "am Automaten / am Schalter / online",
              ],
              ["Wie viel kostet das?", "Bu ne kadar?", "€"],
              ["Mit Karte, bitte.", "Kartla lütfen.", "çok doğal"],
              [
                "Bitte entwerten.",
                "Lütfen onaylayın/damgalayın.",
                "bazı şehirlerde zorunlu",
              ],
            ]}
          />

          <Examples
            items={[
              {
                en: "Einmal nach Köln, bitte. Mit Karte.",
                tr: "Köln’e bir bilet lütfen. Kartla.",
                pron: "aynmal nah köln",
              },
              {
                en: "Ich möchte eine Tageskarte, bitte.",
                tr: "Bir günlük bilet istiyorum, lütfen.",
                pron: "tages-karte",
              },
            ]}
          />
        </Explain>
      </section>

      <section className="ffh-section" data-toc-title="Hızlı pratik">
        <Explain title="Alıştırma – Boşluk doldurma">
          <ExerciseFill
            items={[
              {
                id: "tk1",
                before: "Ich ",
                after: " gern eine Einzelfahrkarte.",
                answers: ["hätte", "möchte"],
                hint: "kibar istek",
              },
              {
                id: "tk2",
                before: " ",
                after: " nach Bonn, bitte.",
                answers: ["Einmal", "Zweimal"],
                hint: "miktar kelimesi",
              },
              {
                id: "tk3",
                before: "Wie viel ",
                after: " das?",
                answers: ["kostet"],
                hint: "fiyat",
              },
              {
                id: "tk4",
                before: "Kann ich ",
                after: " Karte zahlen?",
                answers: ["mit"],
                hint: "ödeme aracı",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "Kibar ve kısa sipariş hangisi?",
                choices: [
                  "Ich will ein Ticket.",
                  "Ein Ticket nach Köln, bitte.",
                  "Gib mir ein Ticket.",
                ],
                correctIndex: 1,
                explain: "Kısa + ‘bitte’ günlük dilde çok doğal.",
              },
              {
                q: "‘Gişede’ bilet almak için doğru ifade:",
                choices: ["am Schalter", "am Teller", "im Regal"],
                correctIndex: 0,
                explain: "Schalter = gişe.",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

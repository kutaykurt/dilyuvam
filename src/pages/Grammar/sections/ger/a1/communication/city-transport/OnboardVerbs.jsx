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
 * - einsteigen / aussteigen / umsteigen ayrılabilen fiilleri derinlemesine açıklar.
 * - in + Akk. (içine hareket) ve an + Dativ (konum) farkını netleştirir.
 * - Gerçek anons ve uyarıları tanıtır.
 */
export default function OnboardVerbs() {
  return (
    <div className="ffh-sub ffh-sub--verbs" data-sub="onboard-verbs">
      <section className="ffh-section" data-toc-title="Binmek–inmek–aktarma">
        <Explain
          title="Ayrılabilen fiiller: ein-/aus-/umsteigen"
          lead="Önek ayrılır, çekimli fiil ikinci sırada, önek cümlenin sonuna gider."
        >
          <p>
            Almancada bazı fiiller ayrılabilirdir (<Term>trennbare Verben</Term>
            ).
            <Term>einsteigen</Term> (binmek), <Term>aussteigen</Term> (inmek) ve{" "}
            <Term>umsteigen</Term> (aktarma yapmak) bu gruptadır. Basit cümlede
            çekimlenen fiil ikinci sıraya gelir, önek ise en sona gider:
            <Key>
              Ich <strong>steige</strong> in den Bus <strong>ein</strong>.
            </Key>
            ,
            <Key>
              Ich <strong>steige</strong> an der Haltestelle{" "}
              <strong>aus</strong>.
            </Key>
            <Key>
              Ich <strong>steige</strong> in die U2 <strong>um</strong>.
            </Key>
            Türkçede tek bir fiil (“binmek”, “inmek”, “aktarma yapmak”) yeter;
            Almanca ise yön/işlemi önekle gösterir.
          </p>
          <p>
            Burada iki edatla durum netleşir: <Key>in + Akk.</Key>{" "}
            <em>içine doğru hareketi</em> gösterir (<Key>in den Bus</Key>),{" "}
            <Key>an + Dativ</Key> ise <em>konumu</em> belirtir (
            <Key>an der Haltestelle</Key>). Bu ayrımı hissedersen, cümleleri
            otomatik kurarsın. Günlük dilde bu fiiller çok kullanılır;
            anonslarda da duyarsın.
          </p>

          <Formula
            rows={[
              [
                "Binmek",
                "Ich steige <u>in den</u> Bus <strong>ein</strong>.",
                "in + Akk. (içine)",
              ],
              [
                "İnmek",
                "Ich steige <u>an der</u> Haltestelle <strong>aus</strong>.",
                "an + Dativ (yer)",
              ],
              [
                "Aktarma",
                "Ich steige <u>in die</u> U2 <strong>um</strong>.",
                "in + Akk. (yeni araca)",
              ],
            ]}
          />

          <MiniTable
            head={["Anons/Uyarı", "Türkçe", "Not"]}
            rows={[
              ["Nächster Halt: …", "Sıradaki durak: …", "Otobüs/tram anonsu"],
              [
                "Bitte hier einsteigen / aussteigen.",
                "Lütfen buradan binin / inin.",
                "kibar emir",
              ],
              ["Türen schließen.", "Kapılar kapanıyor.", "çok sık duyulur"],
            ]}
          />

          <Examples
            items={[
              {
                en: "Ich steige in den Bus ein und am Markt aus.",
                tr: "Otobüse binerim ve Markt’ta inerim.",
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
                id: "vb1",
                before: "Ich steige ",
                after: " den Bus ein.",
                answers: ["in"],
                hint: "in + Akk.",
              },
              {
                id: "vb2",
                before: "Ich steige ",
                after: " der Haltestelle aus.",
                answers: ["an"],
                hint: "konum",
              },
              {
                id: "vb3",
                before: "Ich steige in die U2 ",
                after: ".",
                answers: ["um"],
                hint: "önek sona",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "Doğru cümle hangisi?",
                choices: [
                  "Ich steige in dem Bus ein.",
                  "Ich steige in den Bus ein.",
                  "Ich steige zum Bus ein.",
                ],
                correctIndex: 1,
                explain: "in + Akkusativ: in den Bus.",
              },
              {
                q: "Anons çevirisi: ‘Nächster Halt’ ne demek?",
                choices: ["Sonraki istasyon", "Sıradaki durak", "İniş kapısı"],
                correctIndex: 1,
                explain: "Halt = durak.",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

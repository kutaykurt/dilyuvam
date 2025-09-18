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

export default function Hobbies() {
  return (
    <div className="ffh-sub ffh-sub--hobbies" data-sub="hobbies">
      <section
        className="ffh-section ffh-section--gern"
        data-toc-title="gern / mögen / lieber"
      >
        <Explain
          title="Hoşlanma ve tercih"
          lead="Günlük dilde ‘severim’ için en doğal kalıp <Key>gern</Key>’dir (fiille). <Key>mögen</Key> ise çoğunlukla isimlerle."
        >
          <Formula
            rows={[
              [
                "Hoşlanırım",
                "Ich + fiil + gern",
                "Ich schwimme gern.",
              ],
              [
                "Severim (isimle)",
                "Ich mag Kaffee.",
                "Kahveyi severim.",
              ],
              [
                "Daha çok severim",
                "Ich + fiil + lieber",
                "Ich koche lieber.",
              ],
              [
                "En çok severim",
                "Ich + fiil + am liebsten",
                "Ich reise am liebsten.",
              ],
              [
                "Sevmem / hoşlanmam",
                "nicht gern",
                "Ich tanze nicht gern.",
              ],
            ]}
          />
          <Callout type="warning" title="Hata uyarısı">
            <p>
              <Key>*Ich gern schwimme</Key> değil →{" "}
              <strong>Ich schwimme gern</strong> (gern her zaman fiille
              birlikte).
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--verbs"
        data-toc-title="Hobi fiilleri"
      >
        <Explain title="Sık fiiller" lead="A1’de en çok bunlar kullanılır">
          <MiniTable
            head={["Fiil", "Türkçe", "Örnek cümle"]}
            rows={[
              ["spielen", "oynamak (spor/oyun)", "Ich spiele Fußball/Karten."],
              ["machen", "yapmak", "Ich mache Fotos."],
              ["gehen", "gitmek", "Ich gehe joggen / ins Kino."],
              ["lesen", "okumak", "Ich lese gern Bücher."],
              ["kochen/backen", "yemek/pişirmek", "Ich koche gern Pasta."],
              ["schwimmen", "yüzmek", "Ich schwimme im Sommer gern."],
              ["Musik hören", "müzik dinlemek", "Ich höre gern Musik."],
              ["fernsehen", "televizyon izlemek", "Ich sehe abends fern."],
            ]}
          />
          <Callout type="tip" title="Ayrılabilen fiil örneği">
            <p>
              <Term>fernsehen</Term> ayrılabilir: <Key>Ich sehe</Key> abends{" "}
              <Key>fern</Key>. Ayrıntısı “Trennbare Verben” bölümünde.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialogs"
        data-toc-title="Diyaloglar"
      >
        <Explain title="Kısa diyaloglar" lead="Hoşlanma ve tercihleri söyle">
          <Examples
            items={[
              {
                en: "Was machst du in deiner Freizeit? – Ich spiele gern Volleyball.",
                tr: "Boş zamanında ne yaparsın? – Voleybol oynamayı severim.",
                pron: "vas mahst du in dayna fraayt-tsayt – ih şpiile gern voleybal",
              },
              {
                en: "Magst du Kaffee? – Ja, aber ich trinke lieber Tee.",
                tr: "Kahveyi sever misin? – Evet, ama çayı daha çok tercih ederim.",
                pron: "makst du kafe – ya, aba ih trinke li:ba tee",
              },
              {
                en: "Ich reise am liebsten im Sommer.",
                tr: "En çok yazın seyahat etmeyi severim.",
                pron: "ih rayzə am li:pstn im zomma",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--cta"
        data-toc-title="Mini-Test bağlantısı"
      >
        <Callout type="tip" title="Hazır mısın?">
          <p>Bu ünitenin mini testini ayrı sayfada çözmek için tıkla:</p>
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

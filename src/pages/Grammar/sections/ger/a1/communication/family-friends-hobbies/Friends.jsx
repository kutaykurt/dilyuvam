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

export default function Friends() {
  return (
    <div className="ffh-sub ffh-sub--friends" data-sub="friends">
      <section
        className="ffh-section ffh-section--people"
        data-toc-title="İnsanları tanımlama"
      >
        <Explain
          title="Kişi tanımlama – prädikativ sıfat"
          lead="A1’de isimden sonra yalın sıfatla tanımlarız."
        >
          <Formula
            rows={[
              [
                "Kalıp",
                "Subjekt + sein + Adjektiv",
                "Er ist freundlich. / Sie ist sportlich.",
              ],
              [
                "Genişletme",
                "sehr/nicht",
                "Sie ist sehr nett. Er ist nicht ruhig.",
              ],
            ]}
          />
          <MiniTable
            head={["Adjektiv", "Türkçe", "Örnek cümle"]}
            rows={[
              ["nett", "kibar", "Sie ist nett."],
              ["ruhig", "sakin", "Er ist ruhig."],
              ["offen", "açık (sözlü)", "Sie ist offen und hilfsbereit."],
              ["sportlich", "sportif", "Er ist sportlich."],
              ["lustig", "komik", "Er ist lustig."],
              ["freundlich", "güler yüzlü", "Die Leute sind freundlich."],
            ]}
          />
          <Callout type="warning" title="Hata uyarısı">
            <p>
              <Key>*Sie ist eine nett</Key> değil →{" "}
              <strong>Sie ist nett</strong>. A1’de ‘yüklem konumu’nda sıfat{" "}
              <Term>ek almaz</Term>.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--meet"
        data-toc-title="Buluşma & davet"
      >
        <Explain title="Davet & plan" lead="Basit ve kibar kalıplar">
          <MiniTable
            head={["Almanca", "Türkçe", "Not / Okunuş (TR)"]}
            rows={[
              ["Hast du Zeit?", "Vaktin var mı?", "has(t) du tsayt"],
              ["Wollen wir …?", "… yapalım mı?", "voln viA"],
              ["Sollen wir …?", "… yapalım mı? (öneri)", "zoln viA"],
              ["Ich habe keine Zeit.", "Vaktim yok.", ""],
              ["Gute Idee!", "İyi fikir!", ""],
              ["Tut mir leid, vielleicht morgen.", "Üzgünüm, belki yarın.", ""],
            ]}
          />
          <Examples
            items={[
              {
                en: "Hast du Zeit am Samstag? – Wollen wir ins Kino gehen?",
                tr: "Cumartesi vaktin var mı? – Sinemaya gidelim mi?",
                pron: "has du tsayt am zamstak – voln viA ins kino ge-en",
              },
              {
                en: "Gute Idee! Um 18 Uhr?",
                tr: "İyi fikir! Saat 18:00 olur mu?",
                pron: "gute ide – um aHtsen uua",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--smalltalk"
        data-toc-title="Küçük konuşma (small talk)"
      >
        <Explain
          title="Kısa sohbet açılışları"
          lead="Basit sorularla sohbeti başlat"
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              ["Wie geht’s?", "Nasılsın?", "vi gets"],
              [
                "Was machst du am Wochenende?",
                "Hafta sonu ne yapıyorsun?",
                "vas mahst du am voHenende",
              ],
              [
                "Was sind deine Hobbys?",
                "Hobilerin neler?",
                "vas zint daynə hobis",
              ],
              ["Wo wohnst du?", "Nerede yaşıyorsun?", "vo vohnst du"],
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

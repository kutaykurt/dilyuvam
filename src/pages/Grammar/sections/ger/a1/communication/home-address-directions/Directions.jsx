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

export default function Directions() {
  return (
    <div className="had-sub had-sub--directions" data-sub="directions">
      <section
        className="had-section had-section--ask"
        data-toc-title="Yol sorma"
      >
        <Explain
          title="Yol sorma kalıpları"
          lead="Kibar başla, basit istekte bulun."
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Entschuldigung, wo ist …?",
                "Afedersiniz, … nerede?",
                "ent-şuldigung, vo ist …",
              ],
              [
                "Wie komme ich zu(r/m) …?",
                "…’a/e nasıl giderim?",
                "vi kome ih tsu(r/m) …",
              ],
              [
                "Können Sie mir helfen?",
                "Bana yardım eder misiniz?",
                "könnən zi mia helfn",
              ],
            ]}
          />
          <Callout type="info" title="zur / zum nedir?">
            <p>
              <Term>zu der → zur</Term>, <Term>zu dem → zum</Term>. A1’de kalıp
              olarak öğren:
              <Key>zur Post</Key>, <Key>zum Bahnhof</Key>.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="had-section had-section--give"
        data-toc-title="Yol tarif etme"
      >
        <Explain title="Temel yönergeler" lead="Sağ/sol, düz, köşe, ışıklar…">
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              ["geradeaus", "düz", "gara-deaus"],
              ["links / rechts", "sol / sağ", "links / reHts"],
              ["an der Ecke", "köşede", "an dea eke"],
              ["an der Ampel", "trafik ışıklarında", "an dea ampel"],
              ["über die Straße", "sokağı karşıdan karşıya", "yüba di ştrase"],
              [
                "die zweite Straße links",
                "ikinci sokaktan sola",
                "di tsvayte ştrase links",
              ],
              ["gegenüber", "karşısında", "gegen-übɐ"],
              [
                "neben / hinter / vor",
                "yanında / arkasında / önünde",
                "neben / hinta / foa",
              ],
            ]}
          />
          <Examples
            items={[
              {
                en: "Gehen Sie geradeaus, dann an der Ampel rechts.",
                tr: "Düz gidin, sonra ışıklardan sağa dönün.",
                pron: "ge-en zi gara-deaus, dan an dea ampel reHts",
              },
              {
                en: "Die Apotheke ist gegenüber der Bank.",
                tr: "Eczane bankanın karşısında.",
                pron: "di apote-ke ist gegen-übɐ dea bank",
              },
            ]}
          />
        </Explain>

        <Explain
          title="Kısa yol + ulaşım"
          lead="Yürüyerek veya toplu taşımayla"
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Not"]}
            rows={[
              ["zu Fuß", "yaya", ""],
              [
                "mit dem Bus/der U-Bahn",
                "otobüsle/metro ile",
                "Linie 3, U8 vb.",
              ],
              ["aussteigen / umsteigen", "inmek / aktarma yapmak", ""],
              ["Haltestelle", "durak", ""],
              ["Fahrkarte", "bilet", ""],
            ]}
          />
          <Examples
            items={[
              {
                en: "Sie fahren mit der U8 und steigen am Hermannplatz aus.",
                tr: "U8 ile gidiyorsunuz ve Hermannplatz’da iniyorsunuz.",
                pron: "zi fah-rən mit dea u-acht und ştaygn am heamanplats aus",
              },
            ]}
          />
          <Callout type="warning" title="‘in’ ile yön/mekân farkı">
            <p>
              <Term>in</Term> bazen “nereye?” anlamı verir:{" "}
              <Key>in die Apotheke gehen</Key> (eczahaneye gitmek); bazen de
              “nerede?”: <Key>in der Apotheke sein</Key> (eczahanede). A1’de
              anlamı cümleden çıkar; ayrıntılarını <em>Kasus</em> bölümünde
              işleyeceğiz.
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="had-section had-section--mini-dialogs"
        data-toc-title="Diyalog örnekleri"
      >
        <Explain title="İki kısa diyalog" lead="Sorma + tarif etme birlikte">
          <Examples
            items={[
              {
                en: "A: Entschuldigung, wo ist die Bibliothek? – B: Geradeaus und die zweite Straße links.",
                tr: "A: Afedersiniz, kütüphane nerede? – B: Düz gidin ve ikinci sokaktan sola.",
                pron: "ent-şuldigung, vo ist di bibliyotek – gara-deaus und di tsvayte ştrase links",
              },
              {
                en: "A: Wie komme ich zum Bahnhof? – B: Nehmen Sie den Bus 140 bis zur Haltestelle Markt.",
                tr: "A: Gar’a nasıl giderim? – B: 140 numaralı otobüse binin, ‘Markt’ durağında inin.",
                pron: "vi kome ih tsum banhof – nemen zi den bus ains-fiatsiH bis tsua halteştele markt",
              },
            ]}
          />
        </Explain>
      </section>

      <section
        className="had-section had-section--cta"
        data-toc-title="Mini-Test bağlantısı"
      >
        <Callout type="tip" title="Anladın mı?">
          <p>Yol tarifleri ve prepozisyonlar için mini teste geç:</p>
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

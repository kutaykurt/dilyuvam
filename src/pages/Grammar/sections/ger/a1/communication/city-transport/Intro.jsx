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

/**
 * Bu dosya: Giriş + temel mantık
 * - Neden “mit dem Bus” (mit + Dativ) ve TR’deki “-le/-la” eki?
 * - “nach / zu / in” farklarını pratik ve günlük kullanım üzerinden anlatır.
 * - V2 (fiil ikinci sırada) kuralını öğrencinin sezgisiyle pekiştirir.
 */
export default function Intro() {
  return (
    <div className="ffh-sub ffh-sub--intro" data-sub="intro">
      <section
        className="ffh-section ffh-section--lead"
        data-toc-title="Giriş"
        data-modalizable="true"
        data-modal-title="Şehir içi ulaşım"
      >
        <Explain
          title="Neden ‘mit dem Bus’ denir?"
          lead="Türkçede araçla gitmek için ‘-le/-la’ eki kullanılır; Almancada bunu ‘mit + Dativ’ yapar."
        >
          <p>
            Almancada birçok edat (<Term>Präposition</Term>) kendisinden sonra
            gelecek ismin durumunu (<em>Kasus</em>) belirler. <Term>mit</Term>{" "}
            edatı her zaman <strong>Dativ</strong> ister; bu bir kuraldır ve
            istisnası yoktur. Bu yüzden “otobüs<strong>le</strong> gidiyorum”
            yerine{" "}
            <Key>
              mit <u>dem</u> Bus
            </Key>{" "}
            demeliyiz. “U-Bahn<strong>la</strong>” ise{" "}
            <Key>
              mit <u>der</u> U-Bahn
            </Key>{" "}
            olur; çünkü “U-Bahn” dişil (die). Türkçede tek bir “-le/-la” eki
            yetiyor; Almancada ise “mit” + doğru{" "}
            <em>artikeli Dativ’e çekerek</em> kullanmak zorundayız. Günlük dilde
            kısaltma yapılmaz; “*mit Bus*” doğal değildir. Kişilerde de Dativ
            gelir:
            <Key>
              mit <u>meiner</u> Freundin
            </Key>
            ,{" "}
            <Key>
              mit <u>meinem</u> Bruder
            </Key>
            .
          </p>
          <p>
            Bu noktada hedefimiz kuralları ezberletmekten çok, <em>neden</em>{" "}
            böyle dendiğini hissettirmektir: “<Term>mit</Term> ⇒ Dativ”
            refleksini kazanırsan, hangi araç olursa olsun doğru
            söyleyebilirsin. Öğrenirken hep yüksek sesle söyle:{" "}
            <Key>
              mit <u>dem</u> Bus
            </Key>
            ,{" "}
            <Key>
              mit <u>der</u> Straßenbahn
            </Key>
            ,
            <Key>
              mit <u>dem</u> Zug
            </Key>
            . Dikkat edersen, artikeller değişse de yapı aynı kalıyor.
          </p>

          <Formula
            rows={[
              [
                "Araçla",
                "mit + Dativ",
                "mit dem Bus / mit der U-Bahn / mit dem Zug",
              ],
              ["Güzergâh", "von … nach …", "von Köln nach Bonn"],
              [
                "Hedef (nokta/kurum)",
                "zu + Dativ",
                "zum Bahnhof / zur Haltestelle / zur Post",
              ],
              [
                "İçine hareket",
                "in + Akk.",
                "in den Bus / in die Stadt / in die U-Bahn",
              ],
            ]}
          />

          <MiniTable
            head={["Almanca", "Açıklama", "Türkçe"]}
            rows={[
              [
                "die U-Bahn / S-Bahn / die Straßenbahn",
                "metro / banliyö / tramvay",
                "metro / banliyö / tramvay",
              ],
              ["der Bus / der Zug", "otobüs / tren", "otobüs / tren"],
              [
                "die Haltestelle / der Bahnhof",
                "durak / istasyon/gar",
                "durak / istasyon",
              ],
            ]}
          />

          <Examples
            items={[
              {
                en: "Ich fahre mit dem Bus nach Köln.",
                tr: "Otobüsle Köln’e gidiyorum.",
                pron: "ih fahre mit dem bus nah köln",
              },
              {
                en: "Wie komme ich zum Bahnhof?",
                tr: "İstasyona nasıl giderim?",
                pron: "vi komme ih tsum banhhof",
              },
            ]}
          />
        </Explain>

        <Explain
          title="‘nach’, ‘zu’ mu, ‘in’ mi? Hangisini ne zaman kullanırız?"
          lead="Şehir/ülke için ‘nach’, somut yer/kişi için ‘zu’, bir şeyin ‘içine doğru hareket’ için ‘in + Akk.’"
        >
          <p>
            <Term>nach</Term> genelde şehir ve ülkeler içindir:{" "}
            <Key>nach Berlin</Key>, <Key>nach Deutschland</Key>.<Term>zu</Term>{" "}
            ise bir <em>nokta</em> veya <em>kurum</em> gibi somut hedeflere
            giderken kullanılır:
            <Key>zum Bahnhof</Key>, <Key>zur Post</Key>, <Key>zum Zentrum</Key>{" "}
            (merkeze). <Term>in</Term> + <strong>Akkusativ</strong>, hareketin{" "}
            <em>içine</em> olduğunu vurgular: <Key>in den Bus</Key> (otobüsün
            içine), <Key>in die Stadt</Key> (şehrin <em>içine</em>). Türkçede
            çoğu zaman tek bir “-e/-a” yeter; Almanca bu üç durumu dilsel olarak
            ayırır. Bu ayrım kulağa teorik gelebilir; ama günlük dilde seni çok
            doğal gösterir.
          </p>
          <p>
            İki küçük ipucu: (1) “Merkeze gidiyorum” için hem{" "}
            <Key>ins Zentrum</Key> (içine hareket) hem de <Key>zum Zentrum</Key>{" "}
            (hedef nokta) duyarsın; ikisi de doğrudur, vurgu farklıdır. (2)
            Gündelik cümlelerde <strong>fiil ikinci sırada</strong> (V2)
            kuralını unutma:
            <Key>
              Heute <strong>fahre</strong> ich mit der U-Bahn.
            </Key>
            ,
            <Key>
              Am Bahnhof <strong>steige</strong> ich um.
            </Key>{" "}
            Türkçedeki “fiil sonda” alışkanlığını kırmak için cümleyi yüksek
            sesle oku.
          </p>
        </Explain>
      </section>
    </div>
  );
}

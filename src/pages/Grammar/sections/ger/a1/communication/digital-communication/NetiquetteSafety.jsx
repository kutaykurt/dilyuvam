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
 * Kapsam:
 * - Netiquette: kısa, nazik, konu satırı, paragraf düzeni
 * - Mahremiyet & güvenlik: kişisel veri paylaşma, şüpheli linkler
 * - Emojiler ve büyük harf kullanımı
 */
export default function NetiquetteSafety() {
  return (
    <div className="ffh-sub ffh-sub--netiquette" data-sub="netiquette-safety">
      <section className="ffh-section" data-toc-title="Netik & güvenlik">
        <Explain
          title="Netiquette: Kısa + nazik + düzenli"
          lead="Mesajlar ‘okuyan kişi’ için yazılır: görsel olarak temiz tut."
        >
          <p>
            Konu satırı (<Term>Betreff</Term>) kısa ve bilgi dolu olsun.
            Paragrafları 1–3 cümleyle sınırla. Türkçede bazen uzun ve duygusal
            yazılır; Almanca iş ve okul iletişiminde{" "}
            <strong>kısa ve düzenli</strong>
            tercih edilir. Tamamı BÜYÜK HARF yazmak bağırmak gibi algılanır,
            kaçın. Emojiler samimi yazışmada serbesttir, resmî yazışmada sınırlı
            kullan. Her mesajda <Key>Bitte</Key> ve <Key>Danke</Key> kültürünü
            koru; bu iki kelime Almancada iletişimin temel yağlayıcısıdır.
            Zamanında yanıt vermek (pünktlich) saygı göstergesidir.
          </p>
        </Explain>

        <Callout type="error" title="Gizlilik ve güvenlik">
          <p>
            Kimlik/şifre/paylaşım linklerini bilinmeyen kişilere göndermeyin.
            Şüpheli adresler (<em>phishing</em>) gerçek kurumu taklit eder. Emin
            değilsen kısa sor: <Key>Ist die E-Mail echt?</Key> veya
            <Key>Können Sie das bestätigen?</Key> Dosyayı açmadan önce göndereni
            doğrula.
          </p>
        </Callout>

        <Explain
          title="Kibar reddetme / erteleme"
          lead="Hayır demek mümkündür; kısa ve saygılı kal."
        >
          <p>
            Randevu/soruyu ertelemek için:{" "}
            <Key>Leider habe ich heute keine Zeit.</Key>,
            <Key>Ich kann morgen antworten.</Key>. Nazik reddetme:{" "}
            <Key>Das ist im Moment nicht möglich.</Key>. Almancada{" "}
            <Term>leider</Term> (“maalesef”) kelimesi cümlenin tonunu yumuşatır;
            sık kullan.
          </p>
        </Explain>
      </section>
    </div>
  );
}

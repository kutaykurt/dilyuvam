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
 * Bu sayfa: Dijital iletişimde Almancanın temel mantığı
 * - du / Sie farkı (resmî – samimi)
 * - selamlama & kapanış kalıpları (E-posta & mesaj)
 * - kısa rica ve bilgi isteme cümleleri (Bitte / könnten – A1 için basit)
 * - TR ↔ DE farkları ve günlük kullanım
 */
export default function Intro() {
  return (
    <div className="ffh-sub ffh-sub--intro" data-sub="intro">
      <section
        className="ffh-section ffh-section--lead"
        data-toc-title="Giriş"
        data-modalizable="true"
        data-modal-title="Dijital iletişim – Giriş"
      >
        <Explain
          title="Neden ‘du’ mu ‘Sie’ mi?"
          lead="Almancada hitap şekli mesajın tonunu tamamen değiştirir."
        >
          <p>
            Almancada iki temel hitap vardır: samimi <Term>du</Term> ve resmî{" "}
            <Term>Sie</Term>. <Term>Sie</Term> büyük harfle yazılır ve fiili{" "}
            <strong>3. çoğul</strong> gibi çekilir:
            <Key>Sie sind / Sie haben</Key>. İlk mesajda kişiyi tanımıyorsan,
            kurumsal birine yazıyorsan veya bir öğretmen/doktor/iş görüşmesi ise{" "}
            <Term>Sie</Term> kullan; böylece saygılı ve güvenli olursun.
            Arkadaş, sınıf arkadaşı veya yakın iş arkadaşıyla yazışıyorsan{" "}
            <Term>du</Term> doğaldır. Türkçede tek “sen/siz” sistemi bazen kafa
            karıştırır; Almanca net ayırır. Unutma: Birisi sana “Wir können du
            sagen?” (Sen diyebilir miyiz?) derse, artık <Term>du</Term>ya
            geçebilirsin.
          </p>
        </Explain>

        <Explain
          title="Selamlama ve kapanış neden önemli?"
          lead="İlk ve son cümle, mesajın ‘duygu tonunu’ belirler."
        >
          <p>
            Almancada e-posta ve mesajlar belirgin bir başla-bitir kültürüne
            sahiptir. Resmî yazışmada <Key>Guten Tag</Key> / <Key>Hallo</Key>{" "}
            (nötr) ya da <Key>Sehr geehrte Frau …</Key> gibi kalıplar
            kullanılır; bitişte <Key>Viele Grüße</Key> (VG) /{" "}
            <Key>Mit freundlichen Grüßen</Key> (MfG) yaygındır. Samimi yazışmada{" "}
            <Key>Hi</Key> / <Key>Hallo</Key> ve kapanışta <Key>LG</Key> (Liebe
            Grüße) çok doğaldır. Türkçedeki “Merhaba… iyi günler dilerim” gibi
            ifadelerin Almancada daha kalıplaşmış ve kısa versiyonları vardır.
            Kısa tutmak nezaketsizlik değildir; tam tersine net ve temiz
            iletişim göstergesidir.
          </p>

          <MiniTable
            head={["Durum", "Selamlama", "Kapanış (kısa)"]}
            rows={[
              [
                "Resmî (Sie)",
                "Guten Tag, Frau Yılmaz",
                "Mit freundlichen Grüßen / Viele Grüße",
              ],
              [
                "Yarı resmî",
                "Hallo Herr Kaya",
                "Viele Grüße / Freundliche Grüße",
              ],
              ["Samimi (du)", "Hi Ali / Hallo Ayşe", "LG / Liebe Grüße / VG"],
            ]}
          />

          <Examples
            items={[
              { en: "Guten Tag, Herr Demir,", tr: "İyi günler Sayın Demir," },
              { en: "Viele Grüße", tr: "Selamlarımla / Saygılarımla" },
            ]}
          />
        </Explain>

        <Explain
          title="Kısa rica ve bilgi isteme kalıpları"
          lead="A1’de uzun cümle kurmana gerek yok; kibar + net yeter."
        >
          <p>
            En güvenli iki kalıp: <Key>Bitte …</Key> ve{" "}
            <Key>Ich hätte gern …</Key> / <Key>Ich möchte …</Key>. Resmî tonda{" "}
            <Key>Können Sie bitte …?</Key> çok işe yarar (A1’de <em>können</em>{" "}
            yeterli; <em>könnten</em> A2+). Mesajlarda aşırı açıklama yerine
            hedefi yaz: <Key>Bitte senden Sie mir den Link.</Key>,
            <Key>Ich hätte gern einen Termin am Montag.</Key> Türkçede nezaket
            bazen uzun cümlelerle gösterilir; Almancada kısa ve doğrudan olmak
            daha doğrudur. Anahtar: <strong>kısa + kibar + net</strong>.
          </p>

          <Formula
            rows={[
              [
                "Kısa rica (Sie)",
                "Können Sie bitte …?",
                "Können Sie mir die Datei schicken?",
              ],
              [
                "Kısa rica (du)",
                "Kannst du bitte …?",
                "Kannst du mir den Link schicken?",
              ],
              [
                "İstek",
                "Ich hätte gern … / Ich möchte …",
                "Ich möchte einen Termin am 10.09.",
              ],
              [
                "Bilgi",
                "Können Sie mir … sagen?",
                "Können Sie mir die Uhrzeit sagen?",
              ],
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

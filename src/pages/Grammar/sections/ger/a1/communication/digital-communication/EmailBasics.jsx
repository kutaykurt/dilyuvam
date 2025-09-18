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
 * Kapsam:
 * - Betreff (konu) yazma, Anrede (hitap), Grußformel (kapanış)
 * - Kısa gövde: rica / bilgi / ek (Anhang)
 * - du vs Sie e-posta örnekleri
 */
export default function EmailBasics() {
  return (
    <div className="ffh-sub ffh-sub--email" data-sub="email-basics">
      <section className="ffh-section" data-toc-title="E-posta temelleri">
        <Explain
          title="E-postanın iskeleti"
          lead="Betreff → Anrede → İçerik (1–3 cümle) → Grußformel → İmza"
        >
          <p>
            Almanca e-posta “temiz çerçeve” sever. İlk satır{" "}
            <Term>Betreff</Term> (konu) kısa ve net olmalı:
            <Key>Termin am 12.09.</Key>, <Key>Frage zum Kurs</Key>. Hitapta
            resmîysen:
            <Key>Guten Tag, Frau Yılmaz</Key> veya{" "}
            <Key>Sehr geehrter Herr Kaya</Key>. İçerikte 1–3 cümleyle
            <em>rica</em> veya <em>bilgiyi</em> yaz:{" "}
            <Key>Ich möchte einen Termin am 12.09.</Key>. Ek dosya varsa{" "}
            <Term>Anhang</Term> dersin: <Key>Im Anhang finden Sie …</Key>.
            Kapanışta <Key>Viele Grüße</Key> güvenlidir. Türkçede uzun teşekkür
            cümleleri normaldir; Almancada kısa, net ve kibar olmak beklenir.
          </p>

          <Formula
            rows={[
              ["Konu", "Betreff: Termin am 12.09.", "kısa & tarih TT.MM."],
              ["Hitap", "Guten Tag, Frau … / Hallo …", "duruma göre"],
              ["İçerik", "Ich möchte … / Könnten Sie …?", "1–3 cümle"],
              ["Kapanış", "Viele Grüße / Mit freundlichen Grüßen", "VG / MfG"],
            ]}
          />

          <MiniTable
            head={["Almanca", "Türkçe", "Not"]}
            rows={[
              ["Im Anhang finden Sie …", "Ek’te bulabilirsiniz …", "resmî"],
              [
                "Ich freue mich auf Ihre Antwort.",
                "Dönüşünüzü beklerim.",
                "kibar",
              ],
              ["Vielen Dank im Voraus.", "Şimdiden teşekkürler.", "nötr"],
            ]}
          />

          <Examples
            items={[
              {
                en: "Guten Tag, Frau Yılmaz, ich möchte einen Termin am 12.09. Viele Grüße",
                tr: "İyi günler … 12.09’da randevu istiyorum. Selamlarımla",
              },
              {
                en: "Im Anhang finden Sie die Datei.",
                tr: "Ek’te dosyayı bulabilirsiniz.",
              },
            ]}
          />

          <Callout type="warn" title="Biçim ipucu">
            <p>
              Tarihler genelde <Key>12.09.2025</Key> gibi yazılır (TT.AA.YYYY).
              Noktanın ardından boşluk bırakma: <Key>am 12.09.</Key> doğru, “12.
              09.” resmî belgede yanlıştır.
            </p>
          </Callout>
        </Explain>
      </section>

      <section className="ffh-section" data-toc-title="Pratik">
        <Explain title="Boşluk doldurma">
          <ExerciseFill
            items={[
              {
                id: "e1",
                before: "Betreff: ",
                after: "",
                answers: ["Frage zum Kurs", "Termin am 12.09."],
                hint: "kısa konu",
              },
              {
                id: "e2",
                before: " ",
                after: " Yılmaz,",
                answers: ["Guten Tag, Frau", "Sehr geehrte Frau"],
                hint: "hitap",
              },
              {
                id: "e3",
                before: "Im ",
                after: " finden Sie die Datei.",
                answers: ["Anhang"],
                hint: "ek",
              },
              {
                id: "e4",
                before: "",
                after: " Grüße",
                answers: ["Viele", "Mit freundlichen"],
                hint: "kapanış",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "Hangi kapanış daha resmîdir?",
                choices: ["LG", "Viele Grüße", "Mit freundlichen Grüßen"],
                correctIndex: 2,
                explain: "MfG en resmî olandır.",
              },
              {
                q: "Ek dosyayı belirtmek için:",
                choices: ["Im Anhang …", "Im Anlage …", "Im Anhangs …"],
                correctIndex: 0,
                explain: "Sabit kalıp.",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

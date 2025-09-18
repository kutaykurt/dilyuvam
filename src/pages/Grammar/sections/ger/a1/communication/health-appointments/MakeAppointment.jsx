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

export default function MakeAppointment() {
  return (
    <div
      className="ffh-sub ffh-sub--make-appointment"
      data-sub="make-appointment"
    >
      <section
        className="ffh-section ffh-section--call"
        data-toc-title="Randevu alma"
      >
        <Explain
          title="Termin vereinbaren"
          lead="Telefon / resepsiyon kalıpları"
        >
          <MiniTable
            head={["Almanca", "Türkçe", "Okunuş (TR)"]}
            rows={[
              [
                "Ich hätte gern einen Termin.",
                "Randevu almak istiyorum.",
                "ih hette gern aynən termin",
              ],
              [
                "Geht es am Montag um 10 Uhr?",
                "Pzt 10 uygun olur mu?",
                "ge-et es am montak um tsen uua",
              ],
              [
                "Passt es Ihnen morgen?",
                "Yarın size uyar mı?",
                "past es inən morgen",
              ],
              [
                "Ich kann leider nicht.",
                "Maalesef gelemem.",
                "ih kan layda niHt",
              ],
              [
                "Können wir verschieben?",
                "Erteleyebilir miyiz?",
                "könnən viA fea-şi-ben",
              ],
              [
                "Ich brauche einen früheren Termin.",
                "Daha erken bir randevu lazım.",
                "ih brauHe aynən fryü-eren termin",
              ],
              [
                "Wie ist Ihre Adresse/E-Mail?",
                "Adres/E-posta?",
                "vi ist i-re adres / i-meyl",
              ],
            ]}
          />
          <Formula
            rows={[
              [
                "Tarih & saat",
                "am 12. März, um 9 Uhr",
                "tarih + saat edatları",
              ],
              [
                "Yer",
                "in der Praxis / bei Dr. Müller",
                "muayenehane / doktor yanında",
              ],
            ]}
          />
          <Callout type="tip" title="Onaylama">
            <p>
              <Key>Alles klar, bis dann!</Key> – “Tamam, görüşmek üzere!”
            </p>
          </Callout>
        </Explain>
      </section>

      <section
        className="ffh-section ffh-section--dialog"
        data-toc-title="Diyalog"
      >
        <Explain title="Telefonla randevu" lead="Soru–cevap">
          <Examples
            items={[
              {
                en: "Guten Tag, ich hätte gern einen Termin wegen Zahnschmerzen.",
                tr: "İyi günler, diş ağrısı için randevu almak istiyorum.",
                pron: "guten tak, ih hette gern aynən termin vegen zan-şmertsn",
              },
              {
                en: "Geht Dienstag um 9 Uhr? – Ja, das passt. Vielen Dank.",
                tr: "Salı 9 uygun mu? – Evet, olur. Teşekkürler.",
                pron: "ge-et diyns-tak um noy-n uua – ya, das past. filen dank",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

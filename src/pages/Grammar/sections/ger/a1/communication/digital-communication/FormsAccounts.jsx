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
 * - Online form terimleri (Vorname, Nachname, PLZ, Wohnort, Straße, Hausnummer, Geburtsdatum)
 * - Hesap işlemleri: sich registrieren / sich anmelden / Passwort
 * - Basit güvenlik kalıpları: Bestätigung, Code, Link
 */
export default function FormsAccounts() {
  return (
    <div className="ffh-sub ffh-sub--forms" data-sub="forms-accounts">
      <section className="ffh-section" data-toc-title="Formlar & hesap">
        <Explain
          title="Online form doldururken göreceğin kelimeler"
          lead="TR’den farklı olanları ezber listesi gibi öğren."
        >
          <p>
            En temel alanlar: <Key>Vorname</Key> (ad), <Key>Nachname</Key>{" "}
            (soyad), <Key>Wohnort</Key> (ikamet şehri),
            <Key>PLZ</Key> (posta kodu), <Key>Straße</Key> (cadde),{" "}
            <Key>Hausnummer</Key> (bina/kapı no),
            <Key>Geburtsdatum</Key> (doğum tarihi), <Key>E-Mail-Adresse</Key>.
            “Kullanıcı adı” için
            <Key>Benutzername</Key>, şifre <Key>Passwort</Key>. “Şartları kabul
            ediyorum”:
            <Key>Ich akzeptiere die Datenschutzbestimmungen.</Key> Formlar kısa
            ve kalıplaşmış olduğu için bu kelimeleri görür görmez tanırsan işlem
            hızın artar.
          </p>

          <MiniTable
            head={["Alan", "Türkçe", "Not"]}
            rows={[
              ["Vorname / Nachname", "ad / soyad", "İlk harf büyük"],
              ["PLZ / Wohnort", "posta kodu / şehir", "PLZ = Postleitzahl"],
              [
                "Straße / Hausnummer",
                "cadde / kapı no",
                "ß = ‘ss’ gibi (Straße)",
              ],
              ["Geburtsdatum (TT.MM.JJJJ)", "doğum tarihi", "12.09.2000"],
              ["E-Mail-Adresse", "e-posta adresi", "@"],
              [
                "Benutzername / Passwort",
                "kullanıcı adı / şifre",
                "güvenli şifre seç",
              ],
            ]}
          />
        </Explain>

        <Explain
          title="Hesap oluşturma ve giriş"
          lead="İki fiil: ‘sich registrieren’ (kayıt olmak) ve ‘sich anmelden’ (giriş yapmak)."
        >
          <p>
            Kayıt ekranlarında <Key>Ich möchte mich registrieren.</Key> (kayıt
            olmak istiyorum) ifadesini görürsün. Giriş için{" "}
            <Key>Ich möchte mich anmelden.</Key> (giriş yapmak istiyorum). Şifre
            sıfırlama:
            <Key>Passwort vergessen</Key>. Onay e-postası için{" "}
            <Term>Bestätigung</Term> (onay) ve içinde bir
            <Term>Link</Term> veya <Term>Code</Term> olur. A1’de karmaşık
            güvenlik terimlerine girme; şunları bil yeter:
            <Key>Code eingeben</Key> (kodu gir), <Key>Link öffnen</Key> (linki
            aç).
          </p>

          <Formula
            rows={[
              ["Kayıt", "Ich möchte mich registrieren.", "Hesap oluşturma"],
              ["Giriş", "Ich möchte mich anmelden.", "Kullanıcı girişi"],
              ["Şifre", "Passwort zurücksetzen", "Şifreyi sıfırla"],
              ["Onay", "Bestätigung / Code / Link", "E-posta ile gelir"],
            ]}
          />
        </Explain>

        <Callout type="error" title="Güvenlik uyarısı">
          <p>
            Şüpheli e-posta/link görürsen tıklama. Resmî kurumlar şifre istemez.
            Alan adını kontrol et; emin değilsen <Key>Ist das echt?</Key> diye
            sor ve doğrulama iste.
          </p>
        </Callout>
      </section>

      <section className="ffh-section" data-toc-title="Pratik">
        <Explain title="Boşluk doldurma">
          <ExerciseFill
            items={[
              {
                id: "f1",
                before: " ",
                after: ": Ali",
                answers: ["Vorname"],
                hint: "ad",
              },
              {
                id: "f2",
                before: " ",
                after: ": 12043",
                answers: ["PLZ"],
                hint: "posta kodu",
              },
              {
                id: "f3",
                before: "Ich möchte mich ",
                after: ".",
                answers: ["registrieren", "anmelden"],
                hint: "kayıt/giriş",
              },
              {
                id: "f4",
                before: "Bitte den ",
                after: " eingeben.",
                answers: ["Code"],
                hint: "onay kodu",
              },
            ]}
          />
        </Explain>

        <Explain title="Mini Test">
          <ExerciseMC
            items={[
              {
                q: "‘Giriş yapmak istiyorum.’",
                choices: [
                  "Ich möchte mich anmelden.",
                  "Ich möchte mich registrieren.",
                  "Ich möchte anmelden mich.",
                ],
                correctIndex: 0,
                explain: "anmelden = giriş.",
              },
              {
                q: "‘Şifreyi sıfırla’ hangisi?",
                choices: [
                  "Passwort vergessen",
                  "Passwort zurücksetzen",
                  "Passwort öffnen",
                ],
                correctIndex: 1,
                explain: "geri ayarla = sıfırla.",
              },
            ]}
          />
        </Explain>
      </section>
    </div>
  );
}

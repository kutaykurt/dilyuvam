import React from "react";
import Explain from "../../../../../../../components/Explain";
import { Key, Term, Formula } from "../../../../../blocks";

export default function Intro() {
  return (
    <div className="gi-sub gi-sub--intro" data-sub="intro">
      <Explain
        title="Selamlaşma & Kendini Tanıtma – Türkçe vs. Almanca"
        lead="Türkçede tek bir ‘Merhaba’ çoğu bağlamda yeter. Almancada selam günün saatine göre değişir ve du/Sie seçimi baştan tonu belirler."
      >
        <p
          className="gi-paragraph"
          data-modalizable="true"
          data-modal-title="Bağlam ve Ton"
        >
          Türkçede resmiyet çoğunlukla ses tonu ve hitapla anlaşılır. Almancada
          bu fark <Term>Guten Morgen/Tag/Abend</Term> gibi açık selamlarla
          görünür. İlk temasta <Term>Sie</Term> güvenli seçenektir; karşı taraf
          uygun görürse <Term>du</Term> teklif eder.
        </p>
        <p
          className="gi-paragraph"
          data-modalizable="true"
          data-modal-title="Kendini tanıtma"
        >
          İsim bildirirken <Key>Ich heiße …</Key> çok yaygındır;{" "}
          <Key>Ich bin …</Key> da doğrudur. Köken için{" "}
          <Key>Ich komme aus …</Key>, ikamet için <Key>Ich wohne in …</Key>{" "}
          kullanılır—Türkçedeki tek bir “Ben …’lıyım” ifadesinden daha
          ayrıntılıdır.
        </p>

        <div className="gi-formula gi-formula--intro">
          <Formula
            rows={[
              [
                "Ad",
                "Ich heiße … / Ich bin …",
                "Benim adım … / Ben …",
              ],
              ["Köken", "Ich komme aus …", "…’dan geliyorum / …’lıyım"],
              ["İkamet", "Ich wohne in …", "…’de/da yaşıyorum"],
            ]}
          />
        </div>
      </Explain>
    </div>
  );
}

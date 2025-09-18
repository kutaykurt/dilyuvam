import React from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "./registry/registry";
import SEO from "../../components/SEO";

export default function GrammarQuizPage() {
  const { lang = "ger", level = "a1", slug } = useParams();
  const course = getCourse(lang, level);
  const section = course?.sections?.find((s) => s.slug === slug);

  const QuizComp = section?.QuizComponent || null;

  const title = section?.tr ? `${section.tr} – Mini-Test` : "Mini-Test";
  const canonical = `https://elangual.com/grammar/${lang}/${level}/${slug}/quiz`;

  if (!QuizComp) {
    return (
      <div className="g-doc grammar-page">
        <SEO title={title} canonical={canonical} />
        <div className="rule-box">
          <strong>Bu bölüm için test henüz yok.</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="g-doc grammar-page">
      <SEO title={title} canonical={canonical} />
      <article className="g-section" id={`${slug}-quiz`}>
        <h2 className="section-title">
          {section?.tr} <span className="tr">(Mini-Test)</span>
        </h2>
        <QuizComp />
      </article>
    </div>
  );
}

// src/pages/Grammar/SectionPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SectionNav from "../../components/SectionNav/SectionNav";
import { getCourse } from "../Grammar/registry/registry";
import { NumberingProvider, SectionHeader } from "./blocks";
import SEO from "../../components/SEO";
import GrammarControls from "../../components/GrammarControls/GrammarControls";

export default function SectionPage() {
  const navigate = useNavigate();
  const { lang = "ger", level = "a1", slug, sub } = useParams();

  const lvl = level.toLowerCase();
  const basePath = `/grammar/${lang}/${lvl}`;

  const course = getCourse(lang, lvl);
  const sections = course?.sections ?? [];
  const firstSlug = sections[0]?.slug ?? null;

  useEffect(() => {
    if (!slug && firstSlug)
      navigate(`${basePath}/${firstSlug}`, { replace: true });
  }, [slug, firstSlug, basePath, navigate]);

  const activeIndex = useMemo(
    () => (slug ? sections.findIndex((s) => s.slug === slug) : -1),
    [sections, slug]
  );
  const active = activeIndex >= 0 ? sections[activeIndex] : null;

  const subsections = active?.subsections ?? [];

  // Hat das Hauptthema Unterpunkte? → zur ersten Subroute leiten
  useEffect(() => {
    if (!active) return;
    if (subsections.length > 0 && !sub) {
      const firstSub = subsections[0]?.slug;
      if (firstSub)
        navigate(`${basePath}/${active.slug}/${firstSub}`, { replace: true });
    }
  }, [active, sub, subsections, basePath, navigate]);

  const activeSubIndex = useMemo(() => {
    if (!sub) return -1;
    return subsections.findIndex((x) => x.slug === sub);
  }, [subsections, sub]);

  const ActiveSubComponent =
    activeSubIndex >= 0
      ? subsections[activeSubIndex].Component
      : active?.Component || null;

  const prevSection = activeIndex > 0 ? sections[activeIndex - 1] : null;
  const nextSection =
    activeIndex >= 0 && activeIndex < sections.length - 1
      ? sections[activeIndex + 1]
      : null;

  const prevSub = activeSubIndex > 0 ? subsections[activeSubIndex - 1] : null;
  const nextSub =
    activeSubIndex >= 0 && activeSubIndex < subsections.length - 1
      ? subsections[activeSubIndex + 1]
      : null;

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag && ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(tag))
        return;

      if (e.key === "ArrowLeft") {
        if (prevSub) navigate(`${basePath}/${active.slug}/${prevSub.slug}`);
        else if (prevSection) {
          const fs = prevSection.subsections?.[0]?.slug;
          navigate(
            fs
              ? `${basePath}/${prevSection.slug}/${fs}`
              : `${basePath}/${prevSection.slug}`
          );
        }
      } else if (e.key === "ArrowRight") {
        if (nextSub) navigate(`${basePath}/${active.slug}/${nextSub.slug}`);
        else if (nextSection) {
          const fs = nextSection.subsections?.[0]?.slug;
          navigate(
            fs
              ? `${basePath}/${nextSection.slug}/${fs}`
              : `${basePath}/${nextSection.slug}`
          );
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prevSub, nextSub, prevSection, nextSection, navigate, basePath, active]);

  // Gruppen auf Türkisch
  const trGroup = (g) => {
    if (!g) return null;
    const map = {
      Kommunikation: "İletişim",
      Grammatik: "Dilbilgisi",
      Wortschatz: "Kelime bilgisi",
      Aussprache: "Telaffuz",
      Schreiben: "Yazma",
      Lesen: "Okuma",
      Hören: "Dinleme",
    };
    return map[g] || g;
  };

  const items = useMemo(
    () =>
      sections.map((s, i) => ({
        slug: s.slug,
        label: `${s.tr} (${s.title})`,
        index: i + 1,
        group: trGroup(s.group) || null,
      })),
    [sections]
  );

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const setSidebar = (open) => setSidebarOpen(!!open);
  const toggleSidebar = () => setSidebarOpen((s) => !s);
  const closeSidebar = () => setSidebarOpen(false);

  const pageTitle = active?.tr
    ? `${active.tr} – Dilbilgisi – Elangual`
    : "Dilbilgisi – Elangual";
  const pageDesc = active?.title
    ? `${active.title} — Almanca gramer konusu, örnekler ve açıklamalar.`
    : "Almanca gramer konuları, örnekler ve açıklamalar.";
  const canonical = `https://elangual.com/grammar/${lang}/${lvl}${
    active?.slug ? `/${active.slug}` : ""
  }${sub ? `/${sub}` : ""}`;

  // Während Redirect nicht unmounten
  const isWaitingSubRedirect = !!active && subsections.length > 0 && !sub;
  const canRenderArticle =
    !!active &&
    (subsections.length === 0 || (sub && ActiveSubComponent !== null));

  // SectionPager nur im letzten Unterthema
  const showSectionPager =
    subsections.length > 0 && activeSubIndex === subsections.length - 1;

  if (!course)
    return <div className="g-doc grammar-page">Kurs bulunamadı.</div>;

  // — UI-starker SectionPager (gleicher Button-Look wie SubPager) —
  const SectionPager = () => (
    <nav className="section-pager" aria-label="Konu geçişi">
      {prevSection ? (
        <button
          type="button"
          className="pager-btn prev"
          onClick={() => {
            const fs = prevSection.subsections?.[0]?.slug;
            navigate(
              fs
                ? `${basePath}/${prevSection.slug}/${fs}`
                : `${basePath}/${prevSection.slug}`
            );
          }}
          aria-label={`Önceki bölüm: ${prevSection.tr}`}
        >
          <span className="icon" aria-hidden>
            ←
          </span>
          <span className="meta">
            <span className="kicker">Önceki bölüm</span>
            <span className="title">{prevSection.tr}</span>
          </span>
        </button>
      ) : (
        <span />
      )}

      {nextSection ? (
        <button
          type="button"
          className="pager-btn next primary"
          onClick={() => {
            const fs = nextSection.subsections?.[0]?.slug;
            navigate(
              fs
                ? `${basePath}/${nextSection.slug}/${fs}`
                : `${basePath}/${nextSection.slug}`
            );
          }}
          aria-label={`Sonraki bölüm: ${nextSection.tr}`}
        >
          <span className="meta">
            <span className="kicker">Sonraki bölüm</span>
            <span className="title">{nextSection.tr}</span>
          </span>
          <span className="icon" aria-hidden>
            →
          </span>
        </button>
      ) : (
        <span />
      )}
    </nav>
  );

  const SubPager = () =>
    subsections.length > 0 ? (
      <nav className="sub-pager" aria-label="Alt başlık geçişi">
        {/* 1) Vorherige Subseite ODER – wenn keine vorhanden – zurück zum vorherigen Hauptthema */}
        {prevSub ? (
          <button
            type="button"
            className="pager-btn prev"
            onClick={() =>
              navigate(`${basePath}/${active.slug}/${prevSub.slug}`)
            }
            aria-label={`Önceki: ${prevSub.tr || prevSub.title}`}
          >
            <span className="icon" aria-hidden>
              ←
            </span>
            <span className="meta">
              <span className="kicker">Önceki</span>
              <span className="title">{prevSub.tr || prevSub.title}</span>
            </span>
          </button>
        ) : prevSection ? (
          <button
            type="button"
            className="pager-btn prev"
            onClick={() => {
              const fs = prevSection.subsections?.[0]?.slug;
              navigate(
                fs
                  ? `${basePath}/${prevSection.slug}/${fs}`
                  : `${basePath}/${prevSection.slug}`
              );
            }}
            aria-label={`Önceki bölüm: ${prevSection.tr}`}
          >
            <span className="icon" aria-hidden>
              ←
            </span>
            <span className="meta">
              <span className="kicker">Önceki bölüm</span>
              <span className="title">{prevSection.tr}</span>
            </span>
          </button>
        ) : (
          <span />
        )}

        {/* 2) Nächste Subseite (wie gehabt) */}
        {nextSub ? (
          <button
            type="button"
            className="pager-btn next primary"
            onClick={() =>
              navigate(`${basePath}/${active.slug}/${nextSub.slug}`)
            }
            aria-label={`Sonraki: ${nextSub.tr || nextSub.title}`}
          >
            <span className="meta">
              <span className="kicker">Sonraki</span>
              <span className="title">{nextSub.tr || nextSub.title}</span>
            </span>
            <span className="icon" aria-hidden>
              →
            </span>
          </button>
        ) : (
          <span />
        )}
      </nav>
    ) : null;

  const subLinks =
    subsections?.map((s) => ({
      id: s.slug,
      label: s.tr || s.title,
      to: `${basePath}/${active?.slug ?? ""}/${s.slug}`,
    })) || [];

  const currentLevel = level.toUpperCase();
  const onControlsChange = ({ lang: toLang, level: toLevel }) => {
    const useLang = toLang || lang;
    const useLevel = toLevel || currentLevel;
    navigate(`/grammar/${useLang}/${useLevel.toLowerCase()}`);
  };

  return (
    <div
      className={`g-doc grammar-page ${isSidebarOpen ? "sidebar-open" : ""}`}
    >
      <SEO title={pageTitle} description={pageDesc} canonical={canonical} />

      {/* Mobile Toolbar */}
      <div className="mobile-toolbar" role="toolbar" aria-label="Gezinme">
        <button
          type="button"
          className={`toolbar-burger ${isSidebarOpen ? "is-open" : ""}`}
          aria-label={isSidebarOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isSidebarOpen}
          aria-controls="section-sidebar"
          onClick={toggleSidebar}
        >
          <span className="burger-lines" aria-hidden />
        </button>
      </div>

      <SectionNav
        id="section-sidebar"
        items={items}
        activeSlug={slug}
        basePath={basePath}
        subsections={subLinks}
        activeSub={sub || null}
        isOpen={isSidebarOpen}
        onToggle={setSidebar}
      />
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          role="presentation"
          onClick={closeSidebar}
        />
      )}

      <NumberingProvider prefix={`${activeIndex + 1}`}>
        {canRenderArticle ? (
          <article className="g-section" id={active.slug}>
            <SectionHeader title={active.tr} tr={active.title} />
            {ActiveSubComponent ? (
              <ActiveSubComponent />
            ) : active.Component ? (
              <active.Component />
            ) : null}
            <SubPager />
            {showSectionPager && <SectionPager />}
          </article>
        ) : isWaitingSubRedirect ? (
          <article className="g-section" id={active?.slug || "loading"}>
            <SectionHeader title={active?.tr || "Yükleniyor…"} tr="" />
          </article>
        ) : null}
      </NumberingProvider>
    </div>
  );
}

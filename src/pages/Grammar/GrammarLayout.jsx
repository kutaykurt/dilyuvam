// src/pages/Grammar/GrammarLayout.jsx
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Grammar.scss";
import "./WideModal.scss";
import SEO from "../../components/SEO";
import GrammarControls, {
  LANGS,
} from "../../components/GrammarControls/GrammarControls";

export default function GrammarLayout() {
  const loc = useLocation();
  const navigate = useNavigate();

  const [, , langSegment, levelSegment] = loc.pathname.split("/");
  const currentLang = LANGS.find((l) => l.code === langSegment)?.code || "ger";
  const currentLevel = (levelSegment || "a1").toUpperCase();

  const go = (lang, level) =>
    navigate(`/grammar/${lang}/${(level || currentLevel).toLowerCase()}`);

  const handleChange = ({ lang, level }) => {
    go(lang || currentLang, level || currentLevel);
  };

  return (
    <div className="grammar-layout">
      <SEO
        title="Dilbilgisi – Elangual"
        description="A1–B2 Almanca dilbilgisi: konular, tablolar ve anlaşılır açıklamalar."
        canonical="https://elangual.com/grammar"
      />

      {/* Desktop: Dropdown-Leiste unter dem Titel */}
      <header className="grammar-header">
        <h1 className="title">Dilbilgisi</h1>
        <div className="toolbar desktop-toolbar">
          <div className="toolbar-inner">
            <GrammarControls
              lang={currentLang}
              level={currentLevel}
              onChange={handleChange}
            />
          </div>
        </div>
      </header>

      <main className="grammar-content">
        <Outlet />
      </main>
    </div>
  );
}

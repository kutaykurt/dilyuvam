import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./homepage.scss";
import { fetchVocabularyData } from "../../fetchVocabularyData";

import { useDispatch, useSelector } from "react-redux";
import { addVocabulary, removeVocabulary } from "../../redux/vocabularySlice";
import { addToExam, removeFromExam } from "../../redux/examSlice";
import { generateVocabularyId } from "../../getId";
import SEO from "../../components/SEO";

/* İnce çizgi ikonlar */
const IconGrammar = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M4 6h16v2H4V6zm0 4h10v2H4v-2zm0 4h16v2H4v-2zm12 4h4v2h-4v-2z"
    />
  </svg>
);
const IconDictionary = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M6 4h9a3 3 0 0 1 3 3v13l-3-2-3 2-3-2-3 2V7a3 3 0 0 1 3-3z"
    />
  </svg>
);
const IconLibrary = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M3 5h4v14H3V5zm7 0h4v14h-4V5zm7 0h4v14h-4V5z"
    />
  </svg>
);
const IconExam = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M5 3h14a2 2 0 0 1 2 2v14l-4-3-4 3-4-3-4 3V5a2 2 0 0 1 2-2zm2 6h10v2H7V9zm0 4h8v2H7v-2z"
    />
  </svg>
);

export default function Homepage() {
  const HOME_BASE = "turkish";
  const HOME_TARGET = "english";
  const MOBILE_ROW_LIMIT = 8;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allVocabs = useSelector((s) => s.vocabulary.dynamicVocabularies);
  const exams = useSelector((s) => s.exam.exams);
  const scriptType = `${HOME_BASE}-${HOME_TARGET}`;
  const savedList = allVocabs[scriptType] || [];

  const libraryCount = savedList.length;
  const examCount = exams.length;

  const [randomVocabs, setRandomVocabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [homeQuery, setHomeQuery] = useState("");

  // Öneriler (son aramalar + trendler)
  const [openSuggest, setOpenSuggest] = useState(false);
  const [cursor, setCursor] = useState(0);
  const inputWrapRef = useRef(null);
  const recent = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("elangual_recent") || "[]");
    } catch {
      return [];
    }
  }, [openSuggest, homeQuery]);
  const trending = useMemo(
    () => ["merhaba", "çalışmak", "ev", "öğrenmek", "arkadaş"],
    []
  );
  const itemsOnly = [...recent, ...trending];

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : true
  );
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setOpenDropdownId(null);
      if (inputWrapRef.current && !inputWrapRef.current.contains(e.target))
        setOpenSuggest(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const loadRandom = async () => {
    try {
      setLoading(true);
      setErr(null);
      const data = await fetchVocabularyData(HOME_BASE, HOME_TARGET);
      const clean = data
        .filter(
          (i) => i[HOME_BASE] && i.translation && i.translation[HOME_TARGET]
        )
        .map((curr) => ({
          ...curr,
          id: generateVocabularyId(curr, HOME_BASE, HOME_TARGET),
        }));
      const shuffled = [...clean].sort(() => Math.random() - 0.5);
      setRandomVocabs(shuffled.slice(0, 24));
    } catch (e) {
      setErr(e.message || "Bilinmeyen hata");
      setRandomVocabs([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadRandom();
  }, []);

  function commitSearch(q) {
    const norm = (q || "").trim();
    if (!norm) return;
    try {
      const curr = JSON.parse(localStorage.getItem("elangual_recent") || "[]");
      const next = [norm, ...curr.filter((x) => x !== norm)].slice(0, 6);
      localStorage.setItem("elangual_recent", JSON.stringify(next));
    } catch {}
    navigate(`/vocabulary?q=${encodeURIComponent(norm)}`);
  }

  const submitHomeSearch = (e) => {
    e.preventDefault();
    commitSearch(homeQuery);
  };

  function onKeyDown(e) {
    if (!openSuggest) {
      if (e.key === "Enter") submitHomeSearch(e);
      if (e.key === "Escape") setOpenSuggest(false);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (c + 1) % Math.max(1, itemsOnly.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor(
        (c) =>
          (c - 1 + Math.max(1, itemsOnly.length)) %
          Math.max(1, itemsOnly.length)
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = itemsOnly[cursor];
      if (pick) {
        commitSearch(pick);
        setOpenSuggest(false);
      } else {
        submitHomeSearch(e);
      }
    } else if (e.key === "Escape") {
      setOpenSuggest(false);
    }
  }

  const isInList = (item) => savedList.some((v) => v.id === item.id);
  const isInExam = (item) => exams.some((v) => v.id === item.id);

  const handleAddVocabulary = (item) =>
    dispatch(
      addVocabulary({
        newVocabulary: { ...item, base: HOME_BASE, target: HOME_TARGET },
        scriptType,
      })
    );
  const handleRemoveVocabulary = (item) =>
    dispatch(removeVocabulary({ id: item.id, scriptType }));
  const handleAddExam = (item) =>
    dispatch(addToExam({ ...item, base: HOME_BASE, target: HOME_TARGET }));
  const handleRemoveExam = (item) => dispatch(removeFromExam(item.id));
  const handleRemoveCompletely = (item) => {
    dispatch(removeVocabulary({ id: item.id, scriptType }));
    dispatch(removeFromExam(item.id));
  };

  const selectedItem = randomVocabs.find((i) => i.id === openDropdownId);

  const listForView = isMobile
    ? randomVocabs.slice(0, MOBILE_ROW_LIMIT)
    : randomVocabs;

  // JSON-LD
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://elangual.com";
  const jsonLdSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Elangual",
    url: origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${origin}/vocabulary?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="Homepage Main">
      <SEO
        title="Elangual: Türkçe konuşanlar için hızlı ve erişilebilir dil öğrenme"
        description="Elangual: Dilbilgisi, sözlük ve testlerle hızlı öğren. Arama önde, güçlü CTA’lar, erişilebilir tasarım."
        canonical="https://elangual.com/"
        jsonLd={jsonLdSite}
      />

      {/* HERO – kutusuz, akışkan */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__inner">
          <h1 id="hero-title" className="hp-title">
            Bugün öğren – yarın konuş
          </h1>
          <p className="hp-subtitle">
            <NavLink to="/how-it-works" className="link-quiet">
              Elangual nasıl çalışır
            </NavLink>
          </p>

          {/* Arama + Öneriler */}
          <form
            className="hp-search"
            onSubmit={submitHomeSearch}
            role="search"
            aria-label="Arama"
          >
            <div className="search-group" ref={inputWrapRef}>
              <input
                type="search"
                placeholder="Kelime ara veya keşfet…"
                value={homeQuery}
                onChange={(e) => setHomeQuery(e.target.value)}
                onFocus={() => setOpenSuggest(true)}
                onKeyDown={onKeyDown}
                aria-label="Arama"
                aria-expanded={openSuggest}
                aria-controls="hp-suggestions"
              />
              <button type="submit" className="btn btn-primary">
                Ara
              </button>
            </div>

            {openSuggest && (recent.length > 0 || trending.length > 0) && (
              <div
                id="hp-suggestions"
                className="suggestions"
                role="listbox"
                aria-label="Öneriler"
              >
                <ul>
                  {recent.length > 0 && (
                    <li className="suggestions__section">Son aramalar</li>
                  )}
                  {recent.map((label, idx) => {
                    const sel = cursor === idx;
                    return (
                      <li
                        key={`r-${label}`}
                        role="option"
                        aria-selected={sel}
                        onMouseDown={() => {
                          setHomeQuery(label);
                          commitSearch(label);
                          setOpenSuggest(false);
                        }}
                      >
                        {label}
                      </li>
                    );
                  })}
                  {trending.length > 0 && (
                    <li className="suggestions__section">Trendler</li>
                  )}
                  {trending.map((label, idx) => {
                    const pos = recent.length + idx;
                    const sel = cursor === pos;
                    return (
                      <li
                        key={`t-${label}`}
                        role="option"
                        aria-selected={sel}
                        onMouseDown={() => {
                          setHomeQuery(label);
                          commitSearch(label);
                          setOpenSuggest(false);
                        }}
                      >
                        {label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </form>

          {/* Desktop özellik kısayolları */}
          <div className="features" role="navigation" aria-label="Kısayollar">
            <NavLink to="/grammar" className="feature-pill">
              <span className="icon">
                <IconGrammar />
              </span>
              Dilbilgisi
            </NavLink>
            <NavLink to="/vocabulary" className="feature-pill">
              <span className="icon">
                <IconDictionary />
              </span>
              Sözlükler
            </NavLink>
            <NavLink to="/myvocabularies" className="feature-pill">
              <span className="icon">
                <IconLibrary />
              </span>
              Kütüphanem
              <span className="pill-badge" aria-live="polite">
                {libraryCount}
              </span>
            </NavLink>
            <NavLink to="/myexams" className="feature-pill">
              <span className="icon">
                <IconExam />
              </span>
              Sınavlarım
              <span className="pill-badge" aria-live="polite">
                {examCount}
              </span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Popüler kelimeler */}
      <section className="popular" aria-label="Popüler kelimeler">
        <div className="section-header">
          <h2>Şimdi popüler kelimeleri keşfet</h2>
          <button
            className="btn btn-refresh"
            onClick={loadRandom}
            title="Yenile"
            type="button"
          >
            Yenile
          </button>
        </div>

        {loading ? (
          <div className="skeleton-list" aria-label="Yükleniyor">
            {Array.from({ length: isMobile ? MOBILE_ROW_LIMIT : 12 }).map(
              (_, i) => (
                <div className="skeleton-line" key={i} />
              )
            )}
          </div>
        ) : err ? (
          <div className="inline-error" role="alert">
            Bir şeyler ters gitti: {err}
          </div>
        ) : listForView.length === 0 ? (
          <div className="inline-empty">Sonuç yok. Başka bir arama dene.</div>
        ) : (
          <div className="vocab-list compact" role="list" aria-live="polite">
            {listForView.map((item) => {
              const inList = isInList(item);
              const inExam = isInExam(item);

              return (
                <div
                  className="vocab-row"
                  key={item.id}
                  onClick={() => isMobile && setOpenDropdownId(item.id)}
                  role={isMobile ? "button" : undefined}
                  tabIndex={isMobile ? 0 : -1}
                  aria-label={`${item[HOME_BASE]} → ${item.translation[HOME_TARGET]}`}
                >
                  <div className="vocab-left">
                    <span className="base" aria-label={HOME_BASE}>
                      {item[HOME_BASE]}
                    </span>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                    <span className="target" aria-label={HOME_TARGET}>
                      {item.translation[HOME_TARGET]}
                    </span>
                  </div>

                  <div className="row-actions">
                    <button
                      type="button"
                      className={`chip-action ${
                        inList ? "outline" : "primary"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        inList
                          ? handleRemoveVocabulary(item)
                          : handleAddVocabulary(item);
                      }}
                      title={inList ? "Kütüphaneden çıkar" : "Kütüphaneye ekle"}
                    >
                      {inList ? "− Kütüphane" : "+ Kütüphane"}
                    </button>
                    <button
                      type="button"
                      className={`chip-action ${
                        inExam ? "outline" : "neutral"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        inExam ? handleRemoveExam(item) : handleAddExam(item);
                      }}
                      title={inExam ? "Sınavlardan çıkar" : "Sınavlara ekle"}
                    >
                      {inExam ? "− Sınav" : "+ Sınav"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Mobil eylem modalı */}
      {isMobile && selectedItem && (
        <div
          className="mobile-modal-backdrop"
          onClick={() => setOpenDropdownId(null)}
        >
          <div
            className="mobile-modal-content open"
            onClick={(e) => e.stopPropagation()}
            ref={dropdownRef}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="close-button"
              onClick={() => setOpenDropdownId(null)}
              aria-label="Kapat"
              type="button"
            >
              ✕
            </button>

            <div className="mobile-word">
              <div className="base">{selectedItem[HOME_BASE]}</div>
              <div className="arrow">→</div>
              <div className="target">
                {selectedItem.translation[HOME_TARGET]}
              </div>
            </div>

            <div className="modal-actions">
              {isInList(selectedItem) ? (
                <button
                  onClick={() => handleRemoveVocabulary(selectedItem)}
                  type="button"
                >
                  Kütüphaneden çıkar
                </button>
              ) : (
                <button
                  onClick={() => handleAddVocabulary(selectedItem)}
                  type="button"
                >
                  Kütüphaneye ekle
                </button>
              )}
              {isInExam(selectedItem) ? (
                <button
                  onClick={() => handleRemoveExam(selectedItem)}
                  type="button"
                >
                  Sınavlardan çıkar
                </button>
              ) : (
                <button
                  onClick={() => handleAddExam(selectedItem)}
                  type="button"
                >
                  Sınavlara ekle
                </button>
              )}
              {(isInList(selectedItem) || isInExam(selectedItem)) && (
                <button
                  className="remove-completely-button"
                  onClick={() => handleRemoveCompletely(selectedItem)}
                  type="button"
                >
                  Tamamen kaldır
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

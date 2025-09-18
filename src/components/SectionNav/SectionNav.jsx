// src/components/SectionNav/SectionNav.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MQ = "(min-width: 1600px)";
const PLAIN_GROUP = "__plain__";

function cleanLabel(raw = "") {
  let s = String(raw)
    .replace(/[\u00A0\u202F]/g, " ")
    .trimEnd();
  const opens = new Set(["(", "（"]);
  const closes = new Set([")", "）"]);
  for (;;) {
    const last = s[s.length - 1];
    if (!closes.has(last)) break;
    let depth = 0;
    let i = s.length - 1;
    for (; i >= 0; i--) {
      const ch = s[i];
      if (closes.has(ch)) depth++;
      else if (opens.has(ch)) {
        depth--;
        if (depth === 0) {
          s = s.slice(0, i).trimEnd();
          break;
        }
      }
    }
    if (i < 0) break;
  }
  return s.replace(/\s+/g, " ").trim();
}

/** Deutsche → Türkische Fallback-Übersetzungen für Unterthemen */
const SUB_TR_MAP = {
  einleitung: "Giriş",
  einführung: "Giriş",
  aussprache: "Telaffuz",
  zahlen: "Sayılar",
  uhr: "Saat",
  uhrzeit: "Saat",
  zeit: "Saat",
  datum: "Tarih",
  grammatik: "Dilbilgisi",
};

/** Versucht, ein Unterthema sicher nach TR zu mappen */
function toTRSubLabel(label = "") {
  const src = cleanLabel(label);
  const key = src.toLowerCase();
  if (SUB_TR_MAP[key]) return SUB_TR_MAP[key];

  // Falls das Wort Teil eines längeren Labels ist, ersetze nur das Wort
  let out = src;
  Object.entries(SUB_TR_MAP).forEach(([de, tr]) => {
    const re = new RegExp(`\\b${de}\\b`, "i");
    if (re.test(out)) out = out.replace(re, tr);
  });
  return out;
}

/**
 * Props:
 * - items: [{ slug, label, index, group? }]
 * - activeSlug: string
 * - basePath: string
 * - subsections?: [{ id, label, to }]
 * - activeSub?: string
 * - isOpen?: boolean (mobil, kontrolliert)
 * - onToggle?: (open: boolean) => void
 */
export default function SectionNav({
  items = [],
  activeSlug,
  basePath,
  subsections = [],
  activeSub = null,
  isOpen: isOpenProp,
  onToggle,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  // Desktop/Mobile
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.matchMedia(MQ).matches
  );

  // Controlled vs. Uncontrolled
  const [isOpenUncontrolled, setIsOpenUncontrolled] = useState(false);
  const isControlled =
    typeof isOpenProp === "boolean" && typeof onToggle === "function";
  const isOpen = isControlled ? !!isOpenProp : isOpenUncontrolled;

  const setOpen = (v) => {
    if (isControlled) onToggle?.(!!v);
    else setIsOpenUncontrolled(!!v);
  };

  const toggleOpen = () => {
    if (isControlled) onToggle?.(!isOpen);
    else setIsOpenUncontrolled((x) => !x);
  };

  const [q, setQ] = useState("");

  // Desktop/Mobile Switch
  useEffect(() => {
    const mm = window.matchMedia(MQ);
    const onChange = (e) => {
      setIsDesktop(e.matches);
      if (e.matches) setOpen(false); // Drawer schließen beim Wechsel auf Desktop
    };
    mm.addEventListener?.("change", onChange);
    return () => mm.removeEventListener?.("change", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ESC schließt Overlay (mobil)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && !isDesktop) setOpen(false);
    };
    if (!isDesktop) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [isDesktop]); // eslint-disable-line

  // Body-Scroll-Lock (mobil)
  useEffect(() => {
    if (!isDesktop) {
      document.body.style.overflow = isOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, isDesktop]);

  // Drawer NICHT automatisch beim Navigieren schließen – bleibt offen bis Unterthema geklickt wird.

  // Normalisierte Themen
  const routerSections = useMemo(
    () =>
      items.map((it) => ({
        id: it.slug,
        slug: it.slug,
        title: it.label,
        index: it.index,
        group: it.group || null,
      })),
    [items]
  );

  // Suche (nur Top-Level)
  const filteredRouter = useMemo(() => {
    const qq = q.trim().toLowerCase();
    if (!qq) return routerSections;
    return routerSections.filter((it) =>
      cleanLabel(it.title).toLowerCase().includes(qq)
    );
  }, [routerSections, q]);

  // Gruppen
  const groupedRouter = useMemo(() => {
    const map = new Map();
    (filteredRouter || []).forEach((it) => {
      const g = it.group || PLAIN_GROUP;
      if (!map.has(g)) map.set(g, []);
      map.get(g).push(it);
    });
    return Array.from(map.entries());
  }, [filteredRouter]);

  const navVisible = isDesktop || isOpen;
  const isActiveTop = (item) => (item.slug ?? item.id) === activeSlug;

  return (
    <nav
      id="grammar-sections"
      className={`grammar-section-nav ${
        isDesktop ? "is-desktop" : "is-mobile"
      } ${navVisible ? "show" : ""}`}
      aria-label="Başlıklar"
      data-component="section-nav"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Brand (nur Desktop sichtbar per CSS) */}
      <a href="/" className="nav-brand" aria-label="Langual">
        <span className="navbrand-badge" aria-hidden>
          <span className="navbrand-badge-glow" />
          <span className="navbrand-badge-e">E</span>
        </span>
        <span className="navbrand-name">Langual</span>
      </a>

      <div className="nav-head">
        <div className="nav-title">Başlıklar</div>
        {!isDesktop && (
          <button
            className="nav-close"
            onClick={toggleOpen}
            aria-label="Kapat"
            title="Kapat"
            type="button"
          >
            ×
          </button>
        )}
      </div>

      {/* Suche */}
      <div className="sn-search" style={{ padding: "0 .75rem .5rem" }}>
        <input
          type="search"
          placeholder="Ara…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Başlık ara"
          style={{
            width: "100%",
            padding: ".5rem",
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
          }}
        />
      </div>

      {/* Gruppen + Themenliste */}
      <div>
        {groupedRouter.map(([groupName, list]) => {
          const name = groupName === PLAIN_GROUP ? null : groupName;

          return (
            <div className="sn-group" key={groupName}>
              {name && (
                <div
                  className="sn-group-head"
                  style={{ padding: ".4rem .75rem", fontWeight: 600 }}
                >
                  {name}
                </div>
              )}

              <ul className="section-list" role="list">
                {list.map((s) => {
                  const active = isActiveTop(s);
                  const path = `${basePath}/${s.slug}`;
                  return (
                    <li
                      key={s.id}
                      className={`section-item ${active ? "is-active" : ""}`}
                      data-slug={s.slug}
                    >
                      {/* Top-Level Thema – Drawer bleibt offen */}
                      <button
                        className={`section-link ${active ? "is-active" : ""}`}
                        onClick={() => navigate(path)}
                        aria-current={active ? "page" : undefined}
                        type="button"
                      >
                        <span className="num">{s.index}</span>
                        <span className="label">{cleanLabel(s.title)}</span>
                      </button>

                      {/* Unterpunkte nur beim aktiven Thema */}
                      {active && subsections?.length > 0 && (
                        <ul className="subsection-list" role="list">
                          {subsections.map((sub) => {
                            const isActiveSub = sub.id === (activeSub || "");
                            const labelTR = toTRSubLabel(sub.label);
                            return (
                              <li
                                key={sub.id}
                                className={`subsection-item ${
                                  isActiveSub ? "is-active" : ""
                                }`}
                              >
                                <button
                                  type="button"
                                  className="subsection-link"
                                  onClick={() => {
                                    navigate(sub.to);
                                    if (!isDesktop) setOpen(false);
                                  }}
                                  aria-current={
                                    isActiveSub ? "page" : undefined
                                  }
                                  data-anchor={sub.id}
                                  aria-label={labelTR}
                                >
                                  <span className="sub-label">{labelTR}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

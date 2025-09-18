// src/components/GrammarControls/GrammarControls.jsx
import React from "react";

export const LANGS = [
  { code: "ger", label: "Almanca", enabled: true },
  { code: "en", label: "İngilizce", enabled: true },
  { code: "es", label: "İspanyolca", enabled: false },
];

export const LEVELS = ["A1", "A2", "B1", "B2"];

/**
 * Dropdown-Leiste ohne sichtbare Labels (nur sr-only).
 * Props: lang, level, onChange({lang?, level?}), compact?
 */
export default function GrammarControls({
  lang,
  level,
  onChange,
  compact = false,
}) {
  const onLang = (e) => onChange?.({ lang: e.target.value });
  const onLevel = (e) => onChange?.({ level: e.target.value });

  return (
    <div
      className={`controls-bar ${compact ? "is-compact" : ""}`}
      role="group"
      aria-label="Seçimler"
    >
      <label className="control">
        <span className="sr-only">Seviye</span>
        <select
          className="control-select"
          value={level}
          onChange={onLevel}
          aria-label="Seviye seç"
        >
          {LEVELS.map((lv) => (
            <option key={lv} value={lv}>
              {lv}
            </option>
          ))}
        </select>
      </label>

      <label className="control">
        <span className="sr-only">Dil</span>
        <select
          className="control-select"
          value={lang}
          onChange={onLang}
          aria-label="Dil seç"
        >
          {LANGS.map((l) => (
            <option key={l.code} value={l.code} disabled={!l.enabled}>
              {l.label}
              {!l.enabled ? " (yakında)" : ""}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

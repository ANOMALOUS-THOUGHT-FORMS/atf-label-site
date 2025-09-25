import * as React from "react";
import sigil from "../images/logo.png";

export default function ThoughtFormBack({ authorsNote, height, created, viewATF }) {
  // allow number or css string for height
  const boxHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className="tf-sheet tf-back paper"
      style={{ height: boxHeight, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      aria-label="Back of sheet"
    >
      {/* Center area: sigil + note */}
      <div style={{ display: "flex", flexDirection: "column", "height": "100%", justifyContent: "center", padding: "1rem" }}>
        <div className="tf-back-sigil" aria-hidden="true" style={{ display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
          <img src={sigil} alt="" style={{ width: "min(180px, 32%)", height: "auto", opacity: 0.95 }} />
        </div>

        {authorsNote && (
          <p className="tf-back-note" style={{ margin: 0, alignSelf: "center", textAlign: "center", maxWidth: "64ch" }}>
            {authorsNote}
          </p>
        )}
      </div>

      {/* Bottom strip: date left, button right */}
      <div
        className="bottom-bar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "1rem",
          padding: "0.75rem 1.25rem",
          borderTop: "1px dashed color-mix(in oklab, var(--line) 30%, transparent)",
        }}
      >
        {created && (
          <time className="tf-back-date" dateTime={created}>
            {created}
          </time>
        )}

        <button
          type="button"
          className="tf-details"
          onClick={viewATF}
          aria-label="View ATF front"
        >
          AFT
        </button>
      </div>
    </div>
  );
}

// src/components/Header.jsx
import * as React from "react";
import { Link } from "gatsby";
import sigil from "../images/logo.png"; // your PNG

export default function Header() {
  return (
    <header className="atf-header" role="banner">
      {/* Left zone (optional nav or leave empty) */}
      <div className="atf-header__left" aria-label="Primary">
        <Link to="/releases" className="atf-logo" aria-label="ATF Home">
          <img src={sigil} alt="" aria-hidden="true" />
        </Link>
      </div>

      {/* Centered title */}
      <div className="atf-header__center">
        <div className="atf-wordmark">
          ANOMALOUS THOUGHT FORMS
        </div>
      </div>

    </header>
  );
}

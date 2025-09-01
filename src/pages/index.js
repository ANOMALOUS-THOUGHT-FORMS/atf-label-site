// src/pages/index.jsx
import * as React from "react";
import { navigate } from "gatsby";
import sigil from "../images/logo.png";
import SEO from "../components/seo";

export const Head = () => (
  <SEO
    title="PORTAL"
    description="Anomalous Thought Forms — enter the portal."
    path="/"
    noindex
    canonical="https://anomalousthoughtforms.com"
  />
);

export default function SplashPage() {
  React.useEffect(() => {
    // lock scroll on splash
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <main className="splash" role="main" aria-label="ATF Splash">
      <section className="frame">
        <div className="sigil"><img src={sigil} alt="" aria-hidden="true" /></div>
        <h1 className="atf-title">ANOMALOUS THOUGHT FORMS</h1>
        <p className="tagline">A label for releasing ideas, art and other thought forms that deviate from what is standard, normal or expected.</p>
        <button className="cta" onClick={() => navigate("/releases")}>Enter</button>
      </section>
    </main>
  );
}

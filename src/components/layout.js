// src/components/Layout.jsx
import * as React from "react";
import Header from "./header";

export default function Layout({ children, showHeader = true }) {
  return (
    <>
      {showHeader && <Header />}
      <main id="main">{children}</main>
    </>
  );
}

import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Spacestagram</h1>
      <p className="header__sub-title">NASA's Astronomy Picture of the Day!</p>
    </header>
  );
}

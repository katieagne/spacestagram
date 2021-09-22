import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <article className="header__container">
        <h1 className="header__title">Spacestagram</h1>
        <p className="header__sub-title">
          NASA's Astronomy Picture of the Day!
        </p>
      </article>
    </header>
  );
}

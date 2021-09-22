import React from "react";
import "./Card.scss";
import Like from "../Like/Like";

export default function Card({ photo }) {
  return (
    <article className="card">
      <div className="card__top">
        <div className="card__top-wrapper">
          <p className="card__copyright">{photo.copyright}</p>
          <p className="card__date">{photo.date}</p>
        </div>
      </div>
      <img
        className="card__img"
        src={photo.url}
        alt="provided by NASA's APOD API"
      />
      <div className="card__info">
        <div className="card__title-wrapper">
          <h1 className="card__title">{photo.title}</h1>
          <Like />
        </div>
        <p className="card__text">{photo.explanation}</p>
      </div>
    </article>
  );
}

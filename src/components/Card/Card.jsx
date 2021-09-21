import React from "react";
import "./Card.scss";
import Modal from "../Modal/Modal";

export default function Card({ photo, showModal, show }) {
  return (
    <div>
      <p>card</p>
      <img src={photo.url} />
      <h1>{photo.title}</h1>
      <p>{photo.explanation}</p>

      <button
        onClick={(e) => {
          showModal();
        }}
      >
        show modal
      </button>
      <Modal show={show} />
    </div>
  );
}

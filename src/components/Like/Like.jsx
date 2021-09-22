import React from "react";
import useLocalStorage from "../../hooks/UseLocalStorage";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Like() {
  const [like, setLike] = useLocalStorage("liked", false);
  return (
    <span
      onClick={() => {
        setLike(!like);
      }}
    >
      {like === false ? (
        <FontAwesomeIcon icon={farHeart} style={{ color: "salmon" }} />
      ) : (
        <FontAwesomeIcon icon={faHeart} pulse style={{ color: "salmon" }} />
      )}
    </span>
  );
}

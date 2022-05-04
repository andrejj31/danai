import React, { useState, useEffect } from "react";
import {
  faBook,
  faBarcode,
  faPrescriptionBottle,
  faBoxOpen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePopup from "../../hooks/usePopup";

export default function BrandPopup(props) {
  const { show, handleClose } = usePopup(props);
  const { popup } = props;
  //   const {
  //     name,
  //     description,
  //     catalogNumber,
  //     barCode,
  //     quantity,
  //     transportPackages,
  //   } = props.popup;
  return (
    <div
      className="overlay"
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="popup popup-brand">
        <h4>{popup.name}</h4>
        <p>{popup.description}</p>
        <div className="popup__close popup-brand__close" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
}

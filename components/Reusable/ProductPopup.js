import React, { useState, useEffect } from "react";
import myLoader from "../../utils/loader";
import Image from "next/image";
import {
  faBook,
  faBarcode,
  faPrescriptionBottle,
  faBoxOpen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePopup from "../../hooks/usePopup";

export default function ProductPopup(props) {
  const { show, handleClose } = usePopup(props);
  const {
    name,
    description,
    catalogNumber,
    barCode,
    quantity,
    transportPackages,
    image,
  } = props.popup;

  const url = `/Products/${image}.png`;
  const loaderUrl = myLoader(url);

  return (
    <div
      className="overlay"
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="popup popup-product">
        <h4>{name} </h4>
        <div className="popup-product__info">
          <div className="popup-product__img">
            <Image
              loader={() => myLoader(url)}
              src={loaderUrl}
              height={200}
              width={200}
              objectFit="contain"
              priority={true}
            ></Image>
          </div>
          <div className="popup-product__about">
            <h5 className="popup-product__h5">Опис на пакување</h5>
            <div className="popup-product__wrap">
              <div>
                <FontAwesomeIcon fixedWidth icon={faBook} />
                Каталошки број
              </div>
              <span>{catalogNumber}</span>
            </div>
            <div className="popup-product__wrap">
              <div>
                <FontAwesomeIcon fixedWidth icon={faBarcode} />
                Bar Code
              </div>
              <span>{barCode}</span>
            </div>
            <div className="popup-product__wrap">
              <div>
                <FontAwesomeIcon fixedWidth icon={faPrescriptionBottle} />
                Количини
              </div>
              <span>{quantity}</span>
            </div>
            <div className="popup-product__wrap">
              <div>
                <FontAwesomeIcon fixedWidth icon={faBoxOpen} />
                Транспортно пакување
              </div>
              <span>{transportPackages}</span>
            </div>
          </div>
        </div>
        <div className="popup-product__desc">
          <h5 className="popup-product__h5">Опис на производот:</h5>
          <p>{description}</p>
        </div>
        <div
          className="popup__close popup-product__close"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
}

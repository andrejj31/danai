import React from "react";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src="/Base/logo.png" alt="" />
        <ul className="footer__nav">
          <li>
            <Link href="/">Почетна</Link>
          </li>
          <li>
            <Link href="/products">Производи</Link>
          </li>
          <li>
            <Link href="/products">Кариера</Link>
          </li>
        </ul>
        <div className="footer__contact">
          <a href="">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faSquarePhone} />
          </a>
        </div>
        <span className="footer__copy">
          ©2022 Сите права се задржани | made with <span>❤</span> by wellworks
          creative
        </span>
      </div>
    </footer>
  );
}

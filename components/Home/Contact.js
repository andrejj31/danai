import React, { useRef, useEffect } from "react";
import {
  faMapLocationDot,
  faSquarePhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation("home");
  const removeRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      removeRef.current.remove();
    }, 2000);
  }, []);

  return (
    <section className="contact spacing">
      <h1 className="heading-orange text-center">{t("contact_heading")}</h1>
      <div className="bg-light">
        <div className="contact__location">
          <iframe
            width="1200"
            height="408"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=1200&amp;height=408&amp;hl=en&amp;q=%D0%91%D1%83%D0%BB.%20%D0%9F%D0%B0%D1%80%D1%82%D0%B8%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%20%D0%9E%D0%B4%D0%B4%D1%80%D0%B5%D0%B4%D0%B8%20%D0%B1%D1%80.156/%D0%B0%20%D0%A1%D0%BA%D0%BE%D0%BF%D1%98%D0%B5%20Skopje+(%D0%94%D0%B0%D0%BD%D0%B0%D0%B8%20%D0%A4%D0%B0%D1%80%D0%BC)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{" "}
          <a ref={removeRef} href="https://taucheruhrdirekt.com/">
            Andrej
          </a>{" "}
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=c1e027dd0156c08922dc8f74bf29161ee11d3d6f"
          ></script>
        </div>
        <div className="contact__info container">
          <div className="contact__wrapper">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <div>
              <h4>Адреса</h4>
              <span>Бул. Партизански Оддреди бр.156/а Скопје</span>
            </div>
          </div>
          <div className="contact__wrapper">
            <FontAwesomeIcon icon={faSquarePhone} />
            <div>
              <h4>Телефон за контакт</h4>
              <span>02 2036 086</span>
            </div>
          </div>
          <div className="contact__wrapper">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <h4>Е-пошта</h4>
              <span>info@danaifarm.com.mk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

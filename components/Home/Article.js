import React from "react";
import { useTranslation } from "next-i18next";

export default function Article() {
  const { t } = useTranslation("home");
  return (
    <section className="article spacing">
      <div className="bg-light bg-padding">
        <div className="article__content container split">
          <div className="article__typography">
            <h3 className="heading-orange">{t("about_heading")}</h3>
            <p>{t("about_company")}</p>
          </div>
          <div className="article__img">
            <img src="/Base/lab.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

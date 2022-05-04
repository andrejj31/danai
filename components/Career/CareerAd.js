import React, { useCallback } from "react";
import { useRouter } from "next/router";

export default function CareerAd({ ad, setPopup }) {
  const router = useRouter();
  const locale = router.locale;

  let { name, description, qualifications, status, translation, _id: id } = ad;

  if (locale !== "mk") {
    name = translation[locale].name;
    description = translation[locale].description;
    qualifications = translation[locale].qualifications;
  }

  return (
    <article className="career__ad">
      <div className="career__title">
        <h5>{name}</h5>
        <p>
          Статус на огласот:{" "}
          <span
            style={
              status === "отворен" ? { color: "#33f82f" } : { color: "#ff5b5b" }
            }
          >
            {status}
          </span>
        </p>
      </div>
      <div className="career__about">
        <h5 className="career__subtitle">Опис на работната позиција</h5>
        <p>{description}</p>
      </div>
      <ul className="career__requirements" aria-label="Потребни квалификации:">
        {qualifications.map((el, idx) => {
          return <li key={idx}>{el}</li>;
        })}
      </ul>
      {status === "отворен" ? (
        <button
          className="career__cta cta-linear"
          onClick={() => setPopup({ open: true, name, id })}
        >
          Аплицирај за оваа позиција
        </button>
      ) : (
        <></>
      )}
    </article>
  );
}

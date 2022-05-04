import React from "react";
import { useRouter } from "next/router";

export default function Brand({ setPopup, name, description, translation }) {
  const router = useRouter();
  const locale = router.locale;
  if (locale !== "mk") {
    name = translation[locale].name;
    description = translation[locale].description;
  }
  return (
    <div className="landing__brand keen-slider__slide">
      <h4 data-before-content={`${name}`}>{name}</h4>
      <button
        className="cta-classic"
        onClick={() =>
          setPopup({
            open: true,
            name,
            description,
          })
        }
      >
        повеќе &rarr;
      </button>
    </div>
  );
}

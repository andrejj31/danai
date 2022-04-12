import React, { useEffect, useState } from "react";
import Product from "../Reusable/Product";
import ProductPopup from "../Reusable/ProductPopup";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "next-i18next";

export default function Products({ products }) {
  const { t } = useTranslation("home");
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 5,
        spacing: 10,
      },
      // rtl: true,
      loop: true,
      initial: 0,

      breakpoints: {
        "(max-width: 1200px)": {
          slides: {
            perView: 4,
            spacing: 15,
          },
        },
        "(max-width: 1000px)": {
          slides: {
            perView: 4,
            spacing: 5,
          },
        },
        "(max-width: 800px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
        "(max-width: 650px)": {
          slides: {
            perView: 3,
            spacing: 5,
          },
        },
        "(max-width: 600px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(max-width: 500px)": {
          slides: {
            perView: 2,
            spacing: 5,
          },
        },
      },
    },

    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const [popup, setPopup] = useState({ open: false });
  return (
    <>
      <section className="popularProd spacing">
        <h1 className="heading-orange text-center">{t("products_heading")}</h1>
        <div className="bg-light bg-padding">
          <div className="container">
            <div
              ref={sliderRef}
              className="popularProd__products bg-light keen-slider"
            >
              {products.map((product, idx) => {
                return (
                  <Product
                    key={idx}
                    className="keen-slider__slide"
                    setPopup={setPopup}
                    product={product}
                  ></Product>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <ProductPopup popup={popup} setPopup={setPopup}></ProductPopup>
    </>
  );
}

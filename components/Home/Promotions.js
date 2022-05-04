import React from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Promotions() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 1,
        //    spacing: 10,
      },
      loop: true,
      initial: 0,
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
  return (
    <section className="promotions spacing">
      <h1 className="heading-orange text-center">АКТИВНИ ПРОМОЦИИ</h1>
      <div className="bg-light">
        <div className="promotions__wrapper container ">
          <div className="promotions__slider keen-slider" ref={sliderRef}>
            <img src="/baner.jpg" className="keen-slider__slide" />
            <img src="/baner.jpg" className="keen-slider__slide" />
            <img src="/baner.jpg" className="keen-slider__slide" />
          </div>
        </div>
      </div>
    </section>
  );
}

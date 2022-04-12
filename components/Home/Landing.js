import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Landing() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 4,
        spacing: 10,
      },
      // rtl: true,
      loop: true,
      initial: 0,
      breakpoints: {
        "(max-width: 900px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
        "(max-width: 700px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(max-width: 450px)": {
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
  return (
    <section className="landing">
      <div className="container">
        <div className="landing__content">
          <h1>НАШИ БРЕНДОВИ</h1>
          <p>
            Danai Farm разви неколку свои брендови кои се релевантни на пазарот
            брендови кои се релевантни на пазарот брендови кои се релевантни на
            пазарот
          </p>
        </div>
        <div className="landing__brands container">
          <div className="keen-slider " ref={sliderRef}>
            <div className="landing__brand keen-slider__slide">
              <h4 data-before-content="Proderm">Proderm</h4>
              <button className="cta-classic">повеќе &rarr;</button>
            </div>
            <div className="landing__brand keen-slider__slide">
              <h4 data-before-content="Proderm">Proderm</h4>
              <button className="cta-classic">повеќе &rarr;</button>
            </div>
            <div className="landing__brand keen-slider__slide">
              <h4 data-before-content="Proderm">Proderm</h4>
              <button className="cta-classic">повеќе &rarr;</button>
            </div>
            <div className="landing__brand keen-slider__slide">
              <h4 data-before-content="Proderm">Proderm</h4>
              <button className="cta-classic">повеќе &rarr;</button>
            </div>
            <div className="landing__brand keen-slider__slide">
              <h4 data-before-content="Proderm">Proderm</h4>
              <button className="cta-classic">повеќе &rarr;</button>
            </div>
            <div className="landing__brand keen-slider__slide">
              <h4 data-before-content="Proderm">Proderm</h4>
              <button className="cta-classic">повеќе &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

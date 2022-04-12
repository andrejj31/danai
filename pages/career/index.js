import React, { useState } from "react";
import CareerAd from "../../components/Career/CareerAd";
import PageHead from "../../components/Reusable/PageHead";
import JobPopup from "../../components/Reusable/JobPopup";

export default function Career({ data: careerAds }) {
  const [popup, setPopup] = useState({ open: false });
  return (
    <>
      <PageHead
        title={"Кариера"}
        desc={
          "Компанијата е основана од страна на дипломиран фармацевт Сашо Спасовски во 2002 година. Во 2004 година започнавме со сопствено производство на козметички производи и средства за хигиена."
        }
      ></PageHead>
      <section className="career bg-light spacing">
        <div className="container">
          {careerAds.map((ad, idx) => {
            return <CareerAd ad={ad} key={idx} setPopup={setPopup}></CareerAd>;
          })}
        </div>
      </section>
      <JobPopup popup={popup} setPopup={setPopup}></JobPopup>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}jobs`);
  const data = await res.json();

  return {
    props: data,
    revalidate: 1,
  };
}

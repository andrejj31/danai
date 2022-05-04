import React from "react";
import PageHead from "../../components/Reusable/PageHead";
import Article from "../../components/Home/Article";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  return (
    <>
      {" "}
      <PageHead
        title={"За нас"}
        desc={
          "Компанијата е основана од страна на дипломиран фармацевт Сашо Спасовски во 2002 година. Во 2004 година започнавме со сопствено производство на козметички производи и средства за хигиена."
        }
      ></PageHead>
      <section className="about spacing-md">
        <div className="about__flex">
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

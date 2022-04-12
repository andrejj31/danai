import Article from "../components/Home/Article";
import Landing from "../components/Home/Landing";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}products?landingPage=true&lang=${locale}`
  );
  const data = await res.json();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <>
      <Landing></Landing>
      <Article></Article>
      <Products products={data.data}></Products>
      <Contact></Contact>
    </>
  );
}

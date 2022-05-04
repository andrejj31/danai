import Article from "../components/Home/Article";
import Landing from "../components/Home/Landing";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";
import Promotions from "../components/Home/Promotions";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  const productsRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}products?landingPage=true&lang=${locale}`
  );
  const products = await productsRes.json();

  const brandsRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}brands?lang=${locale}`
  );
  const brands = await brandsRes.json();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      products,
      brands,
    },
    // revalidate: 1,
  };
}

export default function Home({ products, brands }) {
  return (
    <>
      <Landing brands={brands.data}></Landing>
      <Promotions></Promotions>
      <Products products={products.data}></Products>
      <Contact></Contact>
    </>
  );
}

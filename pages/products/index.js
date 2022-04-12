import React, { useState } from "react";
import PageHead from "../../components/Reusable/PageHead";
import Product from "../../components/Reusable/Product";
import Pagination from "../../components/Reusable/Pagination";
import ProductPopup from "../../components/Reusable/ProductPopup";

export default function Products(props) {
  const [popup, setPopup] = useState({ open: false });
  const {
    data: { data },
  } = props;
  return (
    <>
      <PageHead
        title={"Продукти"}
        desc={
          "Компанијата е основана од страна на дипломиран фармацевт Сашо Спасовски во 2002 година. Во 2004 година започнавме со сопствено производство на козметички производи и средства за хигиена."
        }
      ></PageHead>
      <section className="products bg-light spacing">
        <div className="container">
          <h1 className="heading-orange products__heading">Сите производи</h1>
          <div className="products__grid">
            {data.map((product, idx) => {
              return (
                <Product
                  key={idx}
                  setPopup={setPopup}
                  product={product}
                ></Product>
              );
            })}
          </div>
          <Pagination pageCount={props.pageCount}></Pagination>
        </div>
      </section>
      <ProductPopup popup={popup} setPopup={setPopup}></ProductPopup>
    </>
  );
}
export async function getServerSideProps(context) {
  const { locale } = context;
  const query = context.resolvedUrl.split("?")[1];
  const itemsPerPage = 15;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}products?${query}&lang=${locale}`
  );

  // const category = await fetch(
  //   `${process.env.NEXT_PUBLIC_SERVER_API}categories?${query}&lang=${locale}`
  // );
  console.log(context.query.category);
  const data = await res.json();
  const pageCount = Math.ceil(
    parseInt(data.totalCount) / parseInt(itemsPerPage)
  );

  return {
    props: { data, pageCount },
  };
}

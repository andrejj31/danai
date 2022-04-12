import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AdminOptions from "./AdminOptions";
import Image from "next/image";
import myLoader from "../../utils/loader";

export default function Product({ setPopup, className, product }) {
  const router = useRouter();
  const locale = router.locale;
  let {
    translation,
    name,
    description,
    catalogNumber,
    barCode,
    quantity,
    transportPackages,
    image,
    _id: id,
  } = product;

  const url = `/Products/${image}.png`;
  const loaderUrl = myLoader(url);

  if (locale !== "mk") {
    name = translation[locale].name;
    description = translation[locale].description;
  }

  const adminButtons = [
    {
      title: "Измени го продуктот",
      type: "edit",
      location: `/products/${id}/edit`,
    },
    {
      title: "Избриши го продуктот",
      type: "delete",
      location: `products/${id}`,
      req: {
        method: "DELETE",
        data: { delete: "true" },
        options: { credentials: "include" },
      },
    },
  ];

  return (
    <div className={`product ${className ? className : ""}`}>
      <div className="product__img">
        {/* <img
          src={`${process.env.NEXT_PUBLIC_SERVER_IMAGES}Products/${image}.png`}
          alt=""
        /> */}
        <Image
          loader={() => myLoader(url)}
          src={loaderUrl}
          layout="fill"
          objectFit="contain"
          // src={`${process.env.NEXT_PUBLIC_SERVER_IMAGES}Products/${image}.png`}
        ></Image>
      </div>
      <div className="product__content">
        <h4>{name}</h4>
        <span>{quantity}</span>
      </div>
      <button
        className="cta-linear"
        onClick={() =>
          setPopup({
            open: true,
            name,
            description,
            catalogNumber,
            barCode,
            quantity,
            transportPackages,
          })
        }
      >
        Прочитај повеќе
      </button>
      <AdminOptions btns={adminButtons}></AdminOptions>
    </div>
  );
}

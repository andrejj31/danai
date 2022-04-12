import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import FormCustom from "../../../components/Reusable/FormCustom";

export default function Product(props) {
  const validate = Yup.object({
    name: Yup.string().required("Ова поле е задолжително"),
    description: Yup.string().required("Ова поле е задолжително"),
    translation: Yup.object({
      en: Yup.object({
        name: Yup.string().required("Ова поле е задолжително"),
        description: Yup.string().required("Ова поле е задолжително"),
      }),
    }),
    catalogNumber: Yup.number()
      .typeError("Дозволено е да внесете само бројки")
      .required("Ова поле е задолжително"),
    barCode: Yup.number()
      .typeError("Дозволено е да внесете само бројки")
      .required("Ова поле е задолжително"),
    quantity: Yup.string().required("Ова поле е задолжително"),
    transportPackages: Yup.string().required("Ова поле е задолжително"),
    category: Yup.string().required("Ова поле е задолжително"),
    // landingPage: Yup.bool().required("Ова поле е задолжително"),
    image: Yup.mixed().required("Мора да имате внесено слика од продуктот"),
  });

  const initialValues = {
    name: "",
    description: "",
    catalogNumber: "",
    barCode: "",
    quantity: "",
    transportPackages: "",
    category: "",
    image: "",
    // landingPage: "",
    translation: {
      en: {
        name: "",
        description: "",
      },
    },
  };

  const fields = [
    { name: "name", type: "text", label: "Име на продуктот (македонски)" },
    {
      name: "translation.en.name",
      type: "text",
      label: "Име на продуктот (англиски)",
    },
    {
      name: "description",
      type: "textarea",
      label: "Опис на продуктот (македонски)",
    },
    {
      name: "translation.en.description",
      type: "textarea",
      label: "Опис на продуктот (англиски)",
    },
    { name: "catalogNumber", type: "text", label: "Каталошки број" },
    { name: "barCode", type: "text", label: "Bar Code" },
    { name: "quantity", type: "text", label: "Количини" },
    { name: "transportPackages", type: "text", label: "Транспортни пакувања" },
    {
      name: "category",
      type: "select",
      label: "Категорија на продуктот",
      categories: props.data,
    },
    // {
    //   name: "landingPage",
    //   type: "select",
    //   label: "Насловна страна",
    //   categories: [
    //     { name: "Да", value: true },
    //     { name: "Не", value: false },
    //   ],
    // },
    { name: "image", type: "file", label: "Фотографија од продуктот" },
  ];
  const req = {
    url: `products`,
    method: "POST",
  };

  return (
    <div className="form-basic__bg bg-light spacing-sm">
      <div className="container">
        <h1 className="form-basic__heading">Креирај продукт</h1>
        <FormCustom
          validate={validate}
          initialValues={initialValues}
          fields={fields}
          req={req}
          file={true}
          ctaTitle={"Креирај продукт"}
          messages={{ success: "Успешно го креиравте продуктот!" }}
        ></FormCustom>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}product-categories`
  );
  const categories = await res.json();
  return {
    props: categories,
    revalidate: 1,
  };
}

Product.requireAuth = true;

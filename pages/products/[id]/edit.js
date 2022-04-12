import React from "react";
import * as Yup from "yup";
import FormCustom from "../../../components/Reusable/FormCustom";

export default function Edit(props) {
  const { data: categories } = props.categories;
  const { data: product } = props.product;
  console.log(product._id);

  product.category = product.category.name;
  console.log(categories);
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
  });

  const initialValues = {
    ...product,
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
      categories: categories,
    },
    // {
    //   name: "landingPage",
    //   type: "select",
    //   label: "Насловна страна",
    //   categories: ["Да", "Не"],
    // },
    { name: "image", type: "file", label: "Фотографија од продуктот" },
  ];
  const req = {
    url: `products/${product._id}`,
    method: "PATCH",
    options: { credentials: "include" },
  };
  return (
    <div className="form-basic__bg bg-light spacing-sm">
      <div className="container">
        <h1 className="form-basic__heading">Измени го продуктот</h1>
        <FormCustom
          validate={validate}
          initialValues={initialValues}
          fields={fields}
          req={req}
          file={true}
          ctaTitle={"Измени го продуктот"}
          messages={{ success: "Успешно го изменивте продуктот!" }}
        ></FormCustom>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}products`);
  const dataReady = await res.json();

  const paths = dataReady.data.map((product) => ({
    params: {
      id: product._id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}products/${id}`
  );
  const categoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}product-categories`
  );
  const categories = await categoriesRes.json();
  const product = await res.json();

  console.log(id);
  console.log(product.data);
  return {
    props: { product: product.data, categories },
    revalidate: 1,
  };
}

Edit.requireAuth = true;

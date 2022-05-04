import React from "react";
import * as Yup from "yup";
import FormCustom from "../../../components/Reusable/FormCustom";
import AdminMenu from "../../../components/Admin/AdminMenu";

export default function Brand() {
  const validate = Yup.object({
    name: Yup.string().required("Ова поле е задолжително"),
    description: Yup.string().required("Ова поле е задолжително"),
    translation: Yup.object({
      en: Yup.object({
        name: Yup.string().required("Ова поле е задолжително"),
        description: Yup.string().required("Ова поле е задолжително"),
      }),
    }),
  });

  const initialValues = {
    name: "",
    description: "",
    translation: {
      en: {
        name: "",
        description: "",
      },
    },
  };

  const fields = [
    {
      name: "name",
      type: "text",
      label: "Име на брендот (македонски)",
    },
    {
      name: "translation.en.name",
      type: "text",
      label: "Име на брендот (англиски)",
    },
    {
      name: "description",
      type: "textarea",
      label: "Опис (македонски)",
    },
    {
      name: "translation.en.description",
      type: "textarea",
      label: "Опис (англиски)",
    },
  ];
  const req = {
    url: `brands`,
    method: "POST",
  };

  return (
    <section className="admin bg-light spacing-sm">
      <div className="container">
        <AdminMenu></AdminMenu>
        <h1 className="form-basic__heading">Креирај бренд</h1>
        <FormCustom
          validate={validate}
          initialValues={initialValues}
          fields={fields}
          req={req}
          ctaTitle={"Креирај бренд"}
          messages={{ success: "Успешно го креиравте брендот!" }}
        ></FormCustom>
      </div>
    </section>
  );
}

Brand.requireAuth = true;

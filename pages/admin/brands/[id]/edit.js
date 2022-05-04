import React from "react";
import * as Yup from "yup";
import FormCustom from "../../../../components/Reusable/FormCustom";
import AdminMenu from "../../../../components/Admin/AdminMenu";

export default function Edit({ data }) {
  const { data: brand } = data;
  console.log(brand);
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
    ...brand,
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
    url: `brands/${brand._id}`,
    method: "PATCH",
    options: { credentials: "include" },
  };

  return (
    <section className="admin bg-light spacing-sm">
      <div className="container">
        <AdminMenu></AdminMenu>
        <h1 className="form-basic__heading">Измени го брендот</h1>
        <FormCustom
          validate={validate}
          initialValues={initialValues}
          fields={fields}
          req={req}
          ctaTitle={"Измени го брендот"}
          messages={{ success: "Успешно го изменивте брендот!" }}
        ></FormCustom>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}brands/${id}`);
  const data = await res.json();
  return {
    props: data,
  };
}

Edit.requireAuth = true;

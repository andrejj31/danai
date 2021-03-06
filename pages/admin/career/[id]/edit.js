import React from "react";
import * as Yup from "yup";
import FormCustom from "../../../../components/Reusable/FormCustom";
import AdminMenu from "../../../../components/Admin/AdminMenu";

export default function Edit({ data }) {
  const { data: job } = data;
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
    ...job,
  };

  const fields = [
    {
      name: "name",
      type: "text",
      label: "Име на работната позиција (македонски)",
    },
    {
      name: "translation.en.name",
      type: "text",
      label: "Име на работната позиција (англиски)",
    },
    {
      name: "description",
      type: "textarea",
      label: "Опис на работната позиција (македонски)",
    },
    {
      name: "translation.en.description",
      type: "textarea",
      label: "Опис на работната позиција (англиски)",
    },
    {
      name: "status",
      type: "select",
      label: "Статус на огласот",
      categories: ["отворен", "затворен"],
      className: "form-basic__group-full",
    },
    {
      name: "qualifications",
      type: "fieldArray",
      label: "Квалификации за оваа работа (македонски)",
    },
    {
      name: "translation.en.qualifications",
      type: "fieldArray",
      label: "Квалификации за оваа работа (англиски)",
    },
  ];

  const req = {
    url: `jobs/${job._id}`,
    method: "PATCH",
    options: { credentials: "include" },
  };

  return (
    <section className="admin bg-light spacing-sm">
      <div className="container">
        <AdminMenu></AdminMenu>
        <h1 className="form-basic__heading">Измени го огласот</h1>
        <FormCustom
          validate={validate}
          initialValues={initialValues}
          fields={fields}
          req={req}
          ctaTitle={"Измени го огласот"}
          messages={{ success: "Успешно го изменивте огласот!" }}
        ></FormCustom>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}jobs/${id}`);
  const data = await res.json();
  return {
    props: data,
  };
}

Edit.requireAuth = true;

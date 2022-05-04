import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import FormCustom from "../../../components/Reusable/FormCustom";
import AdminMenu from "../../../components/Admin/AdminMenu";

export default function Job(props) {
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
    status: "",
    qualifications: [],
    translation: {
      en: {
        name: "",
        description: "",
        qualifications: [],
      },
    },
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
    url: `jobs`,
    method: "POST",
  };

  return (
    <section className="admin bg-light spacing-sm">
      <div className="container">
        <AdminMenu></AdminMenu>
        <h1 className="form-basic__heading">Креирај оглас</h1>
        <FormCustom
          validate={validate}
          initialValues={initialValues}
          fields={fields}
          req={req}
          ctaTitle={"Креирај оглас"}
          messages={{ success: "Успешно го креиравте огласот!" }}
        ></FormCustom>
      </div>
    </section>
  );
}

Job.requireAuth = true;

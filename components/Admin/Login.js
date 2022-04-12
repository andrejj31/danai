import React from "react";
import * as Yup from "yup";
import FormCustom from "../Reusable/FormCustom";

export default function Login() {
  const validate = Yup.object({
    name: Yup.string().required("Ова поле е задолжително"),
    password: Yup.string().required("Ова поле е задолжително"),
  });

  const fields = [
    {
      name: "username",
      label: "Корисничко име",
      placeholder: "biooil.biooil",
    },
    {
      name: "password",
      label: "Лозинка",
      type: "password",
      placeholder: "●●●●●●●",
    },
  ];

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <FormCustom
      validate={validate}
      initialValues={initialValues}
      fields={fields}
      req={req}
      ctaTitle={"Креирај оглас"}
    ></FormCustom>
  );
}

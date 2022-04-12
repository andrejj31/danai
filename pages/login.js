import React from "react";
import * as Yup from "yup";
import FormCustom from "../components/Reusable/FormCustom";
import { useAuthContext } from "../context/authContext";

export default function Login() {
  const { user, initializing } = useAuthContext();

  const validate = Yup.object({
    username: Yup.string().required("Ова поле е задолжително"),
    password: Yup.string().required("Ова поле е задолжително"),
  });

  const fields = [
    {
      name: "username",
      label: "Корисничко име",
      placeholder: "danai.danai",
      className: "form-basic__group-full",
    },
    {
      name: "password",
      label: "Лозинка",
      type: "password",
      placeholder: "●●●●●●●",
      className: "form-basic__group-full",
    },
  ];

  const initialValues = {
    username: "",
    password: "",
  };

  const req = {
    url: `login`,
    method: "POST",
    options: { credentials: "include", withCredentials: true },
  };

  return (
    <div className="form-basic__bg bg-light spacing-sm">
      <section className="login container">
        <h1 className="login__heading form-basic__heading">
          Административна најава
        </h1>
        <FormCustom
          validate={validate}
          initialValues={initialValues}
          fields={fields}
          req={req}
          ctaTitle={"Најави се"}
          messages={{ success: "Успешно се најавивте!" }}
        ></FormCustom>
      </section>
    </div>
  );
}

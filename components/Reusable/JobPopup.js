import React from "react";
import usePopup from "../../hooks/usePopup";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";
import FormCustom from "./FormCustom";

export default function JobPopup(props) {
  const { show, handleClose } = usePopup(props);

  const { name, id } = props.popup;
  const validate = Yup.object({
    name: Yup.string().required("Ова поле е задолжително"),
    address: Yup.string().required("Ова поле е задолжително"),
    mail: Yup.string().required("Ова поле е задолжително"),
    number: Yup.string().required("Ова поле е задолжително"),
  });

  console.log(id);
  const initialValues = {
    name: "",
    address: "",
    mail: "",
    number: "",
    CV: "",
    applicationFor: id,
  };

  const fields = [
    {
      name: "name",
      type: "text",
      label: "Име и презиме",
    },
    {
      name: "address",
      type: "text",
      label: "Адреса на живеење",
    },
    {
      name: "mail",
      type: "text",
      label: "Е-пошта за контакт",
    },
    {
      name: "number",
      type: "text",
      label: "Телефон за контакт",
    },
    {
      name: "CV",
      type: "text",
      className: "form-basic__group-full",
      label:
        "Линк до вашето CV ( Можете да го прикачите бесплатно на files.fm)",
    },
  ];
  const req = {
    url: `job-applications`,
    method: "POST",
  };
  return (
    <div
      className="overlay"
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="popup-job">
        <h4>Апликациja за работна позиција: {name}</h4>
        <FormCustom
          validate={validate}
          initialValues={initialValues}
          fields={fields}
          req={req}
          ctaTitle={"Аплицирај за оваа позиција"}
          messages={{
            success: "Успешно аплициравте за оваа работна позиција!",
          }}
        ></FormCustom>
        <div className="popup-job__close" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
}

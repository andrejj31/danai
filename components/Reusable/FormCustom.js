import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import TextInput from "../Inputs/TextInput";
import FileInput from "../Inputs/FileInput";
import InputArray from "../Inputs/InputArray";
import TextArea from "../Inputs/TextArea";
import Select from "../Inputs/Select";
import useFetch from "../../hooks/useFetch";
import { serialize } from "object-to-formdata";
import FormModal from "./FormModal";
import { useRouter } from "next/router";

export default function FormCustom({
  validate,
  initialValues,
  fields,
  req,
  file = false,
  ctaTitle,
  messages,
}) {
  const [modal, setModal] = useState(null);
  const [body, setBody] = useState("");
  const { data, error } = useFetch(
    req.url,
    req.method,
    body,
    req.options,
    file
  );
  const router = useRouter();

  useEffect(() => {
    if (data) {
      if (data?.status == "success") {
        setModal({ msg: messages.success, status: "success" });
        setBody("");

        if (req.url === "login") {
          setTimeout(() => {
            router.push("/");
          }, 1000);
        }
      } else if (data?.status == "fail" || "error") {
        setModal({ msg: data.message, status: "fail" });
        setBody("");
      }
    }
    if (error) {
      setModal({ msg: error.message, status: "fail" });
    }
  }, [data, error]);

  return (
    <>
      {modal && <FormModal setModal={setModal} {...modal}></FormModal>}
      <Formik
        initialValues={{
          ...initialValues,
        }}
        enableReinitialize
        className="form-custom"
        validationSchema={validate}
        onSubmit={(values) => {
          if (file) {
            const fData = serialize(values);

            setBody(fData);
          } else {
            console.log(values);
            setBody(values);
          }
        }}
      >
        {(formik) => (
          <Form className="form-basic form-basic__container">
            {fields.map((el, idx) => {
              const { setFieldValue } = formik;
              const { type } = el;
              switch (type) {
                case "textarea":
                  return <TextArea key={idx} {...el}></TextArea>;
                case "select":
                  return <Select key={idx} {...el}></Select>;
                case "file":
                  return (
                    <FileInput
                      setFieldValue={setFieldValue}
                      key={idx}
                      {...el}
                    ></FileInput>
                  );
                case "fieldArray":
                  return <InputArray key={idx} {...el}></InputArray>;
                default:
                  return <TextInput key={idx} {...el}></TextInput>;
              }
            })}
            <button type="submit" className="cta-linear form-basic__cta">
              {ctaTitle}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

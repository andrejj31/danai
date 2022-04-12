import React from "react";
import { FieldArray, Field, useField } from "formik";

export default function TextInput({ label, className, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <FieldArray
        {...field}
        {...props}
        render={(arrayHelpers) => (
          <div className={`form-basic__group ${className ? className : ""}`}>
            <label htmlFor={field.name}>{label}</label>
            {field.value && field.value.length > 0 ? (
              field.value.map((f, idx) => {
                return (
                  <div className="form-basic__array" key={idx}>
                    <Field
                      className={"form-basic__input"}
                      name={`${field.name}.${idx}`}
                    ></Field>

                    <button
                      className="cta-classic"
                      type="button"
                      onClick={() => arrayHelpers.remove(idx)} // remove a friend from the list
                    >
                      Избриши
                    </button>
                  </div>
                );
              })
            ) : (
              <></>
            )}
            <button
              type="button"
              className="cta-classic form-basic__array-add"
              onClick={() => arrayHelpers.push("")} // insert an empty string at a position
            >
              + Додај ново поле
            </button>
          </div>
        )}
      />
    </>
  );
}

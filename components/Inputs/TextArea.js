import React from "react";
import { ErrorMessage, useField } from "formik";

export default function TextInput({ label, className, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={`form-basic__group ${className && className}`}>
      <label htmlFor={field.name}>{label}</label>
      <textarea
        autoComplete="off"
        {...field}
        {...props}
        rows="10"
        className={`form-basic__input ${
          meta.touched && meta.error && "form-basic__invalid"
        }`}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="form-basic__errormsg"
      />
    </div>
  );
}

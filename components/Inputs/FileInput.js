import React from "react";
import { ErrorMessage, useField } from "formik";

export default function TextInput({
  label,
  setFieldValue,
  className,
  ...props
}) {
  const [field, meta] = useField(props);
  const [val, setVal] = React.useState("");

  const handleChange = (e) => {
    setFieldValue(e.target.name, e.currentTarget.files[0]);
    setVal(e.target.value);
  };

  return (
    <div className={`form-basic__group ${className ? className : ""}`}>
      <label htmlFor={field.name}>{label}</label>
      <input
        autoComplete="off"
        {...field}
        {...props}
        value={val}
        onChange={handleChange}
        className="form-basic__input"
      />
    </div>
  );
}

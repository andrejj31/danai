import React from "react";
import { ErrorMessage, useField } from "formik";

export default function Select({ label, categories, className, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={`form-basic__group ${className ? className : ""}`}>
      <label htmlFor={field.name}>{label}</label>
      <select className="form-basic__input" {...field} {...props}>
        <option defaultChecked>{label}</option>
        {categories.map((category, idx) => {
          let name;
          if (category && category.name) {
            name = category.name;

            if (name == "true") {
              name = "Да";
            } else if (name == "false") {
              name = "Не";
            }
          } else {
            name = category;
          }
          return (
            <option key={idx} value={category.value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

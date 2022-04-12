import React from "react";

export default function PageHead({ title, desc }) {
  return (
    <div className="pageHead">
      <h1>{title}</h1>
      <span>{desc}</span>
    </div>
  );
}

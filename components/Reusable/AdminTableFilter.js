import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export default function AdminTableFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return (
    <div className="admin__search">
      <label>Пребарај:</label>
      <input
        className="form-basic__input"
        value={value || ""}
        type="search"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </div>
  );
}

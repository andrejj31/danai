import React, { useState } from "react";
import AdminOptionsBtn from "./AdminOptionsBtn";
import { useAuthContext } from "../../context/authContext";

export default function AdminOptions({ btns }) {
  const { user, initializing } = useAuthContext();
  return (
    <>
      {user && !initializing && (
        <div className="admin-options">
          <div className="admin-btns">
            {btns().map((btn, i) => {
              return <AdminOptionsBtn key={i} {...btn}></AdminOptionsBtn>;
            })}
          </div>
        </div>
      )}
    </>
  );
}

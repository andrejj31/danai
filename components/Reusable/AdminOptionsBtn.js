import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";

export default function AdminOptionsBtn({ title, type, location, req = {} }) {
  const router = useRouter();
  const [body, setBody] = useState("");

  const { data, error } = useFetch(location, req.method, body, req.options);
  const handleClick = (e) => {
    e.preventDefault();

    if (type === "edit") {
      router.push(location);
    } else if (type === "delete") {
      setBody(req.data);
    } else if (type === "modify") {
      setBody(req.data);
    }
  };

  useEffect(() => {
    if (data && data.status === "success") {
      setTimeout(() => {
        router.reload(window.location.pathname);
      }, 1000);
    }
  }, [data, error]);
  return (
    <button onClick={handleClick} className={`btn admin-cta`}>
      {title}
    </button>
  );
}

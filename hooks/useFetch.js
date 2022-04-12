import React from "react";

export default function useFetch(
  url,
  method,
  body,
  options = {},
  file = false
) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const fetchData = async (url, method, body, options) => {
    try {
      let requestOptions;

      if (file) {
        requestOptions = {
          method: method,
          // headers: { "Content-Type": "multipart/form-data" },
          body: body,
          ...options,
        };
      } else {
        requestOptions = {
          method: method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          ...options,
        };
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}${url}`,
        requestOptions
      );

      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err);
    }
  };

  React.useEffect(() => {
    if (body) {
      fetchData(url, method, body, options);
    }
  }, [body]);

  return { data, error };
}

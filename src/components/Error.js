import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log({ error });
  return (
    <>
      <h3>{error.message}</h3>
      {error.statusText && (
        <pre>
          {error.status} - {error.statusText}
        </pre>
      )}
    </>
  );
};

export default Error;

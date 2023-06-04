import React from "react";
import { Navigate, useLoaderData } from "react-router-dom";

export const loader = ({ request }) => {
  const url = new URL(request.url);
  const pathName = url.pathname || "/host";
  return { pathName };
};

const ProtectedRoute = ({ children }) => {
  const { pathName } = useLoaderData();
  const loggedIn = localStorage.getItem("loggedIn");

  if (!loggedIn) {
    return (
      <Navigate
        to={`/login?message=you must first log in&redirectTo=${pathName}`}
        replace
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;

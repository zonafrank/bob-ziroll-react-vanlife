import React from "react";
import {
  useLoaderData,
  useNavigation,
  Form,
  useActionData,
  Navigate
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedIn", JSON.stringify(true));
    localStorage.setItem("user", JSON.stringify(data));
    return { user: data };
  } catch (error) {
    return { error };
  }
}

export default function Login() {
  const message = useLoaderData();
  const navigation = useNavigation();
  const actionData = useActionData();

  if (actionData?.user) {
    return <Navigate to="/host" />;
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {actionData?.error && (
        <h3 className="red">
          {actionData?.error.status}: {actionData?.error.message}
        </h3>
      )}
      {message && <h3 className="red">{message}</h3>}

      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}

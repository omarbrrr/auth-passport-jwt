import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import classnames from "classnames";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const fieldType = e.target.id;
    const newValue = e.target.value;

    switch (fieldType) {
      case "email":
        setEmail(newValue);
        break;
      case "password":
        setPassword(newValue);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);
  };

  return (
    <div className="w-5/6 mx-auto mt-12 py-4 px-6 bg-white rounded-lg border-1 border-gray-200">
      <h4 className="mb-2 text-center text-md font-bold tracking-wider uppercase sm:text-lg">
        Log In
      </h4>
      <form noValidate onSubmit={onSubmit} className="text-sm">
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            onChange={onChange}
            value={email}
            error={errors.email}
            id="email"
            type="email"
            className={classnames(
              "w-full py-1 px-2 border rounded-md border-gray-200",
              {
                invalid: errors.email || errors.emailnotfound,
              }
            )}
          />
          <span className="text-red-600">
            {errors.email} {errors.emailnotfound}
          </span>
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            onChange={onChange}
            value={password}
            error={errors.password}
            id="password"
            type="password"
            className={classnames(
              "w-full py-1 px-2 border rounded-md border-gray-200",
              {
                invalid: errors.password || errors.passwordincorrect,
              }
            )}
          />
          <span className="text-red-600">
            {errors.password}
            {errors.passwordincorrect}
          </span>
        </div>
        <button
          type="submit"
          className="block mx-auto py-2 px-8 rounded-lg text-gray-100 bg-indigo-600"
        >
          Enter
        </button>
      </form>
      <p className="mt-4 text-center text-xs">
        Already have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-600 hover:text-indigo-800 pointer"
        >
          Register
        </Link>
      </p>
    </div>
  );
}

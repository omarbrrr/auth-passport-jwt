import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import classnames from "classnames";

import { registerUser } from "../../actions/authActions";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const fieldType = e.target.id;
    const newValue = e.target.value;

    switch (fieldType) {
      case "name":
        setName(newValue);
        break;
      case "email":
        setEmail(newValue);
        break;
      case "password":
        setPassword(newValue);
        break;
      case "password2":
        setPassword2(newValue);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2,
    };

    props.registerUser(newUser, props.history);
  };

  useEffect(() => {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    }
  });

  useEffect(() => {
    if (props.errors) {
      setErrors(props.errors);
    }
  }, [props.errors]);

  return (
    <div className="w-5/6 mx-auto mt-12 py-4 px-6 bg-white rounded-lg border-1 border-gray-200">
      {!props.auth.isAuthenticated ? (
        <>
          <h4 className="mb-2 text-center text-md font-bold tracking-wider uppercase sm:text-lg">
            Sign up!
          </h4>
          <form noValidate onSubmit={onSubmit} className="text-sm">
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <input
                onChange={onChange}
                value={name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames(
                  "w-full py-1 px-2 border rounded-md border-gray-200",
                  {
                    invalid: errors.name,
                  }
                )}
              />
              <span className="red-text">{errors.name}</span>
            </div>
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
                    invalid: errors.email,
                  }
                )}
              />
              <span className="text-red-600">{errors.email}</span>
            </div>
            <div className="mb-2">
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
                    invalid: errors.password,
                  }
                )}
              />
              <span className="text-red-600">{errors.password}</span>
            </div>
            <div className="mb-4">
              <label htmlFor="password2">Confirm Password</label>
              <input
                onChange={onChange}
                value={password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames(
                  "w-full py-1 px-2 border rounded-md border-gray-200",
                  {
                    invalid: errors.password2,
                  }
                )}
              />
              <span className="red-text">{errors.password2}</span>
            </div>
            <button
              type="submit"
              className="block mx-auto py-2 px-8 rounded-lg text-gray-100 bg-indigo-600"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-xs">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800 pointer"
            >
              Log in
            </Link>
          </p>
        </>
      ) : null}
    </div>
  );
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

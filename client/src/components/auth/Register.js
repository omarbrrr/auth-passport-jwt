import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { registerUser } from "../../actions/authActions";

import AuthContainer from "./AuthContainer";
import Form from "./Form";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const REGISTER_FIELDS = [
    {
      id: "name",
      type: "name",
      label: "Name",
      value: name,
      setValue: setName,
      errors: props.errors?.name_register,
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      value: email,
      setValue: setEmail,
      errors: props.errors?.email_register,
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      value: password,
      setValue: setPassword,
      errors: props.errors?.password_register,
    },
    {
      id: "password2",
      type: "password",
      label: "Confirm Password",
      value: password2,
      setValue: setPassword2,
      errors: props.errors?.password2_register,
    },
  ];

  const onRegister = (e) => {
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
  }, [props]);

  if (props.auth.isAuthenticated) return null;

  return (
    <AuthContainer>
      <h4 className="mb-2 text-center text-md font-bold tracking-wider uppercase sm:text-lg">
        Sign up!
      </h4>

      <Form
        type="register"
        inputs={REGISTER_FIELDS}
        submitHandler={onRegister}
        submitLabel="Register"
      />

      <p className="mt-4 text-center text-xs">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 hover:text-indigo-800 pointer"
        >
          Log in
        </Link>
      </p>
    </AuthContainer>
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

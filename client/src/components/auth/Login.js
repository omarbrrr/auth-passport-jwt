import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

import AuthContainer from "./AuthContainer";
import Form from "./Form";
import ToggleFormButton from "./ToggleFormButton";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const LOGIN_FIELDS = [
    {
      id: "email",
      type: "email",
      label: "Email",
      value: email,
      setValue: setEmail,
      errors: props.errors?.email_login,
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      value: password,
      setValue: setPassword,
      errors: props.errors?.password_login,
    },
  ];

  const onLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email: email,
      password: password,
    };

    props.loginUser(userData);
    setLoading(false);
  };

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/"); // push user to dashboard when they login
    }
  }, [props]);

  if (props.auth.isAuthenticated) return null;

  return (
    <AuthContainer>
      <h4 className="mb-2 text-center text-md font-bold tracking-wider uppercase sm:text-lg">
        Log In
      </h4>

      <Form
        type="login"
        inputs={LOGIN_FIELDS}
        submitHandler={onLogin}
        submitLabel="Enter"
        isLoading={loading}
      />

      <ToggleFormButton
        route="/register"
        text="Don't have an account?"
        buttonLabel="Sign up!"
      />
    </AuthContainer>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);

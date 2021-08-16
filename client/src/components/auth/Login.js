// React
import React, { useEffect, useState } from 'react';
// Router
import { withRouter } from 'react-router-dom';
// Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

// Components
import AuthContainer from './AuthContainer';
import Form from './Form';
import ToggleFormButton from './ToggleFormButton';

const Login = ({ errors, isAuthenticated, loginUser, history, title }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const LOGIN_FIELDS = [
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      value: email,
      setValue: setEmail,
      errors: errors?.email_login,
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      value: password,
      setValue: setPassword,
      errors: errors?.password_login,
    },
  ];

  const onLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email: email,
      password: password,
    };

    loginUser(userData);
    setLoading(false);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/'); // push user to dashboard when they login
    }
  }, [isAuthenticated, history]);

  if (isAuthenticated) {
    return null;
  }

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
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  title: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));

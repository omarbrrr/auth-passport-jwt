// React
import React, { useEffect, useState } from 'react';
// Router
import { withRouter } from 'react-router-dom';
// Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

// Components
import AuthContainer from './AuthContainer';
import Form from './Form';
import ToggleFormButton from './ToggleFormButton';

const Register = ({
  errors,
  isAuthenticated,
  registerUser,
  history,
  title,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [loading, setLoading] = useState(false);

  const REGISTER_FIELDS = [
    {
      id: 'name',
      type: 'name',
      label: 'Name',
      value: name,
      setValue: setName,
      errors: errors?.name_register,
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      value: email,
      setValue: setEmail,
      errors: errors?.email_register,
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      value: password,
      setValue: setPassword,
      errors: errors?.password_register,
    },
    {
      id: 'password2',
      type: 'password',
      label: 'Confirm Password',
      value: password2,
      setValue: setPassword2,
      errors: errors?.password2_register,
    },
  ];

  const onRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2,
    };

    registerUser(newUser, history);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (errors) {
      setLoading(false);
    }
  }, [errors]);

  useEffect(() => {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);

  if (isAuthenticated) {
    return null;
  }

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
        isLoading={loading}
      />

      <ToggleFormButton
        route="/login"
        text="Already have an account?"
        buttonLabel="Sign in!"
      />
    </AuthContainer>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  title: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

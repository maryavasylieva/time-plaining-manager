import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Registration from '../../components/Authentification/Registration/Registration';
import authRedirect from '../../components/Authentification/AuthRedirect';
import { signUp } from '../../redux/session/sessionOperations';

const SIGNUP_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email()
    .label('email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Seems a bit short...')
    .max(16, 'We prefer insecure system, try a shorter password.')
    .label('password')
    .required('Password is required'),
  passwordConfirm: Yup.string()
    .label('passwordConfirm')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

const RegistrationPage = ({ onSignUp }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      passwordConfirm: '',
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        const { email, password, passwordConfirm } = values;
        onSignUp({ email, password, passwordConfirm });
        setSubmitting(false);
      }, 100);
    }}
    validationSchema={SIGNUP_SCHEMA}
  >
    {props => <Registration {...props} />}
  </Formik>
);

RegistrationPage.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSignUp: signUp,
};

export default connect(
  null,
  mapDispatchToProps,
)(authRedirect(RegistrationPage));

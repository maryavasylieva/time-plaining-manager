import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LogIn from '../../components/Authentification/LogInForm/LogIn';
// import { isAuthentificated } from '../../redux/session/sessionSelectors';
import authRedirect from '../../components/Authentification/AuthRedirect';
import { signIn } from '../../redux/session/sessionOperations';

const SIGNIN_SCHEMA = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const LoginPage = ({ history, onSignIn }) => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const { email, password } = values;
          onSignIn({ email, password });
          setSubmitting(false);
        }, 100);
      }}
      validationSchema={SIGNIN_SCHEMA}
    >
      {props => <LogIn {...props} history={history} />}
    </Formik>
  </div>
);

LoginPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSignIn: signIn,
};

export default connect(
  null,
  mapDispatchToProps,
)(authRedirect(LoginPage));

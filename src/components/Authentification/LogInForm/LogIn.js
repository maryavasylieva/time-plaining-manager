import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import style from './LogInForm.module.css';
import FormButton from '../FormButton';
import Header from '../../Header/Header';
import { getError } from '../../../redux/session/sessionSelectors';

class LogIn extends Component {
  state = {};

  render() {
    const screenWidth = document.documentElement.clientWidth;
    const {
      errorMessage,
      values,
      handleBlur,
      handleChange,
      handleSubmit,
      errors,
      touched,
    } = this.props;
    return (
      <>
        {screenWidth < 768 && <Header />}
        <div className={style.loginContainer}>
          <div className={style.imgContainer} />

          <div className={style.textWrap}>
            <div className={style.loginTextWrap}>
              <h2 className={style.textLogin}>Log In</h2>
              <Link to="/registration" className={style.linkCreate}>
                <p className={style.textCreate}>Create an account</p>
              </Link>
            </div>

            <div className={style.formContainer}>
              <div className={style.mainText}>
                <span className={style.sloganText}>
                  Take control your life.
                </span>
                <span className={style.sloganText}>Just check in.</span>
              </div>

              <form
                method="GET"
                className={style.formLogin}
                onSubmit={handleSubmit}
              >
                <label htmlFor="1">
                  <p className={style.textEmail}>
                    E-mail<span className={style.star}>*</span>
                  </p>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    name="email"
                    className={style.input}
                    id={errors.email && values.email !== '' && style.errorInput}
                    placeholder="your@email.com"
                    required
                  />
                </label>
                {errors.email && touched.email && (
                  <div className={style.inputError}>{errors.email}</div>
                )}

                <label htmlFor="2">
                  <p className={style.password}>
                    <span className={style.textPassword}>
                      Password<span className={style.star}>*</span>
                    </span>
                  </p>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    name="password"
                    className={style.input}
                    id={
                      errors.password &&
                      values.password !== '' &&
                      style.errorInput
                    }
                    placeholder="your password"
                    required
                  />
                </label>
                {errors.password && touched.password && (
                  <div className={style.inputError}>{errors.password}</div>
                )}

                <FormButton type="submit">Log In</FormButton>
                {errorMessage && (
                  <p className={style.error}>Invalid email or password</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mSTP = state => ({
  errorMessage: getError(state),
});

const mDTP = {};

LogIn.defaultProps = {
  errorMessage: '',
};

LogIn.propTypes = {
  errorMessage: PropTypes.string,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(
  mSTP,
  mDTP,
)(LogIn);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './RegistrationForm.module.css';
import FormButton from '../../FormButton';

class RegistrationForm extends Component {
  state = {};

  render() {
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
      <form method="GET" className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.subTitle}>Your Account</h2>
        <label htmlFor="1" className={css.label}>
          <p className={css.labelTitle}>
            E-mail <span className={css.RequireField}>*</span>
          </p>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            type="email"
            id={errors.email && values.email !== '' && css.errorInput}
            className={css.formInput}
            placeholder="your@email.com"
            required
          />
        </label>
        {errors.email && touched.email && (
          <div className={css.inputError}>{errors.email}</div>
        )}
        <label htmlFor="2" className={css.label}>
          <p className={css.labelTitle}>
            Password (6 + characters)
            <span className={css.RequireField}>*</span>
          </p>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name="password"
            type="password"
            className={css.formInput}
            id={errors.password && values.password !== '' && css.errorInput}
            placeholder="your password"
            autoComplete="false"
            required
          />
        </label>
        {errors.password && touched.password && (
          <div className={css.inputError}>{errors.password}</div>
        )}
        <label htmlFor="3" className={css.label}>
          <p className={css.labelTitle}>
            Password Confirmation <span className={css.RequireField}>*</span>
          </p>

          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirm}
            name="passwordConfirm"
            type="password"
            id={
              errors.passwordConfirm &&
              values.passwordConfirm !== '' &&
              css.errorInput
            }
            className={css.formInput}
            placeholder="confirmation"
            autoComplete="false"
            required
          />
        </label>
        {errors.passwordConfirm && values.passwordConfirm !== '' && (
          <div className={css.inputError}>{errors.passwordConfirm}</div>
        )}
        <FormButton type="submit">Registration</FormButton>
        {errorMessage && (
          <p className={css.error}>This user is already registered</p>
        )}
      </form>
    );
  }
}

RegistrationForm.propTypes = {
  errorMessage: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RegistrationForm;

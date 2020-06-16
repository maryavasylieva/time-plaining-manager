import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as css from './BackButton.module.css';

const BackButton = ({ handleOpenDashboard }) => (
  <Link to="/dashboard" className={css.link}>
    <button
      type="button"
      className={css.backButton}
      onClick={handleOpenDashboard}
    >
      Back to Dashboard
    </button>
  </Link>
);

BackButton.propTypes = { handleOpenDashboard: PropTypes.func.isRequired };
export default BackButton;

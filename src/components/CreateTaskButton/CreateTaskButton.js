import React from 'react';
import PropTypes from 'prop-types';
import * as css from './CreateTaskButton.module.css';

const CreateTaskButton = ({ taskPopUpCreateOpen }) => (
  <button type="button" className={css.button} onClick={taskPopUpCreateOpen}>
    +
  </button>
);

CreateTaskButton.propTypes = { taskPopUpCreateOpen: PropTypes.func.isRequired };
export default CreateTaskButton;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskPopUp.module.css';

const PrioritySelect = ({ priority, onClick }) => (
  <div className={styles.selectContainer}>
    <h4 className={styles.title}>Priority</h4>
    <div
      className={styles.priorityDiv}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <button
        data-priority="1"
        type="button"
        className={`${styles.highPriorityBtn} ${
          priority === 1 ? styles.btnActive : null
        }`}
      >
        1
      </button>
      <button
        data-priority="2"
        type="button"
        className={`${styles.lowPriorityBtn} ${
          priority === 2 ? styles.btnActive : null
        }`}
      >
        2
      </button>
    </div>
  </div>
);

PrioritySelect.defaultProps = {
  priority: 0,
};

PrioritySelect.propTypes = {
  priority: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default PrioritySelect;

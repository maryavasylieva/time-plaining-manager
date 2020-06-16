import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import styles from './TaskPopUp.module.css';

const DateSelect = ({ value, onChange }) => (
  <div className={styles.selectContainer}>
    <h4 className={styles.title}>Date</h4>
    <DatePicker
      className={styles.dateInput}
      value={value}
      format="MMM dd, yyyy"
      locale="en"
      minDate={new Date()}
      onChange={onChange}
    />
  </div>
);

DateSelect.propTypes = {
  value: PropTypes.objectOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateSelect;

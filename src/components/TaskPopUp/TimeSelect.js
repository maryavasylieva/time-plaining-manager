import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import timeStyles from '../../helpers/timeSelectStylesHelper';
import timeRanges from '../../constants/timeRanges';
import styles from './TaskPopUp.module.css';

const TimeSelect = ({ value, onChange }) => (
  <div className={styles.selectContainer}>
    <h4 className={styles.title}>Time</h4>
    <Select
      options={timeRanges}
      value={value}
      onChange={onChange}
      styles={timeStyles}
    />
  </div>
);

TimeSelect.propTypes = {
  value: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TimeSelect;

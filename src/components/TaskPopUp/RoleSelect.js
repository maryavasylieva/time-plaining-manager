import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import roles from '../../constants/roles';
import roleStyles from '../../helpers/roleSelectStylesHelper';
import styles from './TaskPopUp.module.css';

const RoleSelect = ({ value, onChange, taskPopUpEditOpen }) => {
  return (
    <div className={styles.selectContainer}>
      <h4 className={styles.title}>Choose Role</h4>
      <Select
        value={value}
        options={roles}
        styles={roleStyles}
        onChange={onChange}
        defaultMenuIsOpen={!taskPopUpEditOpen}
      />
    </div>
  );
};

RoleSelect.defaultProps = {
  taskPopUpEditOpen: false,
};

RoleSelect.propTypes = {
  value: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  taskPopUpEditOpen: PropTypes.bool,
};

export default RoleSelect;
